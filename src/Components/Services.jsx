import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import 'aos/dist/aos.css';
import AOS from "aos";
import Navbar  from "./Navbar";

import ourProject2 from "../Img/aadya-interiors-11.jpg"

import cardimage1 from "../Img/Homeimg.jpg"
import cardimage2 from "../Img/RoomImg.jpg"
import cardimage3 from "../Img/kitchen.jpg"
import cardimage4 from "../Img/Apartment.jpg"
import cardimage5 from "../Img/Living-Room.jpg"
import cardimage6 from "../Img/PoojaRoom.jpg"
// import { Link } from "react-router-dom";


export default function Ourproject() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <>
   <Navbar />

            {/* Ourproject-head */}
            
            <div className="leavenav"/>
            <section className="Ourproject">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head project-head1 " data-aos="fade-up"
                                    data-aos-duration="2000">Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* project images */}
            <section className="project-images container">
                <div className="row">
                    <div className="col-lg-6 col-md-6" data-aos="fade-up"
                        data-aos-duration="2000">

                        <div className="flip-card mt-5 ">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage1} className="card-image rounded" alt="" />
                                    <h2 className="">Home & Villa</h2>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="mt-5">Home & Villa </h1>
                                    <p>Decorate Your Living Spaces with Exquisite Interior Decoration</p>
                                    <p className="px-4 text-justify">Your home is more than just a structure; it's a canvas waiting to be 
                                    transformed into a masterpiece. Appartment,Villa and home interior decoration are
                                     the keys to making your living spaces truly enchanting, comfortable, and reflective 
                                     of your unique style. Whether you're considering a full makeover or a subtle refresh,
                                      our expert interior decorators are here to make your dream home or villa a reality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="flip-card mt-5 mb-5">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage4} className="card-image rounded" alt="" />
                                     <h2>Appartment</h2>

                                </div>
                                <div className="flip-card-back">
                                <h1 className="mt-5">Appartment</h1>
                                    <p>Decorate Your Living Spaces with Exquisite Interior Decoration</p>
                                    <p className="px-4 text-justify">Your home is more than just a structure; it's a canvas waiting to be 
                                    transformed into a masterpiece. Appartment,Villa and home interior decoration are
                                     the keys to making your living spaces truly enchanting, comfortable, and reflective 
                                     of your unique style. Whether you're considering a full makeover or a subtle refresh,
                                      our expert interior decorators are here to make your dream home or villa a reality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="flip-card mt-2 mb-5">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage2} className="card-image rounded" alt="" />
                                    <h2 >Room</h2>

                                </div>
                                <div className="flip-card-back">
                                    <h1 className="mt-5">Room</h1>
                                    <p>Decorate Your Living Spaces with Exquisite Interior Decoration</p>
                                    <p className="px-4 text-justify">Your room is your sanctuary—a place of relaxation, self-expression, and comfort.
                                     Modern Room interior design is the key to transforming your space into a stylish, functional, 
                                     and inviting haven. Whether you're planning to revamp your bedroom, living room, or any other 
                                     room in your home, our expert interior designers are here to bring contemporary elegance to every corner.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="flip-card mt-2 mb-5">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage3} className="card-image rounded" alt="" />
                                    <h2 >Kitchen </h2>

                                </div>
                                <div className="flip-card-back">
                                    <h1 className="mt-5">Kitchen </h1>
                                    <p>Kitchen Interior Decoration: Embrace Modern Elegance</p>
                                    <p className="px-4 text-justify">Your kitchen is the heart of your home, where culinary creativity and daily life converge. Modern kitchen interior design is the art of transforming this essential space into a harmonious blend of style, functionality, and innovation. Whether you're aiming to revamp your existing kitchen or create a brand-new culinary haven, our team of expert interior designers is here to help you infuse contemporary elegance into every aspect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="flip-card mt-2 mb-5">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage5} className="card-image rounded" alt="" />
                                    <h1 >Living Room  </h1>

                                </div>
                                <div className="flip-card-back">
                                    <h1 className="mt-5">Living Room  </h1>
                                    <p>Captivating Living Room Interior Design: Elevate Your Space</p>
                                    <p className="px-4 text-justify">Your kitchen is the heart of your home, where culinary creativity
                                     and daily life converge. Modern kitchen interior design is the art 
                                     of transforming this essential space into a harmonious blend of style
                                     , functionality, and innovation. Whether you're aiming to revamp your existing
                                      kitchen or create a brand-new culinary haven, our team of expert interior 
                                      designers is here to help you infuse contemporary elegance into every aspect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="flip-card mt-2 mb-5">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={cardimage6} className="card-image rounded" alt="" />
                                    <h1>Pooja room</h1>

                                </div>
                                <div className="flip-card-back">
                                    <h1 className="mt-2">Pooja room</h1>
                                    <p>Decorate Your Spiritual Space with Pooja Room Interior Design</p>
                                    <p className="px-4 text-justify" >A pooja room, also known as a prayer room or meditation space, holds a special place 
                                    in every home. It's a sacred oasis where you can connect with your spirituality, find inner
                                     peace, and seek solace. Pooja room interior design is the art of creating a serene and harmonious
                                      environment that enhances your spiritual experience while adding an aesthetic dimension to your
                                       home. Whether you're designing a new pooja room or renovating an existing one, our team of expert 
                                       interior designers is here to guide you through the process of infusing spirituality and beauty 
                                       into this sacred space.</p>
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
             <Link to="./contact" className="btn naving-btn3 ">Get Started</Link>
              
                </p>
        </div>
       </div>
       </section>
        </>


    )
}