import React from "react"
import Media from "react-responsive"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
// import { FaPlay } from "react-icons/fa"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
// import Button from "components/CustomButtons/Button.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx"
import AboutSection from "./Sections/AboutSection"
import MoreInfo from "./Sections/MoreInfo.jsx"

// Images
// import logo from "../../assets/img/sig-image.png";

const dashboardRoutes = []

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="white"
          routes={dashboardRoutes}
          brand="Baby Momma Rachel"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <div>
          <Media query="(min-width: 768px)">
            {matches =>
              matches ? (
                <Parallax filter image={require("assets/img/bmr-header.jpg")}>
                  <div className={classes.container}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}></GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
              ) : (
                <Parallax
                  filter
                  image={require("assets/img/bmr-mobile-header.jpg")}
                >
                  <div className={classes.container}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}></GridItem>
                    </GridContainer>
                  </div>
                </Parallax>
              )
            }
          </Media>
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <MoreInfo />
            <AboutSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
