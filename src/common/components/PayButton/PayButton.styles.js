export const styles = {
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '', md: '10px 16px' },
    width: '50%',
    border: theme => `1px solid ${theme.palette.success.main}`,
    '&:hover': {
      borderColor: '#FFF',
    },
  },
  buttonText: {
    lineHeight: { xs: '14px' },
    color: theme => theme.palette.custom.white,
    marginRight: '8px',
  },
  buttonIcon: {
    color: theme => theme.palette.success.contrastText,
  },
};
