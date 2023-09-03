import React from 'react'
import { Controller, Control, FieldValues, FieldErrors } from 'react-hook-form';
// componentes
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
  InputAdornment,
} from '@mui/material'
// estilos
import styles from "./InputSelect.module.scss"

export type InputSelectItems = {
  value: string
  label: string
  imgSrc?: string
}

export type InputSelectProps<T extends FieldValues> = {
  className?: string
  name: keyof T
  label: string
  control: Control<T>
  errors: FieldErrors<T>
  items?: InputSelectItems[];
  defaultValue?: string
  autoFocus?: boolean
  autoComplete?: string
};

export const InputSelect: React.FC<InputSelectProps<any>> = ({ className, name, label, control, errors, items, defaultValue = "", autoFocus = false, autoComplete = "" }) => {
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
          <Select
            className={styles.selected}
            {...field}
            label={label}
            id={_name}
            name={_name}
            autoFocus={autoFocus}
            error={!!errors[_name]}
            aria-describedby={`${_name}-error`}
          >
            {items && items.map((item) => (
              <MenuItem key={item.value} value={item.value} className={styles.menu_item}>
                {item.imgSrc && (
                  <img className={styles.menu_item_image} src={item.imgSrc} alt={item.label} />
                )}
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {!!errors[_name] && <FormHelperText id={`${_name}-error`}>{errorMessage}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}

export default InputSelect