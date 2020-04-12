import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBTabContent,
  MDBAnimation,
  MDBIcon,
  MDBTabPane,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,MDBCard,MDBCardImage
} from "mdbreact";
import CardExample from "../src/flipCards";
import "./index.css";


class AppPage extends React.Component {
  state = {
    items: {
        default: "1",  
    }
  };
  state = {
    collapsed: false,
  }

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };
  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <header>
          <div>
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Nicolas Leichnig</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")}>Accueil</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")}>Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")}>Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                      <MDBCol>
                    <MDBNavItem>
                    <a href="https://www.linkedin.com/in/nicolas-leichnig-163952158">

                <MDBIcon fab icon="linkedin" size="2x" />
                </a>
            </MDBNavItem>
            </MDBCol>
            
            <MDBNavItem>

                    <a href="https://www.facebook.com/psykolas">
                    <MDBIcon size="2x"fab icon="facebook" /></a>
            </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
          </header>
        </Router>
        
            <MDBContainer>
            <MDBTabContent activeItem={this.state.items["default"]}>
                <MDBTabPane tabId="1">
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Développeur Full Stack
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4 text-justify">
                    Je suis Manager avec 5 ans d’expérience dans le commerce. Tout juste diplômé d’un titre professionnel Développeur Web et Web mobile niveau 3 (Bac+ 2), 
                    dans le cadre d’une réorientation de carrière, je suis désireux de faire mes preuves.
                    </h6>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol></MDBCol>
              

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      id="moi"  
                      src={require("./image/comica1584616571639.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <h1>Je suis Manager avec 5 ans d’expérience dans le commerce. Tout juste diplômé d’un titre professionnel Développeur Web et Web mobile niveau 3 (Bac+ 2), 
                    dans le cadre d’une réorientation de carrière,</h1>
              </MDBTabPane>
              
              <MDBTabPane tabId="3">
              <><CardExample/>
              </>
              </MDBTabPane>
              </MDBTabContent>
            </MDBContainer>
          
      </div>
    );
  }
}

export default AppPage;