import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBView,
MDBDropdownToggle, MDBTabPane, MDBTabContent, MDBContainer,MDBCol,MDBIcon, MDBRow,MDBAnimation, MDBNav
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import CardExample from "../src/flipCards";
import "./index.css"; 

class NavbarPage extends Component {
state = {
  isOpen: false
};
state = {
    items: {
        default: "1",
    }
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
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

render() {
  return (
      <>
    
    
    <Router>
      <header>
      <MDBNavbar color="indigo" dark expand="md" fluid>
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem active>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")}>Accueil</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")}>Compétences</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")}>Expériences</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")}>Formation</MDBNavLink>
                    </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBRow  >
              <MDBNav>
                <MDBNavItem className="justify-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/nicolas-leichnig-163952158">
                    <MDBIcon fab icon="linkedin" size="2x" center />
                    </a>
                </MDBNavItem>
            
            <MDBNavItem>
              
                <a href="https://www.facebook.com/psykolas">
                <MDBIcon size="2x" fab icon="facebook" /></a>
            </MDBNavItem>
            <MDBNavItem>
            <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                    style={{ height: "75px", padding: 0 }} alt="" />
                </MDBDropdownToggle>
            </MDBNavItem>
            </MDBNav>
            </MDBRow>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </header>
    </Router>
    <MDBRow>
            <MDBContainer className="d-flex justify-content-center align-items-center gradient">
            <MDBTabContent activeItem={this.state.items["default"]}>
                <MDBTabPane tabId="1">
              
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive black-text font-weight-bold mt-sm-5">
                      Développeur Full Stack
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4 text-justify black-text">
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
            </MDBRow>
    
    
    </>
    );
  }
}

export default NavbarPage;