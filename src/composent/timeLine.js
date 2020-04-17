import React from "react";
import { MDBTimeline, MDBTimelineStep, MDBIcon, MDBCol } from "mdbreact";

const TimelinePage = () => {
  return (

    <>
    <MDBCol md="10" id="timeLine">
    <MDBTimeline>
      <MDBTimelineStep colorful hoverable color="cyan" label="2004">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Ut enim ad minim veniam
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> 2017
        </p>
        <p className="mb-0 p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </MDBTimelineStep>
      <MDBTimelineStep colorful inverted hoverable color="cyan" label="2">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" className="img-fluid" alt="" />
        <h4 className="font-weight-bold p-4 mb-0">
          Duis aute irure dolor
        </h4>
        <p className="text-muted px-4 mb-0">
          <MDBIcon icon="clock" /> 2016
        </p>
        <p className="mb-0 p-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.
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
        <p className="mb-0 p-4">
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
        <p className="mb-0 p-4">
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
        <p className="mb-0 p-4">
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