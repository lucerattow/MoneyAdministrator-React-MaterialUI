import React from 'react'
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
// componentes
import {
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
} from '@mui/material'

type InputTextProps<T extends FieldValues> = {
  name: keyof T;
  label: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  defaultValue?: string;
  autoFocus?: boolean;
  autoComplete?: string;
};

export const InputText: React.FC<InputTextProps<any>> = ({ name, label, control, errors, defaultValue = "", autoFocus = false, autoComplete = "" }) => {
  const errorMessage = errors[name as string]?.message as string
  const _name = name as string

  return (
    <Controller
      name={_name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl
          margin="dense"
          error={!!errors[_name]}
          variant="standard"
          fullWidth
        >
          <InputLabel htmlFor={_name}>{label}</InputLabel>
          <Input
            {...field}
            id={_name}
            name={_name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            error={!!errors[_name]}
            aria-describedby={`${_name}-error`}
          />
          {!!errors[_name] && <FormHelperText id={`${_name}-error`}>{errorMessage}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default InputText