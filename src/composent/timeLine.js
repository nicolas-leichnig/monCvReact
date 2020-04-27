import React from "react";
import { MDBTimeline,MDBContainer, MDBTimelineStep, MDBIcon, MDBCol } from "mdbreact";

const TimelinePage = () => {
  return (

    <>
    
    <MDBContainer><h1 className="text-center font-weight-bold ">Mes différentes expériences.</h1></MDBContainer>
    <hr/>
    <MDBCol md="10" id="timeLine">
    <MDBTimeline>
      <MDBTimelineStep colorful hoverable color="cyan" label="2020">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Stage développeur Web.
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Novembre 2019 à mars 2020.
        </p>
        <p className="mb-0 p-4 text-justify">
          J'ai effectué mon stage de fin d'étude dans la société INSY2S situé à Lille. 
          J'ai pu découvrir le fontionnement du entreprise spécialisé en autre dans le développement
          d'applications Web. Qui utilise des méthodes "Scrum" ou "Agile" et des languages de programation récent
          comme React.Js. Intégré directement au projet professionnel en cours , j'ai pu y apporter ma contribution en réalisant
          partie Front-End comme Back-End.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted hoverable color="cyan" label="2018">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Responsable de rayon.
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> Novembre 2013 à janvier 2018.
        </p>
        <p className="mb-0 p-4 text-justify">
          En contrat avec la société Expansion 5 qui fournie des conseillés clientèles
          et responsable de rayon. J'ai été missionné pour occupé le poste de responsable
           de rayon dans l'Espace Culturel du Leclerc de Pont Sainte Maxence.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful hoverable color="cyan" label="3">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Sed ut nihil unde omnis
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> 2015
        </p>
        <p className="mb-0 p-4 text-justify">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted hoverable color="cyan" label="4">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Quis autem vel eum voluptate
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> 2014
        </p>
        <p className="mb-0 p-4 text-justify">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate
          non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem
          rerum facilis est et expedita distinctio.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful hoverable color="cyan" label="5">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Mussum ipsum cacilds
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> 2013
        </p>
        <p className="mb-0 p-4 text-justify">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a
          sapiente delectus, ut aut reiciendis voluptatibus maiores alias
          consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </MDBTimelineStep>
    </MDBTimeline>
  </MDBCol>
  </>
  );
};

export default TimelinePage;