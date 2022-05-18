import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  // useTheme,
  // useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import DrawerComponent from "./Drawer";
import logo from '../assets/images/logo.svg'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(0),
    display: "flex",
    backgroundColor:"#F7FAFC"
    
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    color:"#454CCC",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "blue",
      borderBottom: "1px solid white",
    },
  },
  header:{
    boxShadow:"0px 0px white",
    backgroundColor:"#F7FAFC"
  }
}));

function Navbar() {
  const classes = useStyles();
  // const theme = useTheme();
  /* const isMobile = useMediaQuery(theme.breakpoints.down("md")); */

  return <div className="bg-[#F7FAFC]">
    <div className="container md:mx-24 md:py-4 sm:px-2 bg-[#F7FAFC]">
    <AppBar position="static" color="inherit" className={classes.header}>
      <CssBaseline />
      <Toolbar sx={{boxShadow:0}}>
          <img src={logo} className="w-20" alt="logo"/>
        <Typography variant="h5" className={classes.logo}>
          CozFactor
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              GitHub
            </Link>
            <Link to="/" className={classes.link}>
              SignIn
            </Link>
            {/* <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link> */}
          </div>
        
      </Toolbar>
    </AppBar>
    </div>
  </div>
}
export default Navbar;