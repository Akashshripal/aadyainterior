import React from "react";
import ourProject2 from "../Img/PoojaContent1.jpg"
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

export default function PoojaRoom() {
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
            <section className="Ourproject Homevilla blogs Poojaroom">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head blog-head service-head pooja-head" data-aos="fade-up"
                                    data-aos-duration="2000">Pooja Room </h1>
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
                            <h3 className="text-dark ">Decorate Your Spiritual Space with Pooja Room Interior Design</h3>
                            <h6 className="text-justify">A pooja room, also known as a prayer room or meditation 
                            space, holds a special place in every home. It's a sacred oasis where you can connect
                             with your spirituality, find inner peace, and seek solace. <span>Pooja room interior design </span>
                              is the art of creating a serene and harmonious environment that enhances your 
                              spiritual experience while adding an aesthetic dimension to your home. Whether 
                              you're designing a new pooja room or renovating an existing one, our team of expert
                               interior designers is here to guide you through the process of infusing
                                spirituality and beauty into this sacred space.</h6>

                            <h6 className="text-dark text-justify ">A pooja room is more than just a designated area for religious rituals; it's a space that promotes a sense of tranquility and devotion. Here are several reasons why pooja room interior design is of utmost importance</h6>
                        </div>
                        <div className="col-lg-5 col-sm-12  pb-3 ">

                            <img src={cardimage1} className="content-img rounded" data-aos="fade-up"
                                data-aos-duration="2000" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="howitworks mt-5  mb-5 container " data-aos="fade-up"
                data-aos-duration="2000">
                <h1 className="text-center mt-5">The Significance of Pooja Room Interior Design</h1>

                <div className="row mt-5">

                    <div className="col-lg-6 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading"> Spiritual Connection</h5>
                                <PiHandsPrayingLight className=" home-icon" />

                            </p>

                            <h6 className="text-justify px-4 pt-1 pb-4" >A well-designed pooja room creates an atmosphere conducive to spiritual practices, enhancing your connection with the divine.</h6>
                            <div>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6     col-md-6 mt-2 mb-2">
                        <div className="content-card card ">
                            <p className="text-center">
                                <h5 className="card-heading"> Aesthetic Appeal</h5>

                                <PiFlowerLotusLight className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >Pooja room design isn't solely about functionality; it's also about elevating the visual appeal of the space, making it a delightful focal point in your home.

</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Personalization</h5>

                                <GoPersonAdd className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" >Your pooja room should reflect your faith and personal beliefs. Interior design offers an opportunity to customize the space to align with your spiritual inclinations.
</h6>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading ">Peaceful Retreat</h5>

                                <TbMoodSmileBeam className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pb-4 pt-1" > In our busy lives, a pooja room provides a peaceful retreat where you can meditate, pray, or simply find solace away from the chaos of the world.</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">

                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading"> Aesthetic Elegance</h5>

                                <PiFlower className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" >  Modern pooja room designs often incorporate contemporary aesthetics, blending tradition with elegance to create a space that is not only functional but also visually appealing.</h6>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Flexibility</h5>

                                <FiTrendingUp className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >Modern living room designs often prioritize flexibility, with adaptable furniture and layouts that cater to different needs, whether it's family movie night or a formal gathering.</h6>
                        </div>


                    </div> */}
                    {/* <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Execution</h5>

                                <FiTrendingUp className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" >Our team manages every aspect of the project, from procurement to installation. We collaborate closely with trusted craftsmen and contractors to ensure that your kitchen's design vision is executed flawlessly
</h6>
                        </div>


                    </div>
                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Final Unveiling</h5>

                                <FiTrendingUp className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >The moment you've been eagerly awaiting! We unveil your newly designed modern kitchen, and you'll be astounded by the transformation. It's a space that genuinely reflects your style while meeting your practical needs.</h6>
                        </div>


                    </div> */}
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
                            <Link to="/contact" className="btn naving-btn3 " onClick={scrollToTop} >Get Started</Link>

                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}