export const styles = {
  contentMobile: {
    bgcolor: '#1D1D1D',
    padding: '20px 20px 48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    maxWidth: '560px',
    width: '100%',
    borderRadius: '8px',
    padding: { xs: '32px 16px', md: '32px 20px' },
    bgcolor: '#1D1D1D',
    transform: 'translate(-50%, -50%)',
  },
  closeIcon: {
    position: 'absolute',
    right: '20px',
    top: '20px',
  },
  icon: { color: '#A2A2A2' },
  image: {
    maxWidth: '240px',
    marginBottom: { md: '32px' },
  },
  title: {
    fontSize: '24px',
    lineHeight: '24px',
    margin: '32px 0 16px',
  },
  description: {
    textAlign: 'center',
    lineHeight: '19.6px',
    maxWidth: { xs: '322px', md: '410px' },
    marginBottom: { xs: '58px', md: '32px' },
    color: theme => theme.palette.text.secondary,
  },
  link: {
    color: 'custom.white',
  },
  button: {},
};
