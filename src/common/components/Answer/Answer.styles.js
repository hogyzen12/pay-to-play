export const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: theme => theme.palette.primary.main,

    '&:not(last-of-type)': {
      marginBottom: '4px',
    },
  },
  number: {
    fontSize: '16px',
    lineHeight: '14px',
    marginRight: '16px',
  },
  answer: {
    fontSize: '14px',
    lineHeight: '14px',
    marginRight: '8px',
  },
  question: {
    maxWidth: '56%',
    width: '100%',
    fontSize: '14px',
    lineHeight: '14px',
    marginLeft: 'auto',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: theme => theme.palette.success.contrastText,
  },
};
