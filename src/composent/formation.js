import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

const Formation = () => {
  return (
    <>
    <MDBContainer><h1 className="text-center font-weight-bold ">Mon cursus.</h1></MDBContainer>
    <hr/>
    <MDBContainer id="form">
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard
          className='card-image' height="400px"
         id="formImg1"
        >
          <div id="cardform" className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='blue-text'>
                <MDBIcon icon='laptop' /> Titre professionnel (RNCP)
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Developpeur web et web mobile.</strong>
              </MDBCardTitle>
              <p className="text-justify">
              De juin 2019 à mars 2020, obtention du titre professionnel niveau 3 (DUT,Bac+2), 
              partenariat avec le centre de formation AFPA de Beauvais.
              </p>
              <a href="https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_web">
              <MDBBtn color='blue'>
                <MDBIcon icon='clone left' /> En savoir plus.
              </MDBBtn></a>
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard
          className='card-image'
          id="formImg2"
        >
          <div id="cardform" className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='orange-text'>
                <MDBIcon icon='tram' /> C.Q.P
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Animation, Vente, Accueil.</strong>
              </MDBCardTitle>
              <p className="text-justify">
                Saison 2007, obtention du	Certificat de Qualification professionnelle
                vente, animation et accueil au Parc Astérix de Plailly. 
              </p>
              <a href="https://www.umihformation.fr/alt-cqp-certificat-de-qualification-professionnelle.php?gclid=Cj0KCQjwyur0BRDcARIsAEt86IDY0ikVD1HtL1g0KTYN-w4X72SkJQCyHjShA8sRsSSPibFdK3HZdXkaAuK6EALw_wcB">
              <MDBBtn color='deep-orange'>
                <MDBIcon icon='clone left' /> En savoir plus.
              </MDBBtn></a>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4'>
        <MDBCard
          className='card-image'
          id="formImg3"
        >
          <div id="cardform" className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='green-text'>
                <MDBIcon icon='journal-whills' /> Baccalauréat C.G
              </h5>
              
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Comptabilité de gestion.</strong>
              </MDBCardTitle>
              <p className="text-justify">
                En Juin 2005, obtention du Baccalauréat Comptabilité et Gestion 
                au lycée Cassini de Clermont dans l'Oise.
              </p>
              
              <a href="https://fr.wikipedia.org/wiki/Dipl%C3%B4me_de_comptabilit%C3%A9_et_de_gestion">
              <MDBBtn color='green'>
                <MDBIcon icon='clone left' /> En savoir plus.
              </MDBBtn></a>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
   </MDBContainer>
   </>
  )
}

export default Formation;