import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import colors from '../../../utilities/colors';

const RadioGroup = ({
  formControlProp,
  formLabelProps,
  label,
  items,
  ...props
}) => {
  return (
    <FormControl {...formControlProp}>
      <FormLabel {...formLabelProps}>{label}</FormLabel>
      <MuiRadioGroup {...props}>
        {items.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
            style={{ color: colors.text }}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  )
}

export default RadioGroup;
