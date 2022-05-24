export const styles = {
  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '10px',
    mb: '4px',
  },
  input: {
    width: '100%',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '10px 16px', md: '10px 24px' },
    width: { xs: '100%', md: 'fit-content' },
    background: 'linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), #4AAF47',
    border: 'none',
    color: '#000',
    minHeight: '56px',
    minWidth: { md: '150px' },
  },
  error: { color: 'red', height: '25px' },
};
