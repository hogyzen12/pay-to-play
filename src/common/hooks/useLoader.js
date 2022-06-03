import { useSelector } from 'react-redux';

const useLoader = () => {
  const { isLoading } = useSelector(state => state.loader);

  return {
    isLoading,
  };
};

export default useLoader;
