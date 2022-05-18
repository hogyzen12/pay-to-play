import { clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

export let shadowRequiredToPlay = 1.0 * LAMPORTS_PER_SOL;
export let diamondsRequiredToPlay = 1;

export let utilMemo = 'DMND utility being used';
export let raffleMemo = 'Lionel Trashi Raffle Entry ';
export let raffleTwoMemo = 'Count Trashula Raffle Entry ';
export let raffleThreeMemo = 'Count Trashula Raffle Entry '; // !HAS TO BE REPLACED

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
  'RfLEqoqP9KDrJXurCppiQSbPz2VfsmMbijEq9ffh3uv',
);
export const raffleTwoWalletPublicKey = new PublicKey(
  'RfLzaUVd3BYbonSiztTGho1RKKxmmnce97p2AWDJvAE',
);
export const raffleThreeWalletPublicKey = new PublicKey(
  'RfLzaUVd3BYbonSiztTGho1RKKxmmnce97p2AWDJvAE', // !HAS TO BE REPLACED
);

export const NETWORK = clusterApiUrl('mainnet-beta');
export const txLink = 'https://solscan.io/tx';
export const expiryTimestamp = new Date();
export const totalQuestions = 30;
export const SOLamount = '0.1';
export const DHMTamount = '1';
export const SHDWamount = '1';
export const timeAmount = 3600; // one hour 3600

// Crossword game theme config
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
