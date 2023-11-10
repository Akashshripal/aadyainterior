
import React from "react";
import ourProject2 from "../Img/testimonial2.jpg"

import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
import Navbar from "./Navbar";
export default function Testimonial() {
  useEffect(()=>{

    AOS.init({duration:2000})
},[])
    return (
        <>
        <Navbar/>
            {/* Testimonial  */}
            <section className="Ourproject Testimonial">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
     data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head project-head1 Testimonial-head mt-5" data-aos="fade-up"
     data-aos-duration="2000">Testimonial</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="review container testimonial">
                <h2 className="text-center mt-5 ">We'll let our clients do the talking</h2>
                <h5 className="text-center mb-5">Here's what they have to say</h5>
              <div className="row  mb-5">
               
                <div className="col-lg-4">
                  <div className="card p-3">
                    <div className="card-content card-review">
                    <iframe  style={{width:"100%"}} data-aos="fade-up"
     data-aos-duration="2000" src="https://www.youtube.com/embed/pkMiuF039Yo">
                   </iframe>
                      <p>Best Interior Designers Customer Review | Modular Home Design in Bangalore</p>
                      <h3>
                        Abhinash Ghoshal</h3> 
                      <p>Modular Home in Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="card p-3">
                    <div className="card-content card-review">
                    <iframe  style={{width:"100%"}} data-aos="fade-up"
     data-aos-duration="2000" src="https://www.youtube.com/embed/VCdtoP2k1Kc">
                   </iframe>
                      <p>Best Interior Designers Customer Review | Modular Home Design in Bangalore</p>
                      <h3>Mr & Mrs Hussain</h3> 
                      <p>Modular Home in Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="card p-3">
                    <div className="card-content card-review">
                    <iframe  style={{width:"100%"}} data-aos="fade-up"
     data-aos-duration="2000" src="https://www.youtube.com/embed/fujMmEGQAsQ">
                   </iframe>
                      <p>Best Interior Designers Customer Review | Modular Home Design in Bangalore</p>
                      <h3>
                        Mrs Niti & Prasanth</h3> 
                      <p>Modular Home in Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
       </section>
           


        
          


        </>


    )
}