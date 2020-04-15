import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFlippingCard,
  MDBRow, MDBTabPane, MDBTabContent, MDBIcon,MDBAnimation,MDBCard,MDBCardBody,MDBCardText,MDBCol } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import MultiCarouselPage from "../src/composent/flipCards";
import TimelinePage from "../src/composent/timeLine";
import CardExample from "../src/composent/cards";
import Contact from "../src/composent/Contact";
import "./index.css";

class NavbarPage extends Component {
  state = {
    collapseID: ""
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
    <div className="container-area">
    <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </div>
    <Router>
      <header>
      <MDBNavbar color="indigo darken-4" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"><h2 className="font-weight-bold">Curriculum Vitae</h2></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          
                  <MDBNavItem>
                    <MDBNavLink to="#!" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")}><h4 className=""><MDBIcon icon="check"/> Compétences</h4></MDBNavLink>
                  </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")}><h4 className=""><MDBIcon icon="briefcase"/> Expériences</h4></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" active={this.state.items["default"] === "4"} onClick={this.togglePills("default", "4")}><h4 className=""><MDBIcon icon="book"/> Formation</h4></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" active={this.state.items["default"] === "5"} onClick={this.togglePills("default", "5")}><h4><MDBIcon icon="male"/> Moi</h4></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem  active>
                    <MDBNavLink to="#!" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")}>
                      <MDBIcon className="d-none d-md-inline" icon='home' size='2x' />
                    </MDBNavLink>
                  </MDBNavItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </header>
    </Router>
    
    <MDBTabContent id="fd" activeItem={this.state.items["default"]}>
    <MDBTabPane tabId="1">
    <>
    <Contact/>
    </>
    </MDBTabPane>

    <MDBTabPane tabId="2">
      <>
        <CardExample/>
      </>
    </MDBTabPane>

    <MDBTabPane tabId="3">
      <>
        <TimelinePage/>
      </>
    </MDBTabPane>

              <MDBTabPane tabId="5">
              <><MultiCarouselPage/>
              </>
              </MDBTabPane>

    </MDBTabContent>
    </>
    
    );
  }
}

export default NavbarPage;