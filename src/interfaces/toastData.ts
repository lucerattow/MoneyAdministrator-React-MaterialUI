// componentes
import {
  AlertProps,
} from "@mui/material"

export interface toastData {
  id: number
  message: string
  severity: AlertProps["severity"]
}