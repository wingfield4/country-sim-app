import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';

const Select = ({
  children,
  id,
  label,
  labelId,
  formControlProps,
  inputLabelProps,
  ...props
}) => {
  return (
    <FormControl
      fullWidth
      {...formControlProps}
    >
      <InputLabel
        id={labelId}
        {...inputLabelProps}
      >
        {label}
      </InputLabel>
      <MuiSelect
        labelId={labelId}
        id={id}
        label={label}
        {...props}
      >
        {children}
      </MuiSelect>
    </FormControl>
  )
}

export default Select;
