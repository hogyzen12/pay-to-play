export const styles = {
  drawer: {
    padding: '32px 20px',
    bgcolor: theme => theme.palette.info.main,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1020px',
    width: '100%',
    bgcolor: theme => theme.palette.info.main,
    padding: { xs: '32px 16px', md: '32px' },
    borderRadius: '8px',
  },
  heading: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { md: 'space-between' },
    alignItems: { md: 'center' },
    marginBottom: '32px',
  },
  title: {
    fontSize: { xs: '20px', md: '32px' },
    lineHeight: { xs: '20px', md: '32px' },
    fontWeight: { md: 500 },
    marginBottom: { xs: '32px', md: '0' },
  },
  statsWrapper: {
    display: 'flex',
  },
  stats: {
    display: 'flex',

    '&:first-of-type': {
      marginRight: '32px',
    },
  },
  statsTitle: {
    fontSize: { xs: '20px', md: '32px' },
    lineHeight: { xs: '20px', md: '32px' },
    marginRight: '8px',
  },
  statsResult: {
    fontSize: { xs: '20px', md: '32px' },
    lineHeight: { xs: '20px', md: '32px' },
    color: 'custom.white',
  },
  content: {
    display: 'flex',
    paddingTop: '32px',
    marginBottom: '32px',
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
  footer: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    justifyContent: { md: 'space-between' },
    alignItems: 'center',
    paddingTop: '32px',
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
  },
  link: {
    fontSize: { xs: '14px' },
    lineHeight: { xs: '14px' },
    marginTop: { xs: '32px' },
    color: '#A5A5A5',
  },
  submit: {
    padding: '16px 54px',
    background:
      'linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), linear-gradient(0deg, #512DA8, #512DA8), linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), #4AAF47;',
    color: theme => theme.palette.primary.main,
  },
};
