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
import styles from "./TableCreditCardSummaryDetails.module.scss"

export type TableCreditCardSummaryDetailsProps = {
  className?: string
}

export const TableCreditCardSummaryDetails: React.FC<TableCreditCardSummaryDetailsProps> = ({ className }) => {
  return (
    <TableContainer component="div" className={classNames(className, styles.table)}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Cuotas</TableCell>
            <TableCell>ARS</TableCell>
            <TableCell>USD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index} className={styles.table_row} >
              <TableCell>2023/03/03</TableCell>
              <TableCell>Descripcion del gasto loco</TableCell>
              <TableCell>01/03</TableCell>
              <TableCell align='right'>99.999,00 $</TableCell>
              <TableCell align='right'>9,00 $</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCreditCardSummaryDetails