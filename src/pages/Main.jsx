import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { resetSignature } from 'redux/provider/providerSlice';
import { ChoiceCard } from 'common/components';
import { AppContainer } from 'common/layout';
import { cards } from 'common/static/cards';
import staticContent from 'common/static/content.json';
import withMetadata from 'common/hoc/withMetadata';

const { title, description } = staticContent.meta.main;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
      xl: 'repeat(3, 1fr)',
    },
    gridTemplateRows: { xs: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' },
    gridColumnGap: { md: '16px' },
    gridRowGap: '16px',
  },
  custom: {
    maxWidth: '100%',
    gridColumn: { md: '1 / 3', lg: '1 / 4', xl: '1 / 4' },
  },
};

const Main = ({ handlePay }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSignature());
  }, [dispatch]);

  return (
    <>
      <AppContainer customStyles={styles.container} size="xl">
        <Box sx={styles.choice}>
          {cards.map((card, index) => (
            <ChoiceCard
              key={index}
              card={card}
              handlePay={handlePay}
              customStyles={index === 0 && styles.custom}
            />
          ))}
        </Box>
      </AppContainer>
    </>
  );
};

export default withMetadata({ title, description })(Main);
