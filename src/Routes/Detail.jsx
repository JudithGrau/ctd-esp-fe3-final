import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  
  const params = useParams()

  const [data, setData] = useState(null)

  const { state } = useContext(ContextGlobal)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`${url}/${params.id}`).then(res => setData(res.data)).catch(err => console.log(err));
  },[])
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detalle del dentista </h1>
      <List
        sx={{ width: '60%', bgcolor: 'hsl(240deg 1% 57%)', marginLeft:'50px' }}
        component="ul"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h2 style={{textAlign:"center"}}>Dentista</h2>
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon fontSize='large' />
          </ListItemIcon>
          <ListItemText primary={data?.name}  disableTypography />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="¿Dónde puedes encontrarme?" disableTypography/>
          {open ? <ExpandLess color='secondary'/> : <ExpandMore color='secondary'/>}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={data?.email} sx={{ color: state.palette === 'dark' ? '#fff' : '#000' }} disableTypography/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary={data?.phone} sx={{ color: state.palette === 'dark' ? '#fff' : '#000' }} disableTypography/>
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={data?.website} sx={{ color: state.palette === 'dark' ? '#fff' : '#000' }} disableTypography/>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  )
}

export default Detail