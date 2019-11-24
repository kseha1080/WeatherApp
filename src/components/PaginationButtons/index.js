import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
      color='primary'
      style={{ borderRightColor: 'unset' }}
      onClick={handlePrevious}
    >
      <ArrowBackIcon />
    </Button>
  );

  const renderPagination =
    data && data.length ? `${pageNo} of ${data.length}` : '0 of 0';

  const renderNextBtn = pageNo !== data.length && (
    <Button onClick={handleNext}>
      <ArrowForwardIcon />
    </Button>
  );

  return (
    <ButtonGroup
      color='primary'
      style={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      {renderPreviousBtn}
      <Typography color='textPrimary'>{renderPagination}</Typography>
      {renderNextBtn}
    </ButtonGroup>
  );
};

export default withStyles()(PaginationButtons);
