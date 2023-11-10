import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
// import BrandScroller from "./Brandscroller";
import { Swiper, SwiperSlide } from 'swiper/react';
// import {studiesswiper} from '../Components/sliderProps';
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Navbar from "./Navbar";


import 'aos/dist/aos.css';
import AOS from "aos";

import about1 from "../Img/blogImg.jpg"
import about2 from "../Img/Livingcontent-bg.jpg"
import about3 from "../Img/poojaContent-bg.jpg"
import team1 from '../Img/home-contentimg.jpg'
import team2 from '../Img/Livingcontent1.jpg'
import team3 from '../Img/LIvingcontent2.jpg'


// import employee1 from "../Img/employee1.jpg"
// import employee2 from "../Img/employee2.jpg"
// import employee3 from "../Img/employee3.jpg"
// import employee4 from "../Img/employee4.jpg"


import { AiOutlineEye } from 'react-icons/ai';
import { MdOutlineChair } from 'react-icons/md';
import { IoPersonAddOutline } from 'react-icons/io5';
import { TbHomeEdit } from 'react-icons/tb';
import { SlTarget } from 'react-icons/sl';
import { TbArrowsShuffle } from 'react-icons/tb';


export default function About() {

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

      {/* about */}
      <section>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper myswiper2"
          autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        >
          <SwiperSlide><img src={about1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={about2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={about3} alt="" /></SwiperSlide>
          {/* <SwiperSlide><img src={header4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={header5} alt="" /></SwiperSlide> */}

        </Swiper>
      </section>
      <section className="about container">
        <div className="row mt-3 mb-5 d-flex  align-items-center">
          <div className="col-lg-7 col-md-6 mt-3 ">
            <h2>Welcome to Aadya Interiors</h2>
            <h6> your trusted partner for end-to-end solutions in home
              and showroom interiors. Based in the vibrant city of Bengaluru, we extend our services
              across the length and breadth of India. Our journey began in December 2017 under the name
              NCPA Wood Design, and we officially registered as Aadya Interiors in 2020. Since then,
              we have been dedicated to transforming your dreams into tangible, exquisite spaces.</h6>
          </div>
          <div className="col-lg-5 col-md-6 mt-4" data-aos=" fade-up"
            data-aos-duration="2000">
            <img src={team1} className="team-img rounded" alt="" data-aos="fade-up"
              data-aos-duration="2000" />
          </div>
        </div>
        <div className="row mt-4 mb-5 d-flex  align-items-center">
          <div className="col-lg-5 col-md-6 mt-3">
            <img src={team2} className="team-img rounded" alt="" data-aos="fade-up"
              data-aos-duration="2000" />
          </div>
          <div className="col-lg-7 col-md-6 mt-2 ">
            <h2>Our Story</h2>
            <h6>Aadya Interiors was born out of a passion for design and a commitment to turning innovative
             ideas into reality. Our founders envisioned a company that could take any project, no matter 
             how complex, and convert it into a physical form that would not only meet but exceed
              expectations. This unwavering dedication to our craft has been the driving force behind
               our success.
              <br />
              
            </h6>
          </div>
          
        </div>
        <div className="row mt-3 mb-5 d-flex  align-items-center">
          <div className="col-lg-7 col-md-6 mt-3 ">
            <h2>Our Approach</h2>
            <h6>At Aadya Interiors, we believe that creating exceptional interiors is a seamless process. 
            Our approach is refreshingly simple: just call us, meet with our talented team, and discuss your 
            vision. From there, we take care of everything else. Our goal is to strike the perfect balance 
            between your vision and our expertise, resulting in spaces that are not only aesthetically
             pleasing but also functional and practical.</h6>
          </div>
          <div className="col-lg-5 col-md-6 mt-4" data-aos=" fade-up"
            data-aos-duration="2000">
            <img src={team3} className="team-img rounded" alt="" data-aos="fade-up"
              data-aos-duration="2000" />
          </div>
        </div>
        <section className="howitworks mt-5  mb-5 container " data-aos="fade-up"
                data-aos-duration="2000">
                <h1 className="text-center mt-5">Our Values</h1>

                <div className="row mt-5">

                    <div className="col-lg-3 col-md-6 mt-2 mb-2">
                        <div className="content-card card-items card  ">
                            <p className="text-center">
                                <h5 className="card-heading pt-3"> Execution</h5>
                                <AiOutlineEye className=" home-icon" />

                            </p>

                            <h6 className="text-justify px-4 " >We pride ourselves on our ability to execute projects flawlessly. From concept to completion, we meticulously plan and manage every aspect of the project to ensure it is delivered on time and within budget.</h6>
                            <div>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 mt-2 mb-2">
                        <div className="content-card card-items card ">
                            <p className="text-center">
                                <h5 className="card-heading pt-3">Trust</h5>

                                <MdOutlineChair className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" >Trust is the foundation of our business. We understand that you are entrusting us with your vision, and we take that responsibility seriously. Our transparent communication and commitment to delivering on our promises are what make us a trusted partner.
</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-2 mb-2">
                        <div className="content-card card-items card  ">
                            <p className="text-center">
                                <h5 className="card-heading pt-3">Quality</h5>

                                <IoPersonAddOutline className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4 " >Quality is at the heart of everything we do. We source the finest materials, work with skilled craftsmen, and pay attention to the smallest details to ensure the highest quality in every project we undertake.</h6>
                        </div>
                    </div>



                    <div className="col-lg-3 col-md-6 mt-2 mb-2">
                        <div className="content-card card-items card  ">
                            <p className="text-center">
                                <h5 className="card-heading pt-3 ">After-Work Service</h5>

                                <TbHomeEdit className=" home-icon" />

                            </p>
                            <h6 className="text-justify px-4" > Our dedication to our clients doesn't end when the project is completed. We offer unparalleled after-work service, standing by your side for up to 12 years to address any concerns, make adjustments, and ensure your satisfaction long after the project is finished.</h6>
                        </div>
                    </div>

                 
                </div>
            </section>        
        {/* <div className="row mt-5 mb-5  about-cards" data-aos="fade-up"
            data-aos-duration="2000">
            <div className="col-lg-3">

              <div className="card1">
                <div className="img-container">
                  <img src={employee1} alt="" />
                </div>
                <div className="card-details">
                  <h2>Business Manager</h2>
                  <h6>
                    Arihant, an experienced & effective Business Development Manager brings
                    valuable industry experience, passion for management, analytical thinking,
                    leadership, & relationship-building skills.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card1">
                <div className="img-container">
                  <img src={employee2} alt="" />
                </div>
                <div className="card-details">
                  <h2>Design Head</h2>
                  <h6>
                    Meenhas is a cheerful and compassionate team member who enjoys challenges.
                    She's skilled at designing vibrant and creative spaces, handling clients,
                    and fulfilling their requirements.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card1">
                <div className="img-container">
                  <img src={employee3} alt="" />
                </div>
                <div className="card-details">
                  <h2>Relation<br />ship Manager</h2>
                  <h6>
                    Prem is an ambitious, experienced and skilled professional who strives for design perfection. He understands design and execution needs and excels in client relationships.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card1">
                <div className="img-container">
                  <img src={employee4} alt="" />
                </div>
                <div className="card-details">
                  <h2>Interior designer</h2>
                  <h6>
                    Experienced and passionate Designer with unique style and attention to detail.
                    Creates beautiful and functional spaces for residential and commercial projects.
                  </h6>
                </div>
              </div>
            </div>
            
          </div> */}
      </section>

      {/* free consult */}
      <section className="freeconsult " data-aos="fade-up"
        data-aos-duration="2000">
        <div className=" mt-5 pb-5 pt-5">
          <div className="mt-5">
            <h1 className="text-center text-white mt-5">Your dream home is just a click away</h1>
            <h6 className="text-center text-white mt-3">Book a free consultation with our expert interior designers.</h6>
            <p className="text-center mt-5"> <Link to="/contact" onClick={scrollToTop} className="btn naving-btn3 ">Get Started</Link>


            </p>
          </div>
        </div>
      </section>

    </>


  )
}