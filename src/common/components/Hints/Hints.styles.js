export const styles = {
  hints: {
    width: { md: '50%' },
  },
  title: {
    fontSize: '24px',
    lineHeight: '21.6px',
    marginBottom: { xs: '8px', md: '20px' },
  },
  axisWrapper: {
    display: 'flex',
    gap: '16px',
  },
  axis: {
    padding: { md: '16px' },
    width: { md: '50%' },
    borderRadius: '8px',
    bgcolor: theme => theme.palette.info.main,
  },
  axisHeading: {
    display: 'flex',
    paddingBottom: { md: '16px' },
    borderBottom: theme => `1px solid ${theme.palette.primary.main}`,
  },
  axisTitle: {
    color: 'custom.white',
    marginRight: { md: '8px' },
  },
  questionList: {
    listStyleType: 'none',
    padding: '0',
  },
  questionItem: {
    display: 'flex',
    alignItems: 'center',
  },
  questionNumber: {
    marginRight: '16px',
  },
  question: {},
};
