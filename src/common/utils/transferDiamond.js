const web3 = require('@solana/web3.js');
import { SystemProgram, Transaction } from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import {
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from './programIds';

const createDiamondTransferTransaction = async (
  ownerPubkey,
  connection,
  fromAssociatedTokenAccountPubkey,
  toAssociatedTokenAccountPubkey,
  fromTokenAccountPubkey,
) => {
  let transaction = new web3.Transaction().add(
    splToken.createTransferInstruction(
      fromAssociatedTokenAccountPubkey,
      toAssociatedTokenAccountPubkey,
      fromTokenAccountPubkey,
      1,
      [],
      TOKEN_PROGRAM_ID,
    ),
  );
  transaction.feePayer = ownerPubkey;
  console.log('Getting recent blockhash');
  transaction.recentBlockhash = (
    await connection.getRecentBlockhash()
  ).blockhash;
  return transaction;
};

/**
 * This utility function will transfer an SPL token from one user wallet to another user's wallet
 * @param {*} provider : provider of the phantom wallet
 * @param {*} connection : connection to the solana cluster
 * @param {*} tokenToTransfer : token mint to be transferred
 * @param {PublickKey} fromTokenAccountPubkey : sender of the token - connected
 * @param {*} toTokenAccountPubkey : receiver of the token - treasury
 * @param {*} checkDiamondBalance : amount of the custom token as
 * @returns
 */

export const transferDiamondToken = async (
  provider,
  connection,
  tokenToTransfer,
  fromTokenAccountPubkey,
  toTokenAccountPubkey,
  checkDiamondBalance,
) => {
  if (checkDiamondBalance < 1) {
    return {
      status: false,
      error: 'You can not transfer, Token to transfer should be at least one.',
    };
  }
  const fromAssociatedTokenAccountPubkey =
    await splToken.getAssociatedTokenAddress(
      tokenToTransfer,
      fromTokenAccountPubkey,
    );

  const toAssociatedTokenAccountPubkey =
    await splToken.getAssociatedTokenAddress(
      tokenToTransfer,
      toTokenAccountPubkey,
    );

  console.log(fromAssociatedTokenAccountPubkey.toString());
  console.log(toAssociatedTokenAccountPubkey.toString());
  console.log(fromTokenAccountPubkey.toString());

  const transaction = await createDiamondTransferTransaction(
    provider.publicKey,
    connection,
    fromAssociatedTokenAccountPubkey,
    toAssociatedTokenAccountPubkey,
    fromTokenAccountPubkey,
  );

  if (transaction) {
    try {
      let signed = await provider.signTransaction(transaction);
      console.log('Got signature, submitting transaction');

      let signature = await connection.sendRawTransaction(signed.serialize());
      console.log(
        'Submitted transaction ' + signature + ', awaiting confirmation',
      );

      await connection.confirmTransaction(signature);
      console.log('Transaction ' + signature + ' confirmed');

      return { status: true, signature };
    } catch (e) {
      console.warn(e);
      console.log('Error: ' + e.message);
      return { status: false, error: e.message };
    }
  }
  return {
    status: false,
    error: 'No transaction found',
  };
};
