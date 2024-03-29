import React from "react";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
// core components
import Navbar from "components/Navbars/Navbar.js";
import UXBuilder from "views/UXLayoutBuilder/UXLayoutBuilder";
// import Sidebars
import SidebarOptions from "components/Sidebar/SidebarOptions.js";

import bgImage from "assets/img/sidebar-2.jpg";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

import routes from "routes.js";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/ux") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

const useStyles = makeStyles(styles);

export default function UXLayoutBuilder({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Nav options
  const [navSelected, setNav] = React.useState(null);
  const selectNav = (event) => {
    setNav(event.target.value);
    // console.log(event.target.value);
  };

  // ---------------------------------
  // Hero section
  // ---------------------------------
  const [heroSection, setHeroSection] = React.useState(false);
  const toggleHeroSection = () => {
    setHeroSection(!heroSection);
  };
  // Hero select
  const [heroSelected, setHero] = React.useState(0);
  const selectHero = (event) => {
    setHero(event.target.value);
  };

  // ---------------------------------
  // How It Works section
  // ---------------------------------
  const [hiwSection, setHIWSection] = React.useState(false);
  const toggleHIWSection = () => {
    setHIWSection(!hiwSection);
  };
  // How It Works select
  const [hiwSelected, setHIW] = React.useState(0);
  const selectHIW = (event) => {
    setHIW(event.target.value);
  };

  // ---------------------------------
  // Features section
  // ---------------------------------
  const [featuresSection, setFeaturesSection] = React.useState(false);
  const toggleFeaturesSection = () => {
    setFeaturesSection(!featuresSection);
  };
  // Features select
  const [featuresSelected, setFeatures] = React.useState(0);
  const selectFeatures = (event) => {
    setFeatures(event.target.value);
  };

  // ---------------------------------
  // Testimonial section
  // ---------------------------------
  const [testimonialSection, setTestimonialSection] = React.useState(false);
  const toggleTestimonialSection = () => {
    setTestimonialSection(!testimonialSection);
  };
  // Testimonial select
  const [testimonialSelected, setTestimonial] = React.useState(0);
  const selectTestimonial = (event) => {
    setTestimonial(event.target.value);
  };

  // ---------------------------------
  // Portfolio section
  // ---------------------------------
  const [portfolioSection, setPortfolioSection] = React.useState(false);
  const togglePortfolioSection = () => {
    setPortfolioSection(!portfolioSection);
  };
  // Portfolio select
  const [portfolioSelected, setPortfolio] = React.useState(0);
  const selectPortfolio = (event) => {
    setPortfolio(event.target.value);
  };

  // ---------------------------------
  // Login section
  // ---------------------------------
  const [loginSection, setLoginSection] = React.useState(false);
  const toggleLoginSection = () => {
    setLoginSection(!loginSection);
  };
  // Login select
  const [loginSelected, setLogin] = React.useState(0);
  const selectLogin = (event) => {
    setLogin(event.target.value);
  };

  // ---------------------------------
  // Team section
  // ---------------------------------
  const [teamSection, setTeamSection] = React.useState(false);
  const toggleTeamSection = () => {
    setTeamSection(!teamSection);
  };
  // Team select
  const [teamSelected, setTeam] = React.useState(0);
  const selectTeam = (event) => {
    setTeam(event.target.value);
  };

  // ---------------------------------
  // Pricing section
  // ---------------------------------
  const [pricingSection, setPricingSection] = React.useState(false);
  const togglePricingSection = () => {
    setPricingSection(!pricingSection);
  };
  // Pricing select
  const [pricingSelected, setPricing] = React.useState(0);
  const selectPricing = (event) => {
    setPricing(event.target.value);
  };

  // ---------------------------------
  // Contact section
  // ---------------------------------
  const [contactSection, setContactSection] = React.useState(false);
  const toggleContactSection = () => {
    setContactSection(!contactSection);
  };
  // Contact select
  const [contactSelected, setContact] = React.useState(0);
  const selectContact = (event) => {
    setContact(event.target.value);
  };

  // ---------------------------------
  // Footer section
  // ---------------------------------
  const [footerSection, setFooterSection] = React.useState(false);
  const toggleFooterSection = () => {
    setFooterSection(!footerSection);
  };
  // Footer select
  const [footerSelected, setFooter] = React.useState(0);
  const selectFooter = (event) => {
    setFooter(event.target.value);
  };

  // ---------------------------------
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div id="ux-main" className={classes.wrapper}>
      <div id="ux-panel1">
        <SidebarOptions
          routes={routes}
          logoText={"UX Layout Builder"}
          logo={<AspectRatioIcon />}
          image={image}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color={color}
          navSelected={navSelected}
          selectNav={selectNav}
          heroSelected={heroSelected}
          selectHero={selectHero}
          heroSection={heroSection}
          toggleHeroSection={toggleHeroSection}
          hiwSelected={hiwSelected}
          selectHIW={selectHIW}
          hiwSection={hiwSection}
          toggleHIWSection={toggleHIWSection}
          featuresSelected={featuresSelected}
          selectFeatures={selectFeatures}
          featuresSection={featuresSection}
          toggleFeaturesSection={toggleFeaturesSection}
          testimonialSelected={testimonialSelected}
          selectTestimonial={selectTestimonial}
          testimonialSection={testimonialSection}
          toggleTestimonialSection={toggleTestimonialSection}
          portfolioSelected={portfolioSelected}
          selectPortfolio={selectPortfolio}
          portfolioSection={portfolioSection}
          togglePortfolioSection={togglePortfolioSection}
          loginSelected={loginSelected}
          selectLogin={selectLogin}
          loginSection={loginSection}
          toggleLoginSection={toggleLoginSection}
          teamSelected={teamSelected}
          selectTeam={selectTeam}
          teamSection={teamSection}
          toggleTeamSection={toggleTeamSection}
          pricingSelected={pricingSelected}
          selectPricing={selectPricing}
          pricingSection={pricingSection}
          togglePricingSection={togglePricingSection}
          contactSelected={contactSelected}
          selectContact={selectContact}
          contactSection={contactSection}
          toggleContactSection={toggleContactSection}
          footerSelected={footerSelected}
          selectFooter={selectFooter}
          footerSection={footerSection}
          toggleFooterSection={toggleFooterSection}
          {...rest}
        />
      </div>
      <div id="ux-panel2" className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>
              <UXBuilder
                navSelected={navSelected}
                heroSelected={heroSelected}
                heroSection={heroSection}
                hiwSelected={hiwSelected}
                hiwSection={hiwSection}
                featuresSelected={featuresSelected}
                featuresSection={featuresSection}
                testimonialSelected={testimonialSelected}
                testimonialSection={testimonialSection}
                portfolioSelected={portfolioSelected}
                portfolioSection={portfolioSection}
                loginSelected={loginSelected}
                loginSection={loginSection}
                teamSelected={teamSelected}
                teamSection={teamSection}
                pricingSelected={pricingSelected}
                pricingSection={pricingSection}
                contactSelected={contactSelected}
                contactSection={contactSection}
                footerSelected={footerSelected}
                footerSection={footerSection}
              />
            </div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
    </div>
  );
}
