
import React from "react";
import ourProject2 from "../Img/contact2.jpg"
import { PiTelegramLogoThin } from 'react-icons/pi';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneOutbound } from 'react-icons/bs';

import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
import Navbar  from "./Navbar";

export default function Contact() {
  useEffect(()=>{

    AOS.init({duration:2000})
},[])
    return (
        <>
        <Navbar/>
            {/* contact  */}
            <section className="Ourproject contact">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" alt=""  data-aos="fade-up"
     data-aos-duration="2000" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head project-head1 mt-5"  data-aos="fade-up"
     data-aos-duration="2000">Contact us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact */}
          <section className="contact-info">
            <div className="container p-5">
       <div className="row pt-3 pb-5">
          <div className="col-lg-6 col-sm-12 ">
            <h1 className="text-dark mt-4">Have something to say? Let's chat!</h1>
            <p>Speak up! We're all ears and eager to hear your thoughts. Join the conversation and let's chat about what matters.</p>
            <ul>
                <li><PiTelegramLogoThin/> &nbsp;
                No 13, Pilahalli Colony Ground Floor, Ishwara Temple Road,  Bangalore 562123
                </li>
               
                <li> 
                  <a href="mailto:info@aadyainteriorsdesign.com" className="footer-hyperlnk">
                <CiMail/> &nbsp;
                info@aadyainteriorsdesign.com
                    </a>
                </li>
             
                <li>
                <a href="tel:+916361814490" className="footer-hyperlnk"><BsTelephoneOutbound/> &nbsp;63618 14490</a>
                &nbsp; ,  &nbsp; <a href="tel:+916361014059"  className="footer-hyperlnk">636 101 4059</a>

                </li>
            </ul>
          </div>
          <div className="col-lg-5 col-sm-12 ">
          <form className="form rounded "  data-aos="fade-up"
     data-aos-duration="2000">
               <h3 className="text-center text-white pb-3">Meet a designer</h3>

                <div class="mb-3">
                {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name*"/>
              </div>
              <div class="mb-3">
                {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email*"/>
              </div>
              <div class="mb-3">
                {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone Number*"/>
              </div>
               <div class="mb-3">
                {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Pincode"/>
              </div>
              <p className="text-center">
              <button type=" submit" class="btn naving-btn1">Send</button>
              </p>
              
          </form>
          </div>
       </div>
       </div>
       </section>
       {/* contact location */}
          {/* <iframe src="" frameborder="0"></iframe> */}
          <iframe  data-aos="fade-up"
     data-aos-duration="2000" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62216.90935817017!2d77.62681962695314!3d12.936180095081289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1695295446358!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       
        </>


    )
}