import { Connection } from '@solana/web3.js';
import { NETWORK } from 'common/utils/nftCreation';

export const connection = new Connection(NETWORK);
