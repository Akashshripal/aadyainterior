import React from "react";
import ourProject2 from "../Img/Livingcontent1.jpg"
import { Link } from "react-router-dom";
import cardimage1 from "../Img/PoojaRoom.jpg"
// import cardimage2 from "../Img/card-image2.jpg"
// import cardimage3 from "../Img/card-image3.jpg"
import cardimage4 from "../Img/blogcardimg2.jpg"

import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";

//icon
import { BsArrowUpRight } from 'react-icons/bs';


import { PiHandsPrayingLight } from 'react-icons/pi';
import { PiFlowerLotusLight } from 'react-icons/pi';
import { GoPersonAdd } from 'react-icons/go';
import { TbMoodSmileBeam } from 'react-icons/tb';
import { PiFlower } from 'react-icons/pi';
import { FiTrendingUp } from 'react-icons/fi';

export default function FAQs() {
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
    useEffect(() => {

        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Navbar />

            {/* Ourproject-head */}
            <section className="Ourproject Homevilla blogs FAQs">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head blog-head service-head FAQ-head" data-aos="fade-up"
                                    data-aos-duration="2000">F A Q's</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container mt-3">
  <div id="accordion" className="pt-3 pb-4">
    <div class="card">
      <div class="card-header">
        <a class="btn" data-bs-toggle="collapse" href="#collapseOne" style={{fontWeight:"700"}}>
        1. How do I design my interior for a new house?
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body"  style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        At Aadya Interiors, we offer comprehensive interior design services. We begin by understanding your preferences and needs, and then our expert team will create a customized design plan for your new house.
        </div>
      </div>
    </div>
    <br/>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo" style={{fontWeight:"700"}}>
        2. What do interior designers charge?
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        Our pricing at Aadya Interiors varies depending on the scope of the project. We provide transparent and competitive quotes tailored to your specific project requirements.
        </div>
      </div>
    </div>
    <br/>
    
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree" style={{fontWeight:"700"}}>
        3. How long does the entire design process take?
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        The timeline for your project at Aadya Interiors is project-specific, taking into account factors like size and complexity. During your initial consultation, we will provide you with an estimated timeline.
        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsefour" style={{fontWeight:"700"}}>
        4. Is warranty provided, and is security ensured?
        </a>
      </div>
      <div id="collapsefour" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
          Aadya Interiors offers warranty coverage for our services, and we prioritize the security of your property throughout the design and renovation process.
        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsefive" style={{fontWeight:"700"}}>
        5. Can I design my entire home with Aadya Interiors?
        </a>
      </div>
      <div id="collapsefive" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapsesix" style={{fontWeight:"700"}}>
        6. Which are the best Modular Kitchen designs in Bangalore?
        </a>
      </div>
      <div id="collapsesix" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        Aadya Interiors provides a wide range of stylish and functional modular kitchen designs tailored to your preferences and space.
        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseseven" style={{fontWeight:"700"}}>
        7. Which are the best Interior Designers in Bangalore?
        </a>
      </div>
      <div id="collapseseven" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        Aadya Interiors is among the top interior designers in Bangalore, recognized for our creative solutions and unwavering commitment to client satisfaction.
        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseeight" style={{fontWeight:"700"}}>
        8. Which is the top Interior Designers in Bangalore?
        </a>
      </div>
      <div id="collapseeight" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
          Aadya Interiors is proud to be considered a top interior designer in Bangalore, offering innovative design concepts and personalized solutions.
        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseNine" style={{fontWeight:"700"}}>
        9. Where can I find an affordable Interior Designer in Bangalore?
        </a>
      </div>
      <div id="collapseNine" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        Aadya Interiors combines competitive pricing with high-quality design standards, making us an affordable choice for interior design services in Bangalore.
        </div>
      </div>
    </div>
    <br/>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTen" style={{fontWeight:"700"}}>
        10 . Who has the best interiors for Villas in Bangalore?
        </a>
      </div>
      <div id="collapseTen" class="collapse" data-bs-parent="#accordion">
        <div class="card-body"   style={{fontWeight:"600", color:"rgb(8 179 195)"}}>
        Aadya Interiors specializes in creating stunning villa interiors in Bangalore, ensuring luxury, functionality, and elegance.
        </div>
      </div>
    </div>
    <br/>



    

  </div>
</div>

          
            {/* free consult */}

            <section className="freeconsult" data-aos="fade-up"
                data-aos-duration="2000">
                <div className="  pb-5 pt-5">
                    <div className="mt-5">
                        <h1 className="text-center text-white mt-5">Your Dream Home, One Click Away</h1>
                        <h6 className="text-center text-white mt-3">Schedule a Complimentary Consultation with Our Expert Interior Designers.</h6>
                        <p className="text-center mt-5">
                            <Link to="/contact" className="btn naving-btn3 " onClick={scrollToTop}>Get Started</Link>

                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}