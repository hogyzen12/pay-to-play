export const styles = {
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxHeight: '1650px',

    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#A2A2A2',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  card: {
    minHeight: '540px',
  },
};
