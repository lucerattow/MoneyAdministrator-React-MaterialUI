import React from 'react'
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
// componentes
import {
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
} from '@mui/material'

type InputMaskedProps<T extends FieldValues> = {
  className?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
  icon?: React.ReactNode
  mask: (string | RegExp)[];
};

export const InputMasked: React.FC<InputMaskedProps<any>> = ({ className, name, label, control, errors, icon, mask, defaultValue = "", autoFocus = false, autoComplete = "" }) => {
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
          <MaskedInput
            {...field}
            mask={mask}
            guide={true}
            showMask={true}
            placeholderChar="_"
            id={_name}
            name={_name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            aria-describedby={`${_name}-error`}
            render={(ref, props) => (
              <Input
                {...props}
                inputRef={ref}
                endAdornment={icon && (
                  <InputAdornment position="end">
                    {icon}
                  </InputAdornment>
                )}
              />
            )}
          />
          {!!errors[_name] && <FormHelperText id={`${_name}-error`}>{errorMessage}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default InputMasked