export const styles = {
  game: {
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    gap: '24px',
    padding: { md: '0 5%', lg: '0' },
  },
  grid: {
    width: { xs: '100%', lg: '50%' },
    padding: '8px',
    bgcolor: '#404040',
    borderRadius: '8px',
    height: 'fit-content',
  },
  title: {
    fontSize: '24px',
    lineHeight: '21.6px',
    marginBottom: '20px',
  },
  hints: {
    width: { xs: '100%', lg: '50%' },
  },
  clues: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '16px',
  },
};
