import React from 'react'
import image from '../assets/images/graph.webp'
import {
  Typography,
  Grid,
    makeStyles,
  } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    images:{
     [theme.breakpoints.down("xs")]: {
         fontSize: "24px",
         fontWeight:"bold",
       
       },
      },
      h1:{
        [theme.breakpoints.down("xs")]: {
            fontSize: "24px",
            fontWeight:"bold",     
          },  
       },
       typo:{
        minHeight:"6.5rem",
        fontWeight:"bold",
        textAlign:"center"
       }
       
}))
const Graph=()=>{
    const style= useStyles()

    return<>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          flexDirection="column" 
          marginBottom="4.5rem"  
          className={style.images}
        >
        <Grid item md={7} xs={10} >

        <Typography variant="h4" container className={style.typo} color="initial">
            Your Heading Here 
        </Typography>
        <img src={image} alt="graph" />
      
        </Grid>
    </Grid>
        
        
    </>
}

export default Graph