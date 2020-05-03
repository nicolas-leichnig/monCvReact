import React from "react";
import { MDBTimeline,MDBContainer, MDBIframe, MDBTimelineStep, MDBIcon, MDBCol } from "mdbreact";

const TimelinePage = () => {
  return (

    <>
    
    <MDBContainer><h1 className="text-center font-weight-bold ">Mes différentes expériences.</h1></MDBContainer>
    <hr/>
    <MDBCol md="10" id="timeLine">
    <MDBTimeline>
      <MDBTimelineStep colorful hoverable color="cyan" label="2020">
        <img id="imgTime" src={require("../image/Expériences/insy2s .png")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Stage développeur Web. (INSY2S)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Novembre 2019 à mars 2020.
        </p>
        <p className="mb-0 p-4 text-justify">
          J'ai effectué mon stage de fin d'étude dans la société INSY2S située à Lille. 
          J'ai pu découvrir le fonctionnement d'une entreprise spécialisée entre autre dans le développement
          d'applications Web. Celle-ci utilise des méthodes "Scrum" ou "Agile" et des languages de programmation récent
          comme React.Js. Intégré directement au projet professionnel en cours, j'ai pu y apporter ma contribution en réalisant des
          parties Front-End et Back-End.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted hoverable color="cyan" label="2018">
        <img id="imgTime" src={require("../image/Expériences/leclerc.jpg")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Responsable de rayon. (Leclerc)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Novembre 2013 à janvier 2018.
        </p>
        <p className="mb-0 p-4 text-justify">
          En contrat avec la société Expansion 5 qui fournie des conseillés clientèles
          et responsable de rayon. J'ai été missionné pour occuper le poste de responsable
           de rayon dans l'Espace Culturel du Leclerc de Pont Sainte Maxence.
           J'avais la responsabilité de 2 à 3 personnes ainsi que des rayons télévision
           , HIFI, multimédia dans l'espace culturel et les rayons petits et gros électroménager 
           dans la grande surface. Les commandes, gestion des stocks, des marges, des plannings, du recrutement
           n'ont plus de secret pour moi.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful hoverable color="cyan" label="2012">
        <img id="imgTime" src={require("../image/Expériences/leclerc montataire.png")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Conseiller Clientèle. (Leclerc)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Septembre 2010 à juin 2012
        </p>
        <p className="mb-0 p-4 text-justify">
          Conseiller Clientèle pendant 3 mois, puis j'ai du assurer avec succès
          l'interim du poste de resposable de rayon TV / HIFI / Multimédia / Téléphonie mobile et 
          petit et gros électroménager.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted hoverable color="cyan" label="2009">
        <img id="imgTime" src={require("../image/Expériences/poste.jpg")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Facteur. (La Poste)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Janvier à septembre 2009
        </p>
        <p className="mb-0 p-4 text-justify">
          Réaliser le trie du courrier et sa distribution ainsi que des colis, à 
          pieds, en scooter ou en voiture. Dans le secteur de Rieux et Pont Sainte Maxence.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful hoverable color="cyan" label="2008">
        <img id="imgTime" src={require("../image/Expériences/kalibox.jpg")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Agent de fabrication. (Kalibox)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Janvier à septembre 2008
        </p>
        <p className="mb-0 p-4 text-justify">
          Fabrication de boîte isotherme pour l'intustrie pharmaceutique, à Plailly
          en interim.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful hoverable color="cyan" label="2008">
        <img id="imgTime" src={require("../image/Expériences/dhl.png")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Agent de Conditionnement. (DHL)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Octobre à décembre 2008
        </p>
        <p className="mb-0 p-4 text-justify">
          Poste basé à Verneuil en Hallate (Oise), conditionnement de magazines en intérim.
        </p>
      </MDBTimelineStep>
      
      <MDBTimelineStep colorful inverted hoverable color="cyan" label="2007">
      <MDBIframe id="imgTime" src="https://www.youtube.com/watch?v=cJMqTrI1aTM" className="img-fluid" />
        <h4 className="font-weight-bold p-4 mb-0">
          Conseiller clientèle / Animateur. (Parc Asterix)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Février à octobre 2007
        </p>
        <p className="mb-0 p-4 text-justify">
          Je m'occupais des jeux d'adresse où il fallait attirer le client.
          J'ai été aussi affecté au stand de photo à la descente des attractions.
          J'ai effectué un C.Q.P Vente , Animation et Accueil en partenaria avec le parc.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful hoverable color="cyan" label="2006">
        <img id="imgTime" src={require("../image/Expériences/mac donald.png")} className="img-fluid z-depth-1" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Equipier polyvalent. (Mac Donald)
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Février à septembre 2006
        </p>
        <p className="mb-0 p-4 text-justify">
          Principalement en cuisine, je devais confectionner les hamburgers 
          de façon minutieuse en respectant les règles d'hygiènes.
        </p>
      </MDBTimelineStep>
    </MDBTimeline>
  </MDBCol>
  </>
  );
};

export default TimelinePage;