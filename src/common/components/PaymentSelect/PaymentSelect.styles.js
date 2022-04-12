export const styles = {
  select: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { md: 'space-between' },
    alignItems: { xs: 'flex-start', md: 'center' },
    paddingTop: { xs: '24px', md: '32px' },
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
  },
  title: {
    marginBottom: { xs: '16px', md: '0' },
  },
  buttons: {
    display: 'flex',
    width: { xs: '100%', md: 'fit-content' },
    gap: '8px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '', md: '10px 16px' },
    border: theme => `1px solid ${theme.palette.success.main}`,
    width: { xs: '50%', md: 'fit-content' },
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
