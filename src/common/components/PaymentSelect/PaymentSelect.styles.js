export const styles = {
  select: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: { xs: '24px', md: '32px' },
    borderTop: '1px solid #404040',
  },
  title: {},
  buttons: {
    display: 'flex',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '', md: '10px 16px' },
    border: '1px solid #404040',

    '&:first-of-type': {
      marginRight: '8px',
    },
  },
  buttonText: {
    color: '#fff',
    marginRight: '8px',
  },
  buttonIcon: {
    color: '#A2A2A2',
  },
};
