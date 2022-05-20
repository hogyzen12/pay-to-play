export const styles = {
  item: {
    bgcolor: '#191819',
    marginBottom: '8px',
    borderRadius: '4px',
    '&.Mui-expanded': {
      mt: '0',
      mb: '8px',
    },
  },
  icon: { color: 'custom.white', fontSize: '16px' },
  title: {},
  description: { fontSize: '14px', lineHeight: '24px', color: '#A2A2A2' },
  detailsExpanded: {
    paddingTop: '0',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '24px',
  },
  details: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  text: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: { xs: '240px', md: '400px' },
  },
  link: { color: '#512DA8' },
};
