import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import logo from '../assets/images/logo.svg'
// import Button from '@mui/material/Button'
import { Tabs,Tab } from '@mui/material'

const Header =()=>{
    return<>
        <AppBar color='inherit' position='static' sx={{boxShadow:0,display:"flex",paddingLeft:"150px",paddingRight:"150px",paddingTop:"1.5rem",paddingBottom:"1.5rem"}}>
          <Toolbar variant="dence" className=''>
            <img src={logo} alt="logo" className="w-20"/>
            <Typography variant="h5" className=' font-serif'>
                CozFactor
            </Typography>
            <Tabs sx={{marginLeft:"Auto"}}>
                <Tab label="Home"/>
                <Tab label="Profile"/>
                <Tab label="About"/>
                <Tab label="Contact"/>
                <Tab label="PortFolio"/>
            </Tabs>
            
          </Toolbar>
        </AppBar>
    </>
}

export default Header