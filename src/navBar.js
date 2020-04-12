import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBRow, MDBTabPane, MDBTabContent, MDBIcon,MDBAnimation,MDBCard,MDBCardBody,MDBCardText,MDBCol } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import MultiCarouselPage from "../src/composent/flipCards";
import "./index.css"

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

    <Router>
      <header>
      <MDBNavbar color="unique-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Curriculum Vitae</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem active>
                    <MDBNavLink to="#!" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")}>
                      <MDBIcon className="d-none d-md-inline" icon='home' size='3' />
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")}>Compétences</MDBNavLink>
                  </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Expériences</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Formation</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Moi</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBNavbarBrand>
                  <img alt="Ma photo" id="pic" src={require("./image/comica1584616571639.jpg")} />
                  </MDBNavbarBrand>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </header>
    </Router>
    
    <MDBTabContent id="fd" activeItem={this.state.items["default"]}>
    <MDBTabPane tabId="1">
    <MDBRow>
      <MDBAnimation
        type="fadeInLeft"
        delay=".3s"
        className="black-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
      >
        <h1 className="h1-responsive font-weight-bold">
        Développeur Web Full Stack
        </h1>
        <hr className="hr-light" />
        <h6 className="mb-4" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Rem repellendus quasi fuga nesciunt dolorum nulla magnam
          veniam sapiente, fugiat! Commodi sequi non animi ea dolor
          molestiae, quisquam iste, maiores. Nulla.
        </h6>
      </MDBAnimation>

      <MDBCol md="6" xl="5" className="mb-4">
        <MDBAnimation type="fadeInRight" delay=".3s">
          <MDBCard id="classic-card">
            <MDBCardBody className="black-text">

              <h3 className="text-center">
                <MDBIcon icon="user" /> Nicolas Leichnig
              </h3>
              <hr className="hr-light" />

              <MDBCardText className="black-text">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
              </MDBCardText>

              <div className="text-center mt-4 black-text">
                <hr className="hr-light" />
                <div className="text-center d-flex justify-content-center black-label">
                  <a href="https://www.linkedin.com/in/nicolas-leichnig-163952158/" className="p-2 m-2">
                    <MDBIcon
                      fab
                      icon="linkedin"
                      className="black-text"
                    />
                  </a>
                  <a href="https://github.com/nicolas-leichnig/" className="p-2 m-2">
                    <MDBIcon
                      fab
                      icon="github"
                      className="black-text"
                    />
                  </a>
                  <a href="https://www.facebook.com/psykolas" className="p-2 m-2">
                    <MDBIcon
                      fab
                      icon="facebook"
                      className="black-text"
                    />
                  </a>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBRow>
    </MDBTabPane>
    
              <MDBTabPane tabId="2">
              <><MultiCarouselPage/>
              </>
              </MDBTabPane>
    </MDBTabContent>
    </>
    
    );
  }
}

export default NavbarPage;