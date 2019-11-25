import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import paginationButtonStyles from './paginationButtonStyles';

const PaginationButtons = ({ classes, data, pageNo, setPageNo }) => {
  const handlePrevious = () => {
    const newPageNo = pageNo - 1;
    setPageNo(newPageNo);
  };

  const handleNext = () => {
    const newPageNo = pageNo + 1;
    setPageNo(newPageNo);
  };

  const renderPreviousBtn = pageNo > 1 && (
    <Button
      color='primary'
      style={{ borderRightColor: 'unset' }}
      onClick={handlePrevious}
      className={classes.paginationButton}
    >
      <ArrowBackIcon />
    </Button>
  );

  const renderPagination =
    data && data.length ? `${pageNo} of ${data.length}` : '0 of 0';

  const renderNextBtn = pageNo !== data.length && (
    <Button onClick={handleNext} className={classes.paginationButton}>
      <ArrowForwardIcon />
    </Button>
  );

  return (
    <ButtonGroup color='primary' className={classes.buttonsContainer}>
      <Box className={classes.containerGrid}>
      {renderPreviousBtn}
      </Box>
      <Box className={classes.containerGrid}>
        <Typography color='textPrimary'>{renderPagination}</Typography>
      </Box>
      <Box className={classes.containerGrid}>
      {renderNextBtn}
      </Box>
    </ButtonGroup>
  );
};

export default withStyles(paginationButtonStyles)(PaginationButtons);
