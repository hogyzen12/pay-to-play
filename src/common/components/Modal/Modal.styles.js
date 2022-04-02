export const styles = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: { xs: '90%', xl: '1020px' },
    width: '100%',
    bgcolor: '#1D1D1D',
    padding: { md: '32px' },
    borderRadius: '8px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: { md: '32px' },
  },
  content: {
    display: 'flex',
    paddingTop: { md: '32px' },
    marginBottom: { md: '32px' },
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
  },
  axis: {
    padding: { md: '16px' },
    width: { md: '50%' },
  },
  axisHeading: {
    display: 'flex',
    paddingBottom: { md: '16px' },
    borderBottom: theme => `1px solid ${theme.palette.primary.main}`,
  },
  axisTitle: {
    marginRight: { md: '8px' },
  },
  answersList: {
    listStyleType: 'none',
    padding: '0',
  },
  title: {
    fontSize: { md: '32px' },
    fontWeight: { md: 500 },
  },
  statsWrapper: {
    display: 'flex',
  },
  stats: {
    display: 'flex',

    '&:first-of-type': {
      marginRight: { md: '32px' },
    },
  },
  statsTitle: {
    marginRight: { md: '8px' },
  },
  statsResult: {
    color: 'custom.white',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: { md: '32px' },
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
  },
  link: {
    color: '#A5A5A5',
  },
  submit: {
    padding: '16px 54px',
    background:
      'linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), linear-gradient(0deg, #512DA8, #512DA8), linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), #4AAF47;',
    color: theme => theme.palette.primary.main,
  },
};
