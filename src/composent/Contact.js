import React from 'react';
import { MDBCard,MDBMask, MDBContainer, MDBCardBody, MDBCardUp, MDBAvatar, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact';
import "../index.css"

const Contact = () => {
  return (
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
    <MDBRow>
      <MDBAnimation
                  type="fadeInLeft"
                  delay=".7s"
                  className="black-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                  Développeur Web Full Stack
                  </h1>
                  <hr className="hr-dark" />
                  <h5 className="mb-4 text-justify">
                  Je suis manager avec 5 ans d’expérience dans le commerce. Tout juste diplômé d’un titre professionnel Développeur Web et Web mobile niveau 5 (BTS / DUT), 
                  dans le cadre d’une réorientation de carrière, je recherche mon futur employeur .
                  </h5>
                  <hr className="hr-dark" />
                  <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol className="mb-10 text-center">
            <img src={require("../image/efd.png")} className="img-fluid z-depth-1" alt="compétence" id="img" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
                </MDBAnimation>
                <MDBCol></MDBCol>

         <MDBCol md="5" xl="5" className="mb-4">
        <MDBAnimation type="fadeInRight" delay=".7s">
        <MDBCard testimonial>
          <MDBCardUp className='indigo darken-4' id="haut" />
          <MDBAvatar className='mx-auto white'>
          <img alt="Ma photo" id="pic" src={require("../image/comica1584616571639.jpg")}/>
          </MDBAvatar>
          <MDBCardBody>
            <h4 className='card-title'>Nicolas Leichnig</h4>
            <hr />
            
            <p>
              <MDBIcon icon='birthday-cake' /> 27/06/1985 - 34 ans
              
            </p>
            <p>
              <MDBIcon icon='phone' /> 06-52-20-17-86
              
            </p>
            <p>
              <MDBIcon icon='envelope' /> nicolas-leichnig@yahoo.com
              
            </p>
            <p><MDBIcon icon='home' /> 468 rue de l'église -  
            60290 - 
            Neuilly sous Clermont</p>
              <MDBIcon icon='car-side' /> Permis B + Voiture 
            <hr/>
            <div className="text-center mt-4 black-text">
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="https://www.linkedin.com/in/nicolas-leichnig-163952158/" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="black-text"
                                size="2x"
                              />
                            </a>
                            <a href="https://github.com/nicolas-leichnig/" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="github"
                                className="black-text"
                                size="2x"
                              />
                            </a>
                            <a href="https://www.facebook.com/psykolas" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="facebook"
                                className="black-text"
                                size="2x"
                              />
                            </a>
                          </div>
                        </div>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
    </MDBMask>
  )
}

export default Contact;