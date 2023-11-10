
import React from "react";
import { Link } from "react-router-dom";

import ourProject2 from "../Img/careers2.jpg"
import { IoHomeOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { LiaToolsSolid } from 'react-icons/lia';
import { PiCubeTransparentLight } from 'react-icons/pi';
import {VscGraph} from 'react-icons/vsc';
import {GiTakeMyMoney} from 'react-icons/gi';
import {GiThermometerScale} from 'react-icons/gi';
import {BsPersonCheck} from 'react-icons/bs';

import {useEffect,useState} from "react";

import 'aos/dist/aos.css';
import AOS from "aos";
import Navbar from "./Navbar";


export default function Careers() {

    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  window.addEventListener('scroll', toggleVisible);

    useEffect(()=>{

        AOS.init({duration:2000})
    },[])
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []);
    return (
        <>
        <Navbar/>
            {/* Careers  */}
            <section className="Ourproject Careers">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" alt="" data-aos="fade-up"
     data-aos-duration="2000" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head project-head1 career-head mt-5" data-aos="fade-up"
     data-aos-duration="2000">Careers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* careers opportunities */}
            <section className="howitworks mt-5  mb-5 container">
       <h1 className="text-center mt-5">Build Your Careers With Aadya interiors</h1>

        <div className="row mt-5">

          <div className="col-lg-6 col-md-6 mt-2 mb-2">
          <div className="content-card  career-card card p-2 ">
          <p className="text-center" data-aos="fade-up"
     data-aos-duration="2000" >
           <h3>Jr. Project Manager</h3>

          </p>

          <p className="text-center" data-aos="fade-up"
     data-aos-duration="2000" >
            We are seeking a talented and dynamic Jr. Project Manager for Aadya interior based in Bangalore to coordinate and execute all aspects of all concurrent projects, from the concept stage to its successful completion.</p>
          <div>
          <p className="text-center "> <a href="/" className="btn naving-btn3 ">Apply Here</a>
                        </p>
          </div>
          </div>

          </div>

          <div className="col-lg-6 col-md-6 mt-2 mb-2">
          <div className="content-card career-card card p-2 ">
          <p className="text-center" data-aos="fade-up"
     data-aos-duration="2000">
           <h3>Sr. Project Manager</h3>

          </p>

          <p className="text-center" data-aos="fade-up"
     data-aos-duration="2000" >
          We are seeking a high-octane and talented Sr. Project Manager for Aadya interior based in Bangalore to manage all aspects of all simultaneous projects, from the concept stage to its successful completion.</p>
          <div>
          <p className="text-center "> <a href="/" className="btn naving-btn3 ">Apply Here</a>
                        </p>
          </div>
          </div>

          </div>

          <div className="col-lg-6 col-md-6 mt-2 mb-2">
          <div className="content-card career-card card p-2 ">
          <p className="text-center" data-aos="fade-up"
     data-aos-duration="2000">
           <h3>Sr. Interior Designer</h3>

          </p>

          <p className="text-center" data-aos="fade-up"
     data-aos-duration="2000" >
          Endowed with an innate sense of aesthetics and an eye for beautiful details, our interior designers are an enthusiastic team of spirited and young professionals. We are seeking a flamboyant and talented Sr. InteriorDesigner for Aadya interior based in Bangalo</p>
          <div>
          <p className="text-center "> <a href="/" className="btn naving-btn3 ">Apply Here</a>
                        </p>
          </div>
          </div>

          </div>

     

          <div className="col-lg-6 col-md-6 mt-2 mb-2">
          <div className="content-card career-card card p-2 ">
          <p className="text-center mt-3"  data-aos="fade-up"
     data-aos-duration="2000" >
           <h3>Site Supervisorr</h3>

          </p>

          <p className="text-center mt-3"  data-aos="fade-up"
     data-aos-duration="2000" >
          We are seeking a driven and vigorous Site Supervisor who has the knowledge of services and civil-services interfacing works including the dependencies.</p>
          <div>
          <p className="text-center "  data-aos="fade-up"
     data-aos-duration="2000"> <a href="/" className="btn naving-btn3 ">Apply Here</a>
                        </p>
          </div>
          </div>

          </div>


          {/* <p className="text-center mt-5"> <a href="/" className="btn naving-btn2 \">Learn More</a>
</p> */}
        </div>
       </section>

{/* careers */}

<section className="freeconsult careers-text">
                <div className=" pb-5 pt-2">
                    <div className="mt-5">
                        <h1 className="text-center text-white mt-5">Don't miss these opportunities</h1>
                        <h6 className="text-center text-white mt-3">YOU ARE JUST ONE CLICK AWAY FROM GETTING YOUR DREAMS COME TRUE</h6>
                        <p className="text-center mt-5"> <a href="/" className="btn naving-btn3 ">Get Our Experts Suggestion</a>
                        </p>
                    </div>
                </div>
            </section>
         {/* why choose us */}
         <section className="container mb-5 "  data-aos="fade-up"
     data-aos-duration="2000">
         <div className="row whychoose mt-5 mb-t pb-5">
          <h1 className="text-center my-3">Why Choose Us?</h1>
         <div className="text-center col-lg-3 col-sm-12 mt-5">
          <div className="text-center curve whychoose-item"> 
          <br /><br />
          <IoHomeOutline className=" home-icon" />
          <br /><br />
          <h4> Innovation and <br /> Creativity</h4>
          </div>
         </div>
         <div className="col-lg-3 col-sm-12 mt-5">
         <div className="text-center curve whychoose-item"> 
          <br /><br />
          <TbTruckDelivery className=" home-icon" />
          <br /><br />
          <h4>Exceptional Customer Service</h4>
          </div>
         </div>
         <div className="col-lg-3 col-sm-12 mt-5">
         <div className="text-center curve whychoose-item"> 
          <br /><br />
          <LiaToolsSolid  className=" home-icon" />
          <br /><br />
          <h4>Comprehensive Services</h4>
          </div>
         </div>
         <div className="col-lg-3 col-sm-12 mt-5">
         <div className="text-center curve whychoose-item"> 
          <br /><br />
          <PiCubeTransparentLight className=" home-icon" />
          <br /><br />
          <h4>Attention to Detail</h4>
          </div>
         </div>
         <div className="text-center col-lg-3 col-sm-12 mt-5">
          <div className="text-center curve whychoose-item"> 
          <br /><br />
          <BsPersonCheck className=" home-icon" />
          <br /><br />
          <h4>Unparalleled <br />Expertise</h4>
          </div>
         </div>
         <div className="col-lg-3 col-sm-12 mt-5">
         <div className="text-center curve whychoose-item"> 
          <br /><br />
          <VscGraph className=" home-icon" />
          <br /><br />
          <h4>Exceeding Expectations</h4>
          </div>
         </div>
         <div className="col-lg-3 col-sm-12 mt-5">
         <div className="text-center curve whychoose-item"> 
          <br /><br />
          <GiTakeMyMoney  className=" home-icon" />
          <br /><br />
          <h4>Affordable Luxury</h4>
          </div>
         </div>
         <div className="col-lg-3 col-sm-12 mt-5">
         <div className="text-center curve whychoose-item"> 
          <br /><br />
          <GiThermometerScale className=" home-icon" />
          <br /><br />
          <h4> Tailored to Your Needs</h4>
          </div>
         </div>
          <p className="text-center mt-5">
            
            <Link to="/contact" onClick={scrollToTop} className="btn naving-btn2 ">BOOK A CONSULATION</Link>
          </p> 
         </div>

       </section>
        
          


        </>


    )
}