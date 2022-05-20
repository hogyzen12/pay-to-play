export const styles = {
  ticket: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: { xs: '100%', md: '328px' },
    boxShadow: '0px 0px 15px -3px rgba(255,255,255,0.1)',
    '&:hover': {
      boxShadow: '0px 0px 15px -3px rgba(255,255,255,0.3)',
    },
    minHeight: { xs: '500px' },
  },
  image: {
    borderRadius: '6px',
    marginBottom: '20px',
  },
  title: {
    fontFamily: 'Bebas Neue',
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '24px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  },
  winners: {},
  status: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px 0',
  },
  countdown: {
    textAlign: 'center',
    color: 'green',
  },
  closed: {
    fontFamily: 'Bebas Neue',
    fontSize: '32px',
    color: 'red',
    transform: 'rotate(8deg)',
    bottom: '60px',
    position: 'absolute',
    userSelect: 'none',
  },
  actions: {
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
  },
};
