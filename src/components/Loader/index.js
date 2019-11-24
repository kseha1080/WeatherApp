import React from 'react';
import { Spinner } from 'reactstrap';

// Material UI
import { withStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Styles
import loaderStyles from './loaderStyles';

const Loader = ({ classes }) => {
  return (
    <div className={classes.loaderContainer}>
      <Grid className={classes.loaderWrapper}>
        <Spinner className={classes.loader} color='warning' size='lg' />
      </Grid>
    </div>
  );
};

export default withStyles(loaderStyles)(Loader);
