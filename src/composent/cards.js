import React from 'react';
import { MDBBtn,MDBProgress, MDBCard, MDBAnimation, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from
'mdbreact';
import "../index.css"

const CardExample = () => {
  return (
    /*fist row*/
    <>
    <MDBContainer><h1 className="text-center font-weight-bold ">Les technologie front-end.</h1></MDBContainer>
    <hr/>
    <MDBContainer md="10">
    <MDBRow className="mb-n4">
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".2s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/html5-logo-png-6.png')}
          />
          
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".4s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/css.png')}
          />
          
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      
      
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".6s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/javascript (1).png')}
          />
          
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/mdb-transparent-big.png')}
          />
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol> 
    </MDBRow>

    <><MDBRow className="mb-4"></MDBRow></>
    

    <MDBRow className="mb-n4">
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".2s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/regv.png')}
          />
          
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".4s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/html5-logo-png-6.png')}
          />
        
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      
      
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".6s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/html5-logo-png-6.png')}
          />
          
          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade id="cardEx">
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/html5-logo-png-6.png')}
          />

          <MDBCardBody cascade>
            <MDBCardTitle>Card title</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="warning" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol> 
    </MDBRow>
    </MDBContainer>
    </>
  )
}

export default CardExample;