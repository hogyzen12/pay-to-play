import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as splToken from '@solana/spl-token';
import {
  Box,
  Typography,
  Modal as SubmitModal,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  setTransferTokenStatus,
  setTransactionSignature,
} from 'redux/provider/providerSlice';
import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { modalClosed, modalOpened } from 'redux/modal/modalSlice';
import { notificationOpened } from 'redux/notification/notificationSlice';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { Button, Answer, Tabs } from 'common/components';
import {
  tokenMint,
  gameWalletPublicKey,
  diamondsRequiredToPlay,
} from 'common/static/constants';
import { initialResults } from 'common/static/results';
import { ReactComponent as AcrossIcon } from 'assets/icons/across.svg';
import { styles } from './ModalSubmit.styles';
import staticContent from 'common/static/content.json';

const totalQuestions =
  initialResults.across.length + initialResults.down.length;

const { guessed, title, across, button, down, something } =
  staticContent.pages.crossword.submitModal;

const ModalSubmit = ({ connection }) => {
  const [totalGuesses, setTotalGuesses] = useState(0);
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { isModalOpen } = useSelector(state => state.modal);
  const { provider, providerPubKey } = useSelector(state => state.provider);

  useEffect(() => {
    if (isModalOpen) {
      setTotalGuesses(0);
      getGuessesTotal('across');
      getGuessesTotal('down');
    }
  }, [isModalOpen]);

  const handleClose = () => {
    dispatch(modalClosed());
  };

  const getGuessesTotal = axis => {
    initialResults[axis].map(guess => {
      if (guess.answer.length > 0) setTotalGuesses(prevState => prevState + 1);
    });
  };

  const handleSubmit = async () => {
    dispatch(loaderActive());
    handleClose();

    const acrossAxisString =
      initialResults.across.reduce((acc, item) => {
        acc += item.answer ? `| ${item.answer} ` : `|  `;

        return acc;
      }, '') + '|';

    const downAxisString =
      initialResults.down.reduce((acc, item) => {
        acc += item.answer ? `| ${item.answer} ` : `|  `;

        return acc;
      }, '') + '|';

    const totalResultsString = (acrossAxisString + downAxisString).replace(
      '||',
      '|',
    );

    /*
     * Now we have answers ready we can write them to the chain
     * And have the user actually pay for this using the token
     */
    const diamondAddress = await splToken.getAssociatedTokenAddress(
      tokenMint,
      providerPubKey,
    );

    /*
     * Output the ATA to console to check manually
     * TODO!!!! ADD ERROR HANDLE IF ATA NOT FOUND
     */
    // console.log(diamondAddress.toString());
    // console.log('found ATA');

    /*
     * Address found and we pull balance succesfully here
     * Print to console the amount to check
     */

    const diamondBalance = await connection.getTokenAccountBalance(
      diamondAddress,
    );

    // console.log(diamondBalance.value.amount);
    // console.log('found balance');
    // console.log(totalResultsString);

    /*
     * Time to get them to send us their Diamond
     * For this we need to use the Associated token accounts
     * We know the accs will exist as the payer has diamonds to have gotten to this stage
     * we call our custom function here to do this
     */

    const result = await transferDiamondToken(
      provider,
      connection,
      tokenMint,
      providerPubKey,
      gameWalletPublicKey,
      diamondBalance.value.amount,
      diamondsRequiredToPlay,
      totalResultsString,
    );

    console.log('result', result);
    console.log('result', result.status);
    console.log('result', result.error);

    if (!result.status) {
      // dispatch(setTransferTokenStatus(result.status));
      dispatch(loaderDisabled());
      dispatch(
        notificationOpened({
          open: true,
          message: result.error
            ? result.error
            : 'Error in sending the tokens, Please try again',
          severity: 'error',
          tx: '',
        }),
      );

      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    console.log('result.signature', result.signature);

    if (result.signature) {
      dispatch(setTransactionSignature(result.signature));
      dispatch(modalOpened('success'));
    }

    dispatch(loaderDisabled());
  };

  const modalContent = () => (
    <Box sx={matches ? styles.modal : styles.drawer}>
      <Box sx={styles.heading} component="header">
        <Typography sx={styles.title}>{title}</Typography>
        <Box sx={styles.statsWrapper}>
          <Box sx={styles.stats}>
            <Typography sx={styles.statsTitle} variant="h3">
              {guessed}
            </Typography>
            <Typography sx={styles.statsResult} variant="h3">
              {totalGuesses}/{totalQuestions}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.content} component="section">
        {matches ? (
          <>
            <Box sx={styles.axis}>
              <Box sx={styles.axisHeading}>
                <Typography sx={styles.axisTitle} variant="h3">
                  {across}
                </Typography>
                <AcrossIcon />
              </Box>
              <Box sx={styles.answersList} component="ul">
                {initialResults.across.map((result, index) => (
                  <Answer
                    key={index}
                    number={result.number}
                    question={result.clue}
                    answer={result.answer}
                  />
                ))}
              </Box>
            </Box>
            <Box sx={styles.axis}>
              <Box sx={styles.axisHeading}>
                <Typography sx={styles.axisTitle} variant="h3">
                  {down}
                </Typography>
                <AcrossIcon style={{ transform: 'rotate(90deg)' }} />
              </Box>
              <Box sx={styles.answersList} component="ul">
                {initialResults.down.map(result => (
                  <Answer
                    key={result.number}
                    number={result.number}
                    question={result.clue}
                    answer={result.answer}
                  />
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Tabs initialResults={initialResults} />
        )}
      </Box>

      <Box sx={styles.footer} component="footer">
        {/* <Link sx={styles.link} href="#">
          {something}
        </Link> */}
        <Typography>{something}</Typography>
        <Button title={`${button} (1 DMND)`} onClick={handleSubmit} />
      </Box>
    </Box>
  );

  return (
    <>
      {matches ? (
        <SubmitModal open={isModalOpen} onClose={handleClose}>
          {modalContent()}
        </SubmitModal>
      ) : (
        <Drawer anchor="bottom" open={isModalOpen} onClose={handleClose}>
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSubmit;
