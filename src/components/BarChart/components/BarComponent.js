import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Styles
import barComponentStyles from './barComponentStyles';

const BarComponent = ({ classes, data, unitFormat }) => {
  const renderUnitFormat = unitFormat === 'imperial' ? 'F' : 'C';

  const roundedTemp = Math.round(data.main.temp);
  const chartPixel = unitFormat === 'imperial' ? 2.6 : 10;

  const smallScreenSize = useMediaQuery('(max-width:500px)');
  const barWidth = smallScreenSize ? '1.4rem' : '3rem';
  const barText = smallScreenSize ? '0.6rem' : '1rem';

  const customStyles = {
    barStyles: {
      width: barWidth,
      height: `${roundedTemp * chartPixel}px`,
    },
    barText: {
      fontSize: barText,
    },
  };

  return (
    <Grid item 
    justify='center'
    alignItems='center'
    style={{display: 'flex'}}
      className={classes.barComponentWrapper}
    >
      <Box 
        className={classes.barComponentContent}
      >
        <Typography
          align='center'
          style={customStyles.barText}
          component='p'
          display='block'
        >{`${roundedTemp}˚ ${renderUnitFormat}`}</Typography>
        <Box
          className={classes.barComponentBar}
          style={customStyles.barStyles}
        ></Box>
        <Typography 
          align='center'
          style={customStyles.barText} 
          component='p'
          display='block'
        >
          {data.time}
        </Typography>
      </Box>
    </Grid>
  );
};

BarComponent.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object,
  unitFormat: PropTypes.string,
};

const mapStateToProps = ({ unitFormatReducers }) => ({
  unitFormat: unitFormatReducers.unitFormat,
});

export default withStyles(barComponentStyles)(
  connect(mapStateToProps)(BarComponent),
);
