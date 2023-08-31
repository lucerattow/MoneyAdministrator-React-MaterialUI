import React from 'react'
import classNames from 'classnames';
// recursos locales
// componentes
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DescriptionIcon from '@mui/icons-material/Description';
import SummaryListFolder from './SummaryListFolder/SummaryListFolder';
// estilos
import styles from "./SummaryList.module.scss"

export type SummaryListProps = {
  className?: string
}

export const SummaryList: React.FC<SummaryListProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <ListItem>
        <ListItemText primary="Resumenes registrados" />
      </ListItem>
      <Divider />
      <List dense>
        <SummaryListFolder />
        <SummaryListFolder />
      </List>
    </div>
  )
}

export default SummaryList