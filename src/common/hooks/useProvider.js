import { useSelector } from 'react-redux';

const useProvider = () => {
  const {
    provider,
    providerPubKey,
    transferTokenStatus,
    transactionSignature,
  } = useSelector(state => state.provider);

  return {
    provider,
    providerPubKey,
    transferTokenStatus,
    transactionSignature,
  };
};

export default useProvider;
