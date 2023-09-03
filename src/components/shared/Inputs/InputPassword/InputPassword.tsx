import React from 'react'
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
// componentes
import {
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material'
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material'

type InputPasswordProps<T extends FieldValues> = {
  className?: string
  name: keyof T;
  label: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  defaultValue?: string;
  autoFocus?: boolean;
  autoComplete?: string;
};

export const InputPassword: React.FC<InputPasswordProps<any>> = ({ className, name, label, control, errors, defaultValue = "", autoFocus = false, autoComplete = "" }) => {
  const [show, setShow] = React.useState<boolean>(false)
  const errorMessage = errors[name as string]?.message as string
  const _name = name as string

  const onClickShowPassword = () => setShow(!show)
  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Controller
      name={_name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl
          className={className}
          margin="dense"
          error={!!errors[_name]}
          variant="standard"
          fullWidth
        >
          <InputLabel htmlFor={_name}>{label}</InputLabel>
          <Input
            {...field}
            type={show ? 'text' : 'password'}
            id={_name}
            name={_name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            error={!!errors[_name]}
            aria-describedby={`${_name}-error`}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onClickShowPassword}
                  onMouseDown={onMouseDownPassword}
                  edge="end"
                  tabIndex={-1}
                >
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {!!errors[_name] && <FormHelperText id={`${_name}-error`}>{errorMessage}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default InputPassword