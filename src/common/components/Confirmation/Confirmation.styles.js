export const styles = {
  title: { color: '#fff' },
  content: {},
  description: {},
  actions: {},
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '', md: '10px 16px' },
    width: 'fit-content',
    border: theme => `1px solid ${theme.palette.success.main}`,
    '&:hover': {
      borderColor: '#FFF',
    },
  },
  btnText: {
    lineHeight: { xs: '14px' },
    color: theme => theme.palette.custom.white,
  },
};
