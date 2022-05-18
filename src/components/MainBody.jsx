import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import {
    Grid,
    Button,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";
import reactDev from '../assets/images/reactDev.png'
const useStyles = makeStyles((theme) => ({
   h1:{
    [theme.breakpoints.down("xs")]: {
        fontSize: 52,
        textAlign:"center"
    
      },
      paddingLeft:"20px",fontFamily:"'Titillium Web', sans-serif",paddingTop:"2.5rem",
      color:"#454CCC"
   },
   p:{
    [theme.breakpoints.down("xs")]: {
        fontSize: 18,
        width:"auto",
        textAlign:"center"
      },
      paddingLeft:"20px",fontFamily:"'Titillium Web', sans-serif",paddingTop:"2.5rem",display:"flex",width:"600px"
   },
   grid:{
    [theme.breakpoints.down("xs")]: {
        paddingRight:"10px",
        paddingLeft:"10px"
      },
      boxShadow:0,
      display:"flex",
      paddingLeft:"150px",
      paddingRight:"150px",
      paddingTop:"1.5rem",
      paddingBottom:"1.5rem",
      backgroundColor:"#F7FAFC"
   },
   mainText:{
    [theme.breakpoints.down("xs")]: {
        paddingRight:"2px",
        paddingLeft:"2px"
      },
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"   
   },
   btn:{
    [theme.breakpoints.down("xs")]: {
      marginLeft:"40px",
      display:"flex",
      
    },
    padding:"0.8rem",
    width:"250px",
    marginLeft:"30px",
    marginTop:"1.5rem",
    boxShadow:3,
    color:"black"
   }
  }));
const MainBody =()=>{
    const styling = useStyles(); 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return<>
<Grid className={styling.grid}>
        <Grid item xs={12} md={6} className={styling.mainText} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <Typography className={styling.h1} variant="h1">
                React Native Programmer
            </Typography>
            <Typography variant="h6" className={styling.p}>
            The modern landing page for React developers The easiest way to build a React landing page in seconds.
            </Typography>
            {isMobile? (<img src={reactDev} alt="header"/>):("")}
            <Button variant="contained" color="secondary" className={styling.btn} >
            <GoogleIcon sx={{marginRight:"5px",marginBottom:"4px"}}/> Continue with Google
            </Button>
        
        </Grid>
        <Grid item xs={6} md={6}>
        {!isMobile? (<img src={reactDev} alt="header" />):("")}
        </Grid>
</Grid>
    </>
}
export default MainBody;