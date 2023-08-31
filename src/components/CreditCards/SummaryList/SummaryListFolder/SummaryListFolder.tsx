import React from 'react'
// recursos locales
// componentes
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemSecondaryAction,
  Button, Grid, Typography,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Delete from "@mui/icons-material/Delete"
// estilos
import styles from "./SummaryListFolder.module.scss"
import IconButton from '@mui/material/IconButton';

export type SummaryListFolderProps = {
}

export const SummaryListFolder: React.FC<SummaryListFolderProps> = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={toggleOpen}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Año ----" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem className={styles.list_item} onClick={() => console.log("click en el resumen")}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resumen --/----" />
          <ListItemSecondaryAction className={styles.action_icons}>
            <IconButton onClick={() => console.log("edit")}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => console.log("delete")}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

      </Collapse>
    </>
  )
}

export default SummaryListFolder