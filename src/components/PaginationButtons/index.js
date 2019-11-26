import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const PaginationButtons = ({ data, pageNo, setPageNo }) => {
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
      variant='contained'
      size='medium'
      color='primary'
      disableFocusRipple={true}
      disableRipple={true}
      onClick={handlePrevious}
    >
      <ArrowBackIcon />
    </Button>
  );

  const renderPagination =
    data && data.length ? `${pageNo} of ${data.length}` : '0 of 0';

  const renderNextBtn = pageNo !== data.length && (
    <Button
      variant='contained'
      size='medium'
      color='primary'
      disableFocusRipple={true}
      disableRipple={true}
      onClick={handleNext}
    >
      <ArrowForwardIcon />
    </Button>
  );

  return (
    <Grid
      container
      xs={12}
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Grid item xs={3} align='center'>
        {renderPreviousBtn}
      </Grid>
      <Grid item xs={3} align='center'>
        <Typography color='textPrimary'>{renderPagination}</Typography>
      </Grid>
      <Grid item xs={3} align='center'>
        {renderNextBtn}
      </Grid>
    </Grid>
  );
};

export default PaginationButtons;
