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
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/html5-logo-png-6.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>HTML 5</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Réalisé un application web statique.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2 '>
          <MDBProgress material value={70} animated color="warning" height="30px" className="text-center"> 70 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".4s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/css.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>CSS 3</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Facilité la mise forme les elements d'une application web et l'embélire.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={75} animated height="30px" color="info" className="text-center"> 75 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      
      
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".6s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/jscr.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Java Scrpit</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Rendre un application web dynamique.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={69} animated height="30px" color="warning" className="text-center"> 69 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/mdb-transparent-big.png')}
          />
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>MDBootstrap</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Facilité et accéléré la production d'une applpication web
              grâce à une bibliothéque d'élément près conçu.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={90} animated height="30px" color="" className="text-center"> 90 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol> 
    </MDBRow>

    <><MDBRow className="mb-4"></MDBRow></>
    

    <MDBRow className="mb-n4">
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".2s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/regv.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>React.Js</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Créer une application web de A à Z via le language React.Js.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={55} animated height="30px" color="info" className="text-center"> 65 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
        </MDBCol>
        <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".2s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/axios.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>AXIOS</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Permet de faire le lien entre le back-end et le front-end 
              avec React.Js.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
        </MDBCol>
    </MDBRow>
    
    
    </MDBContainer>
    <hr/>
    <MDBContainer><h1 className="text-center font-weight-bold ">Les technologie back-end.</h1></MDBContainer>
    <hr/>

    <MDBContainer>
    <MDBRow className="mb-n4">
    <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".4s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/java.jpg')}
          />
        
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>JAVA</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Gérer la partie Back-end d'une application 
              les requêtes clients, ainsi que la sécurité de l'application..
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={61} animated height="30px" color="danger" className="text-center"> 61 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      
      
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".6s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/jhipster.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Jhipster</MDBCardTitle>
            <hr/>
            <MDBCardText>
              FrameWork très utile pour générer la patie Back-end d'un application
              en quelque minute.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={72} animated height="30px" color="" className="text-center"> 72 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/spring-boot-logo.png')}
          />

          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Spring Boot</MDBCardTitle>
            <hr/>
            <MDBCardText>
             Permet de générer automatique de nombreuses parties 
              du Back-end notamment en générant les CRUD automatiquement.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={60} animated height="30px" color="success" className="text-center"> 60 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/maven.png')}
          />

          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Maven</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Ce FrameWork permet l'integration conitnue d'une application web.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={50} animated height="30px" color="" className="text-center"> 50 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      </MDBRow>
    </MDBContainer>

    <hr/>
    <MDBContainer><h1 className="text-center font-weight-bold ">Les outils de productions.</h1></MDBContainer>
    <hr/>
    <MDBContainer>
    <MDBRow className="mb-n4">
    <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".4s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/vsc.jpg')}
          />
        
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Visual Studio Code</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Editeur de code très complet notamment grâce au pluging que l'on peut lui ajouter.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={80} animated height="30px" color="info" className="text-center"> 80 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      
      
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".6s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/uml.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Star UML</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Outils pour réaliser le modèle logique de donnée.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={58} animated height="30px" color="warning" className="text-center"> 58 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/pencil.png')}
          />

          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Pencil</MDBCardTitle>
            <hr/>
            <MDBCardText>
             Simple et efficace pour réalisé la maquette de son application web.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={64} animated height="30px" color="warning" className="text-center"> 64 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/eclipse.png')}
          />

          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Eclipse</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Permet de gérer la partie Back-end de son application web.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={60} animated height="30px" color="" className="text-center"> 60 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      </MDBRow>
    </MDBContainer>

    <hr/>
    <MDBContainer><h1 className="text-center font-weight-bold ">Les outils de collaboration.</h1></MDBContainer>
    <hr/>

    <MDBContainer>
    <MDBRow className="mb-n4">
    <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".4s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/gitlab.png')}
          />
        
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Git Lab</MDBCardTitle>
            <hr/>
            <MDBCardText className="text-justify">
              Ce dépot distand pour les professionels permet de sauvegarder le projet et ainsi facilité la collaboration.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={60} animated height="30px" color="warning" className="text-center"> 60 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      
      
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".6s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/github.png')}
          />
          
          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Git Hub</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Dépot distand qui permet de sauvegarder et partager ces projets personnels.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={75} animated height="30px" color="" className="text-center"> 75 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>

      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/trello.png')}
          />

          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Trello</MDBCardTitle>
            <hr/>
            <MDBCardText>
             Outils qui dispose d'un backlog facilitent la production et la collaboration entre les personnes.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={90} animated height="30px" color="info" className="text-center"> 90 % </MDBProgress>
          </div>
        </MDBCard>
        
        </MDBAnimation>
      </MDBCol>
      <MDBCol md="3" xl="3" className="mb-4">
        <MDBAnimation type="flipInX" delay=".8s">
      
        <MDBCard  cascade >
          <MDBCardImage id="imgCard"
            cascade
            className='img-fluid'
            src={require('../image/slack.png')}
          />

          <MDBCardBody cascade id="cardEx">
            <MDBCardTitle>Slack</MDBCardTitle>
            <hr/>
            <MDBCardText>
              Messagerie très utile pour l'entraide et le partage d'information importante.
            </MDBCardText>
          </MDBCardBody>
          <div className='pt-2'>
          <MDBProgress material value={95} animated height="30px" color="" className="text-center"> 95 % </MDBProgress>
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