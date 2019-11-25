import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

// Custom styles
import radioGroupComponentStyles from './radioGroupComponentStyles';

const RadioGroupComponent = ({
  classes,
  radioOptions,
  selectedValue,
  handleChangeState,
}) => {
  const renderRadioOptions = radioOptions.map((option) => {
    return (
      <FormControlLabel
        key={option.value}
        value={option.value}
        control={<Radio color='primary' />}
        label={option.label}
        labelPlacement={option.labelPlacement}
      />
    );
  });

  return (
    <FormControl component='fieldset' className={classes.radioFormControl}>
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup
        aria-label='position'
        name='position'
        value={selectedValue}
        onChange={(e) => handleChangeState(e.target.value)}
        row
      >
        {renderRadioOptions}
      </RadioGroup>
    </FormControl>
  );
};

export default withStyles(radioGroupComponentStyles)(RadioGroupComponent);
