import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const MultiCarouselPage = () => {
  return (
    <>
    <MDBContainer><h1 className="text-center font-weight-bold ">Globe-trotteur !?</h1></MDBContainer>
    <hr/>
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/colosseum-2030643_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Rome (Italie)</MDBCardTitle>
                    <MDBCardText>
                      Rome est une ville gastronomique, où l'on trouve des monuments 
                      antiques (Colisée, Panthéon) de toute beauté.
                      
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/tunisia-2425441_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Djerba (Tunisie)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Toujours baigné de soleil, Djerba possède des plages superbes
                      avec une eau d'un bleu turquoise.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/spain-1276209_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Barcelone (Espagne)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Barcelone posséde un club de foot mythique avec un stade de plus de 80 000 places,
                      et sa gastromie vont vous réveiller les papilles.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/reunion-island-4036390_1280.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>L'île de la Réunion</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      La Réunion est magique tant par sa diversité de paysage
                      que de sa culture et possède un climat de rêve.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/beach-2084350_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Phuket (Thaïlande)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Ville touristique qui sait laisser la place aux traditions,
                      un combat de muay thai et un plat épicé, il n'y a rien de plus local.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/hollywood-1245960_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Los Angeles (Etat-Unis)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Hollywood, Santa Monica, Malibu autant des lieux mithyques à visiter dans cette 
                      ville immense qui ne dort jamais.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/las-vegas-864881_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Las Vegas (Etat-Unis)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      La fête et le jeux sont les deux maîtres mots de cette ville hors norme situé en plein desert du Névada.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/golden-gate-bridge-731207_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>San Francisco (Etat-Unis)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Connu pour son pont le plus emblématique d'Amérique du Nord le Golden Gate long de 2 Km, San Fransisco est une ville où il fait bon vivre.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={require('../image/voyage/nazare-4317252_1920.jpg')} />
                  <MDBCardBody>
                    <MDBCardTitle>Nazaré (Portugal)</MDBCardTitle>
                    <MDBCardText className="text-justify">
                      Nazaré au Portugal est là où l'on trouve les vagues les plus hautes du monde, 
                      mais aussi des bons petits plâts à base de poisson.
                    </MDBCardText>
                    <MDBBtn color="primary">En savoir plus</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </>
  );
}

export default MultiCarouselPage;