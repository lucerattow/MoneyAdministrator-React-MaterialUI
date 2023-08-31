import React from 'react'
import { useNavigate } from 'react-router-dom';
// recursos locales
// componentes
import IconButton from '@mui/material/IconButton'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
// estilos
import styles from "./ButtonBack.module.scss"

export type ButtonBackProps = {
  className?: string
}

export const ButtonBack: React.FC<ButtonBackProps> = ({ className }) => {
  const navigate = useNavigate()

  const handleClick = () => navigate(-1)

  return (
    <div className={className}>
      <IconButton onClick={handleClick} size="small">
        <ChevronLeftOutlinedIcon />
      </IconButton>
    </div>
  )
}

export default ButtonBack