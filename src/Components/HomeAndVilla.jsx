import React from "react";
import ourProject2 from "../Img/HomeImg1.jpg"
import { Link } from "react-router-dom";
import cardimage1 from "../Img/home-contentimg.jpg"
// import cardimage2 from "../Img/card-image2.jpg"
// import cardimage3 from "../Img/card-image3.jpg"
import cardimage4 from "../Img/blogcardimg2.jpg"

import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";

//icon
import { BsArrowUpRight } from 'react-icons/bs';


import { BsRepeat } from 'react-icons/bs';
import { MdOutlineChair } from 'react-icons/md';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { LiaBrainSolid } from 'react-icons/lia';
import { TbHomeStats } from 'react-icons/tb';
import { FiTrendingUp } from 'react-icons/fi';

export default function HomeAndVilla() {

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
            <section className="Ourproject Homevilla">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head blog-head service-head villa-head" data-aos="fade-up"
                                    data-aos-duration="2000">Appartment ,Home & Villa </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog-card */}
            {/* <section className="project-images container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">

                        <div className="flip-card mt-5 mb-5" data-aos="fade-up"
     data-aos-duration="2000">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage1} className="card-image rounded"  alt="" />
                                </div>
                                <div className="flip-card-back pt-5">
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
            </section> */}

            <section className="Vilaa">
                <div className="container p-5 ">
                    <div className="row pt-3 pb-1 d-flex align-items-center">
                        <div className="col-lg-6 col-sm-12" data-aos="fade-up"
                            data-aos-duration="2000 ">
                            <h3 className="text-dark ">Decorate Your Living Spaces with Exquisite Appartment, Home and Villa Interior Decoration</h3>
                            <h6 className="text-justify">Your home is more than just a structure; it's a canvas waiting to be transformed into a masterpiece Appartment,Villa
                             and <span>home interior decoration </span>are the keys to making your living spaces truly enchanting, comfortable,
                              and reflective of your unique style. Whether you're considering a full makeover or a subtle refresh,
                               our expert interior decorators are here to make your dream home or villa a reality.</h6>
                            
                            <h6 className="text-dark text-justify ">Home is where the heart is, and interior decoration is the art of infusing heart and soul into the very essence of your living space. 
                            Here's why home interior decoration matters</h6>
                        </div>
                        <div className="col-lg-5 col-sm-12  pb-3 ">
                       
                            <img src={cardimage1} className="content-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="howitworks mt-5  mb-5 container "  data-aos="fade-up"
     data-aos-duration="2000">
       <h1 className="text-center mt-5">The Art of Interior Decoration</h1>

        <div className="row mt-5">

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card  ">
          <p className="text-center">
          <h5 className="card-heading">Personalization</h5>
           <BsRepeat className=" home-icon"/>

          </p>

          <h6 className="text-justify px-4" >Your home should be a reflection of your personality, values, and style. Interior decoration allows you to infuse your personal touch into every nook and cranny, creating a space that resonates with you and your family.</h6>
          <div>

          </div>
          </div>

          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card ">
          <p className="text-center">
          <h5 className="card-heading">Comfort and Functionality</h5>

           <MdOutlineChair className=" home-icon"/>

          </p>
          <h6 className="text-justify px-4" >Thoughtful decoration enhances the comfort and functionality of your home. It's about creating spaces that not only look good but also work well for your daily routines and lifestyle.</h6>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card  ">
          <p className="text-center">
          <h5 className="card-heading">Optimized Use of Space</h5>

           <HiOutlineHomeModern  className=" home-icon"/>

          </p>
          <h6 className="text-justify px-4" >Interior decorators are experts at optimizing space. They can transform even the smallest corners into functional and aesthetically pleasing areas, maximizing every square foot of your home.</h6>  
          </div>
          </div>

     

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card  ">
          <p className="text-center">
          <h5 className="card-heading ">Stress-Free Design</h5>

           <LiaBrainSolid className=" home-icon"/>

          </p>
          <h6 className="text-justify px-4" >Designing your home can be overwhelming, but interior decorators simplify the process by handling all the design decisions, from choosing color palettes to selecting furniture.</h6>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          
          <div className="content-card card  ">
          <p className="text-center">
          <h5 className="card-heading">Increased Home Value</h5>

           <TbHomeStats className=" home-icon"/>

          </p>
          <h6 className="text-justify px-4" >Beautifully decorated homes often have higher market values. If you ever decide to sell, your well-decorated interiors can be a significant selling point.</h6>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card  ">
          <p className="text-center">
          <h5 className="card-heading"> Access to Trends</h5>

           <FiTrendingUp className=" home-icon"/>

          </p>
          <h6 className="text-justify px-4" >Interior decorators stay up-to-date with the latest design trends and innovations. They can introduce fresh and innovative ideas that you might not have considered.</h6>
          </div>
       
         
          </div>
          {/* <p className="text-center mt-5"> 
          <Link className="btn naving-btn2" to="/howitwork">Learn More</Link>
</p> */}
        </div>
       </section>
            {/* free consult */}

            <section className="freeconsult" data-aos="fade-up"
                data-aos-duration="2000">
                <div className="  pb-5 pt-5">
                    <div className="mt-5">
                        <h1 className="text-center text-white mt-5">Your Dream Home, One Click Away</h1>
                        <h6 className="text-center text-white mt-3">Schedule a Complimentary Consultation with Our Expert Interior Designers.</h6>
                        <p className="text-center mt-5">
                            <Link to="/contact" onClick={scrollToTop} className="btn naving-btn3 ">Get Started</Link>

                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}