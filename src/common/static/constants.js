import { clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

export let shadowRequiredToPlay = 1.0 * LAMPORTS_PER_SOL;
export let diamondsRequiredToPlay = 1;
export let utilmemo = 'DMND utility being used';

export const NETWORK = clusterApiUrl('mainnet-beta');
export const timeAmount = 3600; // one hour 3600
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
