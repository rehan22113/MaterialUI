import React from 'react'
import Feature1 from '../assets/images/feature.svg'
import Feature2 from '../assets/images/feature2.svg'
import Feature3 from '../assets/images/feature3.svg'
import {makeStyles,Typography,Grid} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  box:{
   [theme.breakpoints.down("xs")]: {
    marginLeft:"0rem",
    paddingLeft:"0rem",
    paddingRight:"0rem",
     },
      paddingLeft:"20rem",
      paddingRight:"20rem",
      marginTop:"6rem"
    },
    box2:{
      [theme.breakpoints.down("xs")]: {
       marginLeft:"0rem",
       paddingLeft:"2rem",
       paddingRight:"2rem",
       display:"flex",
       flexDirection:"column-reverse"
        },
         paddingLeft:"25rem",
         paddingRight:"15rem",
         flexDirection:"row"
       },
    para:{
   [theme.breakpoints.down("xs")]: {
     fontSize:"22px",
   },
    color:"#718096",
    fontSize:"18px",
    textAlign:"center"
    },
    heading:{
      [theme.breakpoints.down("xs")]: {
        fontSize:"24px",
        fontWeight:"bold",
      },
      lineHeight:"3.5rem",
       fontWeight:"bold",
        textAlign:"center"
    },
    topHead:{
      marginTop:"5rem",
      lineHeight:"3.5rem",
      fontWeight:"bold",
      textAlign:"center",
    },
    topPara:{
      fontSize:"18px",
      textAlign:"center",
    }
  } ))
const AboutSite=()=>{
  const style=useStyles();
  // Change text in object No need to go down
  const About=[
    {
      title:"Your title here",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
      image:Feature1
    },
    {
      title:"Your title here",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
      image:Feature2

    },
    {
      title:"Your title here",
      paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.",
      image:Feature3

    }
  ]
  
    return<>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          marginTop="10rem"
        >
          <Grid item >
            <Typography variant="h4" className={style.topHead} >
            Your title here
            </Typography>
            <Typography className={style.topPara} variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
            </Typography>
          </Grid>
        </Grid>
        <Grid 
        container  
        spacing={0}
        justify="center"
        alignItems="center"
        alignContent="center"
        columnGap={0}
        className={style.box}
        >
          <Grid item md={5} xs={12} >
              <Typography variant="h5" className={style.heading}>
              {About[0].title}
              </Typography>
              <Typography variant="h6" fontSize="18px" className={style.para} textAlign="center">
              {About[0].paragraph}
              </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
              <img src={About[0].image} alt="Feature 1"/>
          </Grid>
        </Grid>
        {/* Second Grid Start here */}
        <Grid 
        className={style.box2}

        container 
        marginTop="3rem"
         spacing={2}
          justify="center"
          alignItems="center"
          alignContent="center"
          columnGap={3}
          >
          <Grid item md={5} xs={12} sm={12}>
              <img src={About[1].image} alt="Feature 1"/>
          </Grid>
          <Grid item md={5} xs={12} sm={12} >
              <Typography variant="h5" className={style.heading} fontWeight="bold" textAlign="center">
              {About[1].title}
              </Typography>
              <Typography variant="h6" className={style.para}>
              {About[1].paragraph}
              </Typography>
          </Grid>
        </Grid>
        {/* Third Grid Start from here */}
        <Grid 
        className={style.box}
        container="true"
        marginTop="2rem" 
        spacing={2}
        direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
        
          columnGap={3}
          >
          <Grid item md={5} xs={12} sm={12} >
              <Typography variant="h5" lineHeight="3.5rem" fontWeight="bold" className={style.heading} textAlign="center">
              {About[2].title} 
              </Typography>
              <Typography variant="h6" fontSize="18px" textAlign="center" className={style.para}>
              {About[2].paragraph}
            </Typography>
          </Grid>
          <Grid item justify="center" md={5} xs={12} sm={12} >
              <img src={About[2].image} alt="Feature 1"/>
          </Grid>
        </Grid>
        
    </>
}
export default AboutSite;