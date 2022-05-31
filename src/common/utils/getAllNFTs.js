// import { Connection } from '@metaplex/js';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
// import { NETWORK } from 'common/static/constants';

export const getAllNFTs = async (connection, providerPubKey) => {
  const pKey = providerPubKey.toString();

  console.log('%cPubKey :>> ', 'color: orange', pKey);
  console.log('%cConnection :>> ', 'color: orange', connection);

  const nftsmetadata = await Metadata.findDataByOwner(connection, pKey);

  console.log('%cNFTsMetadata :>> ', 'color: blue', nftsmetadata);

  return nftsmetadata;
};
