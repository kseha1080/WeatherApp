import React from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// Styles
import loaderStyles from './loaderStyles';

const Loader = ({ classes }) => {
  return (
    <Box className={classes.loaderContainer}>
      <Box className={classes.loaderWrapper}>
        <Spinner className={classes.loader} color='warning' size='lg' />
      </Box>
    </Box>
  );
};

Loader.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(loaderStyles)(Loader);
