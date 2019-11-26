import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

// Styles
import loaderStyles from './loaderStyles';

const Loader = ({ classes }) => {
  return (
    <Box className={classes.loaderContainer}>
      <Box className={classes.loaderWrapper}>
        <CircularProgress
          variant='indeterminate'
          thickness={3.6}
          size={80}
          color='secondary'
        />
      </Box>
    </Box>
  );
};

Loader.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(loaderStyles)(Loader);
