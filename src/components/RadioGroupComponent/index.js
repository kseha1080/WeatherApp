import React from 'react';

// Material UI
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const RadioGroupComponent = ({
  radioOptions,
  selectedValue,
  handleChangeState,
  name,
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
    <FormControl component='fieldset' margin='dense'>
      <RadioGroup
        aria-label={name}
        name={name}
        value={selectedValue}
        onChange={(e) => handleChangeState(e.target.value)}
        row
      >
        {renderRadioOptions}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
