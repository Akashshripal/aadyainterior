import React from "react";
import ourProject2 from "../Img/blogImg2.jpg"
import { Link } from "react-router-dom";
import cardimage1 from "../Img/blogcardimg.jpg"
// import cardimage2 from "../Img/card-image2.jpg"
// import cardimage3 from "../Img/card-image3.jpg"
import cardimage4 from "../Img/blogcardimg2.jpg"

import {useEffect,useState} from "react";
import Navbar from "./Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";

//icon
import { BsArrowUpRight } from 'react-icons/bs';


export default function Blogs() {
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
    return (
        <>
   <Navbar />

            {/* Ourproject-head */}
            <section className="Ourproject blogs">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
     data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head blog-head" data-aos="fade-up"
     data-aos-duration="2000">Blogs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog-card */}
            <section className="project-images container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">

                        <div className="flip-card mt-5 mb-5" data-aos="fade-up"
     data-aos-duration="2000">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage1} className="card-image rounded"  alt="" />
                                </div>
                                <div className="flip-card-back pt-5">
                                    {/* <h1>Nita & Parag</h1> */}
                                    <p className="mt-5">The Untapped European Theme Of This 2BHK Home Is Pure Bliss!!</p>
                                    <p className="text-center mt-2"> <a href="/" className="btn naving-btn3 ">Visit &nbsp;<BsArrowUpRight className="mb-1"/></a>
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="flip-card mt-5 mb-5" data-aos="fade-up"
     data-aos-duration="2000">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage4} className="card-image rounded" alt=""  />
                                </div>
                                <div className="flip-card-back pt-5">
                                    <p className="mt-5">Rules To Keep In Mind While Decorating a Living Room</p>
                                    <p className="text-center mt-2"> <a href="/" className="btn naving-btn3 ">Visit &nbsp;<BsArrowUpRight className="mb-1"/></a>
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
         
            {/* free consult */}

            <section className="freeconsult"  data-aos="fade-up"
     data-aos-duration="2000"> 
       <div className=" mt-5 pb-5 pt-5">
        <div className="mt-5">
          <h1 className="text-center text-white mt-5">Your Dream Home, One Click Away</h1>
          <h6 className="text-center text-white mt-3">Schedule a Complimentary Consultation with Our Expert Interior Designers.</h6>
          <p className="text-center mt-5">
             <Link to="/contact" className="btn naving-btn3 "  onClick={scrollToTop} >Get Started</Link>
              
                </p>
        </div>
       </div>
       </section>
        </>


    )
}