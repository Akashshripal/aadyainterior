import React from "react";
import ourProject2 from "../Img/LIvingcontent2.jpg"
import { Link } from "react-router-dom";
import cardimage1 from "../Img/Livingcontent1.jpg"
// import cardimage2 from "../Img/card-image2.jpg"
// import cardimage3 from "../Img/card-image3.jpg"
import cardimage4 from "../Img/blogcardimg2.jpg"

import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import 'aos/dist/aos.css';
import AOS from "aos";

//icon
import { BsArrowUpRight } from 'react-icons/bs';


import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineChair } from 'react-icons/md';
import { IoPersonAddOutline } from 'react-icons/io5';
import { TbHomeEdit } from 'react-icons/tb';
import { SlTarget } from 'react-icons/sl';
import { TbArrowsShuffle } from 'react-icons/tb';

export default function LivingRoom() {

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
            <section className="Ourproject Homevilla blogs Livingroom">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" data-aos="fade-up"
                                    data-aos-duration="2000" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head blog-head service-head living-head" data-aos="fade-up"
                                    data-aos-duration="2000">Living Room </h1>
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
                            <h3 className="text-dark ">Captivating Living Room Interior Design: Elevate Your Space</h3>
                            <h6 className="text-justify">Your living room is the central hub of your home, where family and friends
                             gather to create lasting memories. Crafting a captivating <span> living room interior design </span> is the art of
                              transforming this space into a harmonious blend of style, comfort, and functionality. Whether you're
                               revamping your existing living area or starting from scratch, our team of expert interior designers
                                is here to help you infuse timeless elegance into every facet.</h6>

                            <h6 className="text-dark text-justify ">Living room design is more than just choosing furniture and decor; it's about creating a welcoming environment that reflects your personality and fosters connections. Here are several reasons why living room interior design is crucial</h6>
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
                <h1 className="text-center mt-5">Understanding the Significance of Living Room Interior Design</h1>

                <div className="row mt-5">

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading"> Visual Appeal</h5>
                                <AiOutlineEye className=" home-icon" />

                            </p>

                            <h6 className="text-justify px-4" >A well-designed living room is visually appealing, making it a place you and your guests are drawn to and eager to spend time in.</h6>
                            <div>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card ">
                            <p className="text-center">
                                <h5 className="card-heading">Comfort and Functionality</h5>

                                <MdOutlineChair className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" > A successful living room design prioritizes comfort and functionality, ensuring that it's a space where you can relax, entertain, and engage in various activities seamlessly.
</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Personalization</h5>

                                <IoPersonAddOutline className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >Your living room should reflect your unique style and preferences. Interior design offers an opportunity to infuse your personal touch into the space.
</h6>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading ">Space Optimization</h5>

                                <TbHomeEdit className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pb-4 pt-1" > Interior designers are skilled at optimizing living room space to make the most of every square foot. This is especially important in smaller homes and apartments.</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">

                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading"> Creating a Focal Point</h5>

                                <SlTarget className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" > A well-designed living room often includes a focal point, such as a fireplace, artwork, or a stunning piece of furniture, that draws attention and adds character to the space.
</h6>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-2 mb-2">
                        <div className="content-card card  ">
                            <p className="text-center">
                                <h5 className="card-heading">Flexibility</h5>

                                <TbArrowsShuffle className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 pt-1 pb-4" >Modern living room designs often prioritize flexibility, with adaptable furniture and layouts that cater to different needs, whether it's family movie night or a formal gathering.</h6>
                        </div>


                    </div>
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
                            <Link to="/contact" onClick={scrollToTop} className="btn naving-btn3 ">Get Started</Link>

                        </p>
                    </div>
                </div>
            </section>
        </>


    )
}