import { clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

export const NETWORK = clusterApiUrl('mainnet-beta');
export const solscanUrl = 'https://solscan.io/tx';
export const memberAddress = 'memberclaims@cryptonary.com';
export const nonMemberAddress = 'nonmemberclaims@cryptonary.com';
export const SOLamount = '0.1';
export const DHMTamount = '1';
export const SHDWamount = '1';
export const timeAmount = 10799; // one hour 3600
export const expiryTimestamp = new Date();

export let shadowRequiredToPlay = 1.0 * LAMPORTS_PER_SOL;
export let diamondsRequiredToPlay = 1;

export let utilMemo = 'DMND utility being used';
export let portalsRaffleMemo = 'Portals cc Raffle Entry ';
export let tombstonedRaffleMemo = 'Tombstoned Raffle Entry ';
export let diamondsGameRaffleMemo = 'Diamonds Game 2 Entry ';
export let testMemo = 'Test Entry '; // !TEST VALUE

export const tokenMint = new PublicKey(
  'FdSBbLHK8hfc6BSqjrhQZaGj7jgd5vfPcchDB2RDAQFA',
);
export const shadowMint = new PublicKey(
  'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y',
);
export const gameWalletPublicKey = new PublicKey(
  'CproxWoLCk4QrCd3VJNUpo3QZf3bjEnTN1FuBcRbZYaw',
);
export const portalsRafflePublicKey = new PublicKey(
  'Rf3PiAvNdy6KgHMXQhLr1fJPQujbvKmopHyoM6eP4jP',
);
export const tombstonedRafflePublicKey = new PublicKey(
  'Rf3XUKqNiDeXnLdf96xqddwMBtuC3EzVRYNVXeQGUc1',
);
export const diamondsGameRafflePublicKey = new PublicKey(
  'gm2bnBrvoRQRhvU1d24FPgHmdMySfbxeYcXxvFAZkpc',
);
export const testRafflePublicKey = new PublicKey(
  'RfLp216Smd15xDGbJKb6gxYUPyKj2aLoMPhzRNNcYke', // !TEST VALUE
);

export const initialAlertState = {
  open: false,
  message: '',
  severity: undefined,
  tx: '',
};

export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
