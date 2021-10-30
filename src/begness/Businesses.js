import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

const Businesses = () => {
     return (
          <div>
               <div class="card  pb-5">
                    <img src='https://www.wpa.org.uk/_nuxt/img/london.542ee75.jpg' class="card-img   " alt="..." />
                    <div class="card-img-overlay">
                         <h5 class="card-title Home-h3-tag-banner ">Homepage /Businesses</h5>
                         <p class="card-text "><h1 className="Home-h1-tag-banner">Businesses</h1></p>
                         <p class="card-text "> <h2 className="Home-h2-tag-banner" >Whatever the size of your business, we have a comprehensive range of products and advanced services to support employee health and wellbeing.</h2></p>
                    </div>
               </div>
               <Container>
                    <div className="text mt-5 margin">
                         <h1>Small and medium enterprises (2 or more employees)</h1>
                         <p className="mt-5" >From private medical insurance, through to cash and dental plans, our policies can be tailored to protect the health and wellbeing of your staff.
                         </p>
                         <p className="mt-3" >

                              By partnering with like-minded individuals and companies, we offer groundbreaking personal and business health insurance policies that have truly revolutionised healthcare in the UK. From funding cancer drugs not readily available on the NHS, the first benefit of its kind, to being recognised by the World Health Organisation as leading in the development of new policies that reduce costs for our members.
                         </p>
                    </div>
               </Container>
               <div className="row margin g-0 mb-5 ">
                    <div className="col-md-6 col-12  pb-3 mt-5 bg-info ">
                         <Container>
                              <h1 className="ms-5 mt-5" >
                                   Corporate governance
                              </h1>
                              <h5 className="ms-5 mt-5">
                                   As a not-for-profit company, committed to transparency in all that we do, we recognise the importance of sharing details of our company reports and structures.
                              </h5>

                              <Button className="btn  text-white ms-5 mt-5 pb-1  " >Find more</Button>
                         </Container>
                    </div>
                    <div className="col-md-6 pb-3 col-12 text-white bg-secondary mt-5 ms-0">
                         <Container>
                              <h1 className="ms-5 mt-5" >
                                   Large companies (250 or more employees)
                              </h1>
                              <h5 className="ms-5 mt-5">
                                   Private medical schemes built from the ground up to fulfil your specific needs, where you define the scheme benefits and administration protocols.
                              </h5>

                              <Button className="btn  text-white ms-5 mt-5 pb-1  " >Find more</Button>
                         </Container>


                    </div>
               </div>
               <div className="mt-5 margin-2">
                    <h1 className="mt-5 mb-5" >Commitment to providing the very best service to you</h1>
               </div>
               <div className="row">
                    <div className="col-md-6 col-12 border-end border-dark ">
                         <h4>
                              Award winning
                         </h4>
                         <p className="mt-3 mb-5" >

                              When we win an award, we are proud. The recognition adds validity to everything we strive to achieve for our members. We’ve won numerous consumer awards over the years – below are some of the more recent ones.
                         </p>
                         <div className="row mt-4">
                              <div className="col-md-4 col-12  ">
                                   <img className="ms-5" width="200px" src="https://www.wpa.org.uk/_nuxt/img/moneyfacts-awards2021.2e610af.svg" alt="" />
                              </div>
                              <div className="col-md-4 col-12 ">
                                   <img className="ms-5" width="200px" src="https://www.wpa.org.uk/_nuxt/img/moneyfacts-awards2021.2e610af.svg" alt="" />
                              </div>
                              <div className="col-md-4 col-12 ">
                                   <img className="ms-5" width="200px" src="https://www.wpa.org.uk/_nuxt/img/ILP20WIN-multi-healthcashprv.9e040fd.svg" alt="" />
                              </div>
                         </div>
                         <p className="mt-3" >

                              After you’ve made a claim we’ll invite you to rate the service you received from us during the process.
                         </p>
                         <p className="mt-3" >

                              Members rate our claim service as excellent, with an average rating of 4.8 out of 5.
                         </p>
                         <p className="mt-5" ><small>* Data recorded between 1st July 2020 and 30th June 2021. 6,482 responses received.</small></p>
                    </div>
                    <div className="col-md-6 col-12  ">
                         <h2 className="ms-5" > Commended by our members</h2>
                         <p className="mt-3 ms-5 mb-5">
                              We offer all of our members a personal commitment to customer service excellence from staff who are trained first and foremost to listen – and most of all, to care.
                         </p>

                         <img className="ms-5 mt-5" width="300px" src="https://www.wpa.org.uk/trustpilot/trustpilot-stars.svg" alt="" />

                    </div>
               </div>
          </div>
     );
};

export default Businesses;