import React, { useState } from 'react'
import Logo from '../Assets/Logo.png'
import { BsTwitter } from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiBlogger} from 'react-icons/si'
import {BsVimeo} from 'react-icons/bs'
import {IoIosBasketball} from 'react-icons/all'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SourceIcon from '@mui/icons-material/Source';
import InfoIcon from '@mui/icons-material/Info'
import ReviewsIcon from '@mui/icons-material/Reviews';
import EditIcon from '@mui/icons-material/Edit';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';


const Navbar = () => {

  

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: 'portfolio',
      icon: <SourceIcon />,
    },
    {
      text: 'about me',
      icon: <InfoIcon />,
    },
    {
      text: 'my blog',
      icon: <EditIcon/>,
    },
    {
      text: 'reviews',
      icon: <ReviewsIcon />,
    },
    {
      text: 'contact me',
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav >
      <div >
        <img src={Logo}  alt='No logo' className='imagelogo'/>
      </div>
      <div className='navbar-links-container'>
        <a href='' className='nav-link'>portfolio</a>
        <a href='' className='nav-link'>about me</a>
        <a href='' className='nav-link'>my blog</a>
        <a href='' className='nav-link'>reviews</a>
        <a href='' className='nav-link'>contact me</a>
        <a href=''><BsTwitter className='navbar-cart-icon' /></a>
        <a href='' > <IoIosBasketball className='navbar-cart-icon' /></a>
        <a href=''><SiBlogger className='navbar-cart-icon'/></a>
        <a href=''><BsVimeo className='navbar-cart-icon'/></a>
        <a href=''> <BsLinkedin className='navbar-cart-icon'/></a>
        
        
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar