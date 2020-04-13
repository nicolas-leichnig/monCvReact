import React from 'react';
import { MDBCard, MDBCardBody, MDBCardUp, MDBAvatar, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const Contact = () => {
  return (
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard testimonial>
          <MDBCardUp className='indigo lighten-1 '  />
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
      </MDBCol>
      
    </MDBRow>
  )
}

export default Contact;