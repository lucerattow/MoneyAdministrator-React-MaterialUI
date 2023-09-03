import React from 'react'
import classNames from 'classnames';
// recursos locales
// componentes
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material'
// estilos
import styles from "./TableCreditCardPayments.module.scss"

export type TableCreditCardPaymentsProps = {
  className?: string
}

export const TableCreditCardPayments: React.FC<TableCreditCardPaymentsProps> = ({ className }) => {
  return (
    <TableContainer component="div" className={classNames(className, styles.table)}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Entidad</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell align='right'>Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4].map(() => (
            <TableRow className={styles.table_row} >
              <TableCell>2023/03/23</TableCell>
              <TableCell>BANCO</TableCell>
              <TableCell>Descripcion del gasto loco</TableCell>
              <TableCell align='right'>99.999,00 $</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCreditCardPayments