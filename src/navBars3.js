import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBTabPane,
  MDBView,
  MDBContainer,
  MDBCard, MDBCardBody, MDBCardText,
  MDBInput,
  MDBAnimation,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBTabContent, 
} from "mdbreact";
import MultiCarouselPage from "../src/composent/flipCards";
import "./navBar.css";


class ClassicFormPage extends React.Component {
  state = {
    collapseID: ""
  };
  state = {
    items: {
        default: "1",
    }
}

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

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

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );

    return (
      <div id="classicformpage">

        <Router>
          <header>
          <div>
            <MDBNavbar dark expand="md" fixed="top">

              <MDBContainer>

                <MDBNavbarBrand>
                  <strong id="haut" className="white-text">Curriculum Vitae</strong>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="#!" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")}>Accueil</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")}>Compétences</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Expérience</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Formation</MDBNavLink>
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

              </MDBContainer>

            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
          </header>
        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
            <MDBTabContent activeItem={this.state.items["default"]}>
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
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">

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
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="https://www.linkedin.com/in/nicolas-leichnig-163952158/" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="https://github.com/nicolas-leichnig/" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="github"
                                className="white-text"
                              />
                            </a>
                            <a href="https://www.facebook.com/psykolas" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="facebook"
                                className="white-text"
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
            </MDBContainer>
          </MDBMask>
        </MDBView>

        
      </div>
    );
  }
}

export default ClassicFormPage;