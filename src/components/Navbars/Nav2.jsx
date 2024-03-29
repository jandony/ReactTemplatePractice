import React from "react";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

// Hero components
import Hero0 from "../../components/Hero/Hero0";
import Hero1 from "../../components/Hero/Hero1";
import Hero2 from "../../components/Hero/Hero2";
import Hero3 from "../../components/Hero/Hero3";

// How It Works components
import HowItWorks0 from "../../components/HowItWorks/HowItWorks0";
import HowItWorks1 from "../../components/HowItWorks/HowItWorks1";
import HowItWorks2 from "../../components/HowItWorks/HowItWorks2";
import HowItWorks3 from "../../components/HowItWorks/HowItWorks3";

// Features components
import Features0 from "../../components/Features/Features0";
import Features1 from "../../components/Features/Features1";
import Features2 from "../../components/Features/Features2";
import Features3 from "../../components/Features/Features3";

// Testimonials components
import Testimonials0 from "../../components/Testimonials/Testimonials0";
import Testimonials1 from "../../components/Testimonials/Testimonials1";
import Testimonials2 from "../../components/Testimonials/Testimonials2";
import Testimonials3 from "../../components/Testimonials/Testimonials3";

// Portfolio components
import Portfolio0 from "../../components/Portfolio/Portfolio0";
import Portfolio1 from "../../components/Portfolio/Portfolio1";
import Portfolio2 from "../../components/Portfolio/Portfolio2";
import Portfolio3 from "../../components/Portfolio/Portfolio3";

// Login components
import Login0 from "../../components/Login/Login0";
import Login1 from "../../components/Login/Login1";
import Login2 from "../../components/Login/Login2";
import Login3 from "../../components/Login/Login3";

// Team components
import Team0 from "../../components/Team/Team0";
import Team1 from "../../components/Team/Team1";
import Team2 from "../../components/Team/Team2";
import Team3 from "../../components/Team/Team3";

// Pricing components
import Pricing0 from "../../components/Pricing/Pricing0";
import Pricing1 from "../../components/Pricing/Pricing1";
import Pricing2 from "../../components/Pricing/Pricing2";
import Pricing3 from "../../components/Pricing/Pricing3";

// Contact components
import Contact0 from "../../components/Contact/Contact0";
import Contact1 from "../../components/Contact/Contact1";
import Contact2 from "../../components/Contact/Contact2";
import Contact3 from "../../components/Contact/Contact3";

// Footer components
import Footer0 from "../../components/Footer/Footer0";
import Footer1 from "../../components/Footer/Footer1";
import Footer2 from "../../components/Footer/Footer2";
import Footer3 from "../../components/Footer/Footer3";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      width: `79%`,
      marginLeft: drawerWidth,
      position: "absolute",
      top: "auto",
      right: "auto",
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    top: "auto",
    left: "auto",
    backgroundColor: "#232323",
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const toolbarLogo = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#555",
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div id="drawerLogo" className={classes.toolbar} style={toolbarLogo}>
        <Typography className={classes.title} variant="h6" noWrap>
          Left Navigation
        </Typography>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "white" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider style={{ backgroundColor: "#ffffff87" }} />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "white" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Paper style={{ minHeight: "100vh", marginBottom: "50px" }}>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar className={classes.appBar} style={{ backgroundColor: "#555" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Left Navigation
            </Typography>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden idName="latpopDrawer?" smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div id="toolbar" className={classes.toolbar} />
          {/* DOM => Hero Layouts */}
          {props.heroSection && props.heroSelected === 0 && <Hero0 />}
          {props.heroSection && props.heroSelected === 1 && <Hero1 />}
          {props.heroSection && props.heroSelected === 2 && <Hero2 />}
          {props.heroSection && props.heroSelected === 3 && <Hero3 />}

          {/* DOM => How It Works Layouts */}
          {props.hiwSection && props.hiwSelected === 0 && <HowItWorks0 />}
          {props.hiwSection && props.hiwSelected === 1 && <HowItWorks1 />}
          {props.hiwSection && props.hiwSelected === 2 && <HowItWorks2 />}
          {props.hiwSection && props.hiwSelected === 3 && <HowItWorks3 />}

          {/* DOM => Features Layouts */}
          {props.featuresSection && props.featuresSelected === 0 && (
            <Features0 />
          )}
          {props.featuresSection && props.featuresSelected === 1 && (
            <Features1 />
          )}
          {props.featuresSection && props.featuresSelected === 2 && (
            <Features2 />
          )}
          {props.featuresSection && props.featuresSelected === 3 && (
            <Features3 />
          )}

          {/* DOM => Testimonials Layouts */}
          {props.testimonialSection && props.testimonialSelected === 0 && (
            <Testimonials0 />
          )}
          {props.testimonialSection && props.testimonialSelected === 1 && (
            <Testimonials1 />
          )}
          {props.testimonialSection && props.testimonialSelected === 2 && (
            <Testimonials2 />
          )}
          {props.testimonialSection && props.testimonialSelected === 3 && (
            <Testimonials3 />
          )}

          {/* DOM => Portfolio Layouts */}
          {props.portfolioSection && props.portfolioSelected === 0 && (
            <Portfolio0 />
          )}
          {props.portfolioSection && props.portfolioSelected === 1 && (
            <Portfolio1 />
          )}
          {props.portfolioSection && props.portfolioSelected === 2 && (
            <Portfolio2 />
          )}
          {props.portfolioSection && props.portfolioSelected === 3 && (
            <Portfolio3 />
          )}
          {/* DOM => Login Layouts */}
          {props.loginSection && props.loginSelected === 0 && <Login0 />}
          {props.loginSection && props.loginSelected === 1 && <Login1 />}
          {props.loginSection && props.loginSelected === 2 && <Login2 />}
          {props.loginSection && props.loginSelected === 3 && <Login3 />}

          {/* DOM => Login Layouts */}
          {props.loginSection && props.loginSelected === 0 && <Login0 />}
          {props.loginSection && props.loginSelected === 1 && <Login1 />}
          {props.loginSection && props.loginSelected === 2 && <Login2 />}
          {props.loginSection && props.loginSelected === 3 && <Login3 />}

          {/* DOM => Team Layouts */}
          {props.teamSection && props.teamSelected === 0 && <Team0 />}
          {props.teamSection && props.teamSelected === 1 && <Team1 />}
          {props.teamSection && props.teamSelected === 2 && <Team2 />}
          {props.teamSection && props.teamSelected === 3 && <Team3 />}

          {/* DOM => Pricing Layouts */}
          {props.pricingSection && props.pricingSelected === 0 && <Pricing0 />}
          {props.pricingSection && props.pricingSelected === 1 && <Pricing1 />}
          {props.pricingSection && props.pricingSelected === 2 && <Pricing2 />}
          {props.pricingSection && props.pricingSelected === 3 && <Pricing3 />}

          {/* DOM => Contact Layouts */}
          {props.contactSection && props.contactSelected === 0 && <Contact0 />}
          {props.contactSection && props.contactSelected === 1 && <Contact1 />}
          {props.contactSection && props.contactSelected === 2 && <Contact2 />}
          {props.contactSection && props.contactSelected === 3 && <Contact3 />}

          {/* DOM => Footer Layouts */}
          {props.footerSection && props.footerSelected === 0 && <Footer0 />}
          {props.footerSection && props.footerSelected === 1 && <Footer1 />}
          {props.footerSection && props.footerSelected === 2 && <Footer2 />}
          {props.footerSection && props.footerSelected === 3 && <Footer3 />}
        </main>
      </div>
    </Paper>
  );
}

export default ResponsiveDrawer;
