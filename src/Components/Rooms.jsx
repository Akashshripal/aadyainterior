import React from "react";
import ourProject2 from "../Img/Roomcontent1.jpg"
import { Link } from "react-router-dom";
import cardimage1 from "../Img/RoomConten2.jpg"
// import cardimage2 from "../Img/card-image2.jpg"
// import cardimage3 from "../Img/card-image3.jpg"
import cardimage4 from "../Img/blogcardimg2.jpg"

import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";

//icon
import { BsArrowUpRight } from 'react-icons/bs';


import { BsPeople } from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { PiFileMagnifyingGlass } from 'react-icons/pi';
import { LuSofa } from 'react-icons/lu';
import { PiLightbulbFilamentLight } from 'react-icons/pi';
import { BsArrowRepeat } from 'react-icons/bs';
import { PiListMagnifyingGlass } from 'react-icons/pi';

export default function Rooms() {
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
            <section className="Ourproject Homevilla blogs Rooms">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head blog-head service-head room-head " data-aos="fade-up"
                                    data-aos-duration="2000">Rooms </h1>
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
                            <h3 className="text-dark ">Decore Your Space with Modern Room Interior Design</h3>
                            <h6 className="text-justify">Your room is your sanctuary—a place of relaxation, self-expression, 
                            and comfort. Modern <span> Room interior design </span> is the key to transforming your space into a stylish,
                             functional, and inviting haven. Whether you're planning to revamp your bedroom, living room, 
                             or any other room in your home, our expert interior designers are here to bring contemporary 
                             elegance to every corner.</h6>

                            <h6 className="text-dark text-justify ">Modern interior design isn't just about following the latest
                             trends; it's about creating spaces that align with your lifestyle, values, and aesthetic preferences. 
                            Here are some reasons why modern room interior design is essential:</h6>
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
                <h1 className="text-center mt-5">Our Approach to Modern Room Interior Design</h1>

                <div className="row mt-5">

                    <div className="col-lg-6 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Consultation</h5>
                                <BsPeople className=" home-icon" />

                            </p>

                            <h6 className="text-justify px-4" >We begin with a thorough consultation to understand your vision, needs, and lifestyle. This initial step is crucial for tailoring our design to your specific requirements.</h6>
                            <div>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6 col-md-6 mt-2 mb-2">
                        <div className="content-card card ">
                            <p className="text-center">
                                <h5 className="card-heading">Design Concept</h5>

                                <MdOutlineDesignServices className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >Based on your input, we develop a design concept that aligns with your vision. We consider color schemes, furniture choices, lighting, and decor elements to create a cohesive and aesthetically pleasing design.</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Space Planning</h5>

                                <HiOutlinePencilAlt className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >Our experts optimize the use of space to ensure efficient flow and functionality. Whether it's a compact city apartment or a spacious living room, we make every square foot count.</h6>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading "> Material Selection</h5>

                                <PiFileMagnifyingGlass className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pb-4 pt-1" >We carefully select materials, textures, and finishes to complement the modern design theme, ensuring a seamless blend of style and functionality.</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">

                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading"> Furniture and Decor</h5>

                                <LuSofa className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" >We curate a selection of modern furniture and decor that suits your room's design, enhancing its overall aesthetic while maintaining comfort and functionality.</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Lighting Design</h5>

                                <PiLightbulbFilamentLight className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" > Proper lighting is crucial in modern room interior design. We create lighting plans that enhance the ambiance and functionality of your space, integrating smart lighting solutions where needed.</h6>
                        </div>


                    </div>
                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Execution</h5>

                                <BsArrowRepeat className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" >Our team manages all aspects of the project, from procurement to installation. We work closely with trusted craftsmen and contractors to ensure the design is executed flawlessly.
</h6>
                        </div>


                    </div>
                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Final Reveal</h5>

                                <PiListMagnifyingGlass className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >The moment you've been waiting for! We unveil your newly designed room, and you'll be amazed at the transformation. It's a space that truly reflects your style and meets your practical needs.</h6>
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
                            <Link to="/contact" className="btn naving-btn3 " onClick={scrollToTop}>Get Started</Link>

                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}