import React from 'react'
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
// componentes
import {
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
} from '@mui/material'

type InputTextProps<T extends FieldValues> = {
  className?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
  icon?: React.ReactNode
};

export const InputText: React.FC<InputTextProps<any>> = ({ className, name, label, control, errors, defaultValue = "", autoFocus = false, autoComplete = "", icon }) => {
  const errorMessage = errors[name as string]?.message as string
  const _name = name as string

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
            id={_name}
            name={_name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            error={!!errors[_name]}
            aria-describedby={`${_name}-error`}
            endAdornment={icon && (
              <InputAdornment position="end">
                {icon}
              </InputAdornment>
            )}
          />
          {!!errors[_name] && <FormHelperText id={`${_name}-error`}>{errorMessage}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default InputText