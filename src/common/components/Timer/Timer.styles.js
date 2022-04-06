export const styles = {
  timer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'custom.white',
    // marginRight: '16px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: theme => `1px solid ${theme.palette.success.contrastText}`,
    width: '24px',
    height: '24px',
  },
  icon: {
    width: '16px',
    color: theme => theme.palette.success.contrastText,
  },
};
