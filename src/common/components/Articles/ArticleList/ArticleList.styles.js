export const styles = {
  column: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(1, 1fr)',
      sm: 'repeat(1, 1fr)',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
      xl: 'repeat(1, 1fr)',
    },
    gridGap: '8px',
    maxHeight: '1696px',

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
    minHeight: { xs: '540px', xl: '560px' },
  },
};
