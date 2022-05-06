import { clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

export let shadowRequiredToPlay = 1.0 * LAMPORTS_PER_SOL;
export let diamondsRequiredToPlay = 1;
export let utilMemo = 'DMND utility being used';
export let raffleMemo = 'Lionel Trashi Raffle Entry ';
export let raffleTwoMemo = 'Count Trashula Raffle Entry ';

export const NETWORK = clusterApiUrl('mainnet-beta');
export const expiryTimestamp = new Date();

export const tokenMint = new PublicKey(
  'FdSBbLHK8hfc6BSqjrhQZaGj7jgd5vfPcchDB2RDAQFA',
);
export const shadowMint = new PublicKey(
  'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y',
);
export const gameWalletPublicKey = new PublicKey(
  'CproxWoLCk4QrCd3VJNUpo3QZf3bjEnTN1FuBcRbZYaw',
);
export const raffleWalletPublicKey = new PublicKey(
  'RfLnyLf4hf8eRaGKrKpHfjHqgcSv8X1ocysdW53xCqF',
);
export const raffleTwoWalletPublicKey = new PublicKey(
  'RfLQPVzYJkDZeJg4XF4uoa5Bnu7yQtymRQSPmLdAEDr',
);

export const txLink = 'https://solscan.io/tx';
export const totalQuestions = 30;
export const SOLamount = '0.1';
export const DHMTamount = '1';
export const SHDWamount = '1';
export const timeAmount = 3600; // one hour 3600

export const theme = {
  textColor: '909090',
  gridBackground: '#404040',
  cellBackground: '#FFF',
  cellBorder: '#404040',
  numberColor: '#141414',
  focusBackground: '#CDCCF5',
  highlightBackground: '#CDCCF5', // #EEEEFC
};

export const initialAlertState = {
  open: false,
  message: '',
  severity: undefined,
  tx: '',
};
