import React from 'react'
import {
   makeStyles,
   Typography,Button
 } from "@material-ui/core";
import {Grid} from '@mui/material'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
   navlinks: {
     marginLeft: theme.spacing(30),
     display: "flex",
   },
   link: {
     textDecoration: "none",
     fontSize: "16px",
     color:"black",
     marginLeft: theme.spacing(5),
     "&:hover": {
       color: "blue",
       borderBottom: "1px solid white",
     },
     typo:{
        fontWeight:"bold"
     }
   },
   footer:{
     textAlign:"center"
   }
 }
 ));
const Footer=()=>{
const classes = useStyles()

    return <>
    <div className='md:flex justify-center items-center md:mx-52 my-24 py-10 px-10 bg-[#E6F6FE]'>
    <Grid
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          flexDirection="row"
       >

    <Grid container item md={12}>
      
    <Typography variant="h5" className={classes.typo} >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
    Start your Free Trial.
    </Typography>
    </Grid>
    <Grid item container md={4} >
    <Button variant='contained' color="Primary" >
      Get Started
    </Button>
    </Grid>
      </Grid>
     
    </div>
       <Grid
       marginTop="20px"
         container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          flexDirection="column" 
       >
       
         <img src={logo} width="70px" alt='logo'/>
        <Typography variant="h6">
        CozFactor
        </Typography>
        <div >
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Docs
            </Link>
            <Link to="/faq" className={classes.link}>
              GitHub
            </Link>
          </div> 
          <div className="flex space-x-3">
               <GitHubIcon/>
               <FacebookIcon />
               <TwitterIcon/>
               <YouTubeIcon/>
          </div>
          <Typography variant="h6" className={classes.footer} >
        Copyright @ 2022 | <Link to="/">cozFactor.com</Link>.Design By CozFactor
        </Typography>       
       </Grid>
    </>
}
export default Footer