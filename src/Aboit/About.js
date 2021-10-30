import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
     return (
          <div>
               <div class="card  pb-5">
                    <img src='https://www.wpa.org.uk/_nuxt/img/autumn-leaves-floating.7dc6686.jpg' class="card-img   " alt="..." />
                    <div class="card-img-overlay">
                         <h5 class="card-title Home-h3-tag-banner text-white ">Homepage /About us</h5>
                         <p class="card-text text-white"><h1 className="Home-h1-tag-banner">About us</h1></p>
                         <p class="card-text text-white"> <h2 className="Home-h2-tag-banner" >Find out more about who we are and our commitment to providing the very best service to you.</h2></p>
                    </div>
               </div>
               <Container>
                    <div className="text mt-5 ">
                         <h1>Just health insurance. No distractions.</h1>
                         <p className="mt-5" >We provide access to the sort of healthcare that we want for ourselves and our families. <a href=""> We’ve been helping our members as a not-for-profit organisation since 1901.</a> That’s quite a while now and, because we're good at it, that’s all we do. Just health insurance. No distractions.
                         </p>
                         <p className="mt-3" >

                              By partnering with like-minded individuals and companies, we offer groundbreaking personal and business health insurance policies that have truly revolutionised healthcare in the UK. From funding cancer drugs not readily available on the NHS, the first benefit of its kind, to being recognised by the World Health Organisation as leading in the development of new policies that reduce costs for our members.
                         </p>
                    </div>
               </Container>

               <div className="row mt-5 g-0 ">
                    <div className="col-md-6 col-12  mt-5 ">
                         <img width="100%" src="https://www.wpa.org.uk/_nuxt/img/glasgow-tower.0aced81.jpg" alt="" />
                    </div>
                    <div className="col-md-6  col-12 text-white bg-primary mt-5 ms-0">
                         <Container>
                              <h1 className="ms-5 mt-5" >
                                   Corporate governance
                              </h1>
                              <h5 className="ms-5 mt-5">
                                   As a not-for-profit company, committed to transparency in all that we do, we recognise the importance of sharing details of our company reports and structures.
                              </h5>
                              <h5 className="ms-5 mt-5 mb-5" >Find out more about our leaders, values, culture and governance.</h5>
                              <Button className="btn  text-white ms-5 mt-5 pb-1  " >Find more</Button>
                         </Container>


                    </div>
               </div>
               <Container>
                    <div className="mt-5">
                         <h1 className="mt-5 mb-5" >Customer service excellence</h1>
                    </div>
                    <div className="row">
                         <div className="col-md-6 col-12 border-end border-dark ">
                              <h2>
                                   Review our claim service
                              </h2>
                              <p className="mt-3" >

                                   If you need to make a claim, you expect your insurance provider to be there for you. When you buy our health insurance, you buy our promise that we’ll deliver
                              </p>
                              <p className="mt-3" >

                                   After you’ve made a claim we’ll invite you to rate the service you received from us during the process.
                              </p>
                              <p className="mt-3" >

                                   Members rate our claim service as excellent, with an average rating of 4.8 out of 5.
                              </p>
                              <p className="mt-5" ><small>* Data recorded between 1st July 2020 and 30th June 2021. 6,482 responses received.</small></p>
                         </div>
                         <div className="col-md-6 col-12 ">
                              <h2 className="ms-5" > Member reviews</h2>
                              <p className="mt-3 ms-5 mb-5">
                                   A personal commitment to customer service excellence from staff who are trained first and foremost to listen – and most of all, to care.
                              </p>
                              <img className="ms-5" width="300px" src="https://www.wpa.org.uk/trustpilot/Trustpilot_brandmark_gr-blk_RGB.svg" alt="" />
                              <img className="ms-5 mt-5" width="300px" src="https://www.wpa.org.uk/trustpilot/trustpilot-stars.svg" alt="" />

                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default About;