import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from "aos";
import Navbar from "./Navbar";


import header1 from "../Img/headerimg1.jpg"
import header2 from "../Img/headerimg2.jpg"
import header3 from "../Img/headerimg3.jpg"
import header4 from "../Img/headerimg4.jpg"
import header5 from "../Img/headerimg5.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoHomeOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { LiaToolsSolid } from 'react-icons/lia';
import { PiCubeTransparentLight } from 'react-icons/pi';
import {studiesswiper} from '../Components/sliderProps';
import {VscGraph} from 'react-icons/vsc';
import {GiTakeMyMoney} from 'react-icons/gi';
import {GiThermometerScale} from 'react-icons/gi';
import {BsPersonCheck} from 'react-icons/bs';

//project img

import project1 from "../Img/projectimg1.jpg"
import project2 from "../Img/projectimg2.jpg"
import project3 from "../Img/projectimg3.jpg"
import project4 from "../Img/projectimg4.jpg"
import project5 from "../Img/projectimg5.jpg"

//news img

// import news1 from "../Img/news1.jpg"
// import news2 from "../Img/news2.jpg"
// import news3 from "../Img/news3.jpg"




// how it work
import { BsJournalBookmark } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { TbRulerMeasure } from 'react-icons/tb';
import { RiInstallLine } from 'react-icons/ri';
import { BiDoorOpen } from 'react-icons/bi';





import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import BrandScroller from "./Brandscroller";

export default function Home(){

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
    return(
        <>
   {/* header */}
   <Navbar/>
   
      <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={header1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={header2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={header3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={header4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={header5} alt="" /></SwiperSlide>
       
      </Swiper>
   
      </section>
    {/* header2 */}
      <section className="header2">
        <div className="container p-5">
       <div className="row pt-3 pb-5 d-flex justify-content-between align-items-center">
          <div className="col-lg-6 col-sm-12 header2-info"  data-aos="fade-up"
     data-aos-duration="2000">
            <h1 className="text-uppercase">Best Interior designer in Bangalore</h1>
            <p>Are you ready to transform your space into a masterpiece?.</p>
          </div>
          <div className="col-lg-5 col-sm-12  pb-3 ">
          <form className="form rounded "  data-aos="fade-up"
     data-aos-duration="2000">
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
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Property Name"/>
              </div>
              <p className="text-center">
              <button type=" submit" class="btn naving-btn1">Submit</button>
              </p>
              
          </form>
          </div>
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
        
        {/* our project */}

       <section className="project container-fluid"  data-aos="fade-up"
     data-aos-duration="2000">
          <div className="row">
            <div className="col-lg-4 col-sm-12 project-info pt-5 ">
              <h3 className="text-white">Our Project</h3>
              {/* <br /> */}

              <p className="text-white text-justify" >Look no further because you've just found the best interior designer in Bangalore. We are your trusted partner in creating interiors that redefine luxury, functionality, and aesthetic appeal.</p>
              {/* <br /> */}
              
              <p className="text-gray text-justify">With a proven track record of excellence, our team of highly skilled designers brings innovation and creativity to every project. From stunning residential homes to dynamic commercial spaces, we specialize in crafting interiors that not only meet but exceed your expectations</p>
              {/* <br/> */}
              <p className="text-white text-justify"> Our approach to interior design is rooted in a deep understanding of your unique needs and preferences. We believe that your space should be a reflection of your personality and lifestyle. Whether you have a clear vision in mind or need assistance in discovering your design style, our experts are here to guide you every step of the way.
              </p>
                <p className="">
            <a href="/" className="btn naving-btn2">TALK TO OUR INTERIOR DESIGNER</a>
          </p> 
            </div>
            
            <div className="col-lg-8 col-sm-12 d-flex align-items-center">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper d-flex align-items-center"
        // {...studiesswiper}

      >
        <SwiperSlide><img src={project1} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={project2} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={project3} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={project4} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={project5} alt=""  /></SwiperSlide>
      </Swiper>
            </div>
          </div>
       </section>

       {/* how it works */}
       {/* <section className="howitworks mt-5  mb-5 container "  data-aos="fade-up"
     data-aos-duration="2000">
       <h1 className="text-center mt-5">How it Works?</h1>

        <div className="row mt-5">

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4 ">
          <p className="text-center">
           <BsJournalBookmark className=" home-icon"/>

          </p>

          <h4 className="text-center" >Reserve a Complimentary<br /> Design Consultation</h4>
          <div>

          </div>
          </div>

          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <BsPeople className=" home-icon"/>

          </p>
          <h4 className="text-center" >Discover your Personal <br /> Designer</h4>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <HiOutlineHomeModern  className=" home-icon"/>

          </p>
          <h4 className="text-center" >Construction activities commence
          <br />at the location</h4>  
          </div>
          </div>

     

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <TbRulerMeasure className=" home-icon"/>

          </p>
          <h4 className="text-center" >Civil work begins <br /> on site</h4>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <RiInstallLine className=" home-icon"/>

          </p>
          <h4 className="text-center" >Execution &  Simple <br /> Installation</h4>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <BiDoorOpen className=" home-icon"/>

          </p>
          <h4 className="text-center" >Settle <br />in!</h4>
          </div>
       
         
          </div>
          <p className="text-center mt-5"> 
          <Link className="btn naving-btn2" to="/howitwork">Learn More</Link>
</p>
        </div>
       </section> */}

{/* Our brands */}
      
       <BrandScroller/>
       <section className="howitworks mt-5  mb-5 container "  data-aos="fade-up"
     data-aos-duration="2000">
       <h1 className="text-center mt-5">How it Works?</h1>

        <div className="row mt-5">

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4 ">
          <p className="text-center">
           <BsJournalBookmark className=" home-icon"/>

          </p>

          <h4 className="text-center" >Reserve a Complimentary<br /> Design Consultation</h4>
          <div>

          </div>
          </div>

          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <BsPeople className=" home-icon"/>

          </p>
          <h4 className="text-center" >Discover your Personal <br /> Designer</h4>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <HiOutlineHomeModern  className=" home-icon"/>

          </p>
          <h4 className="text-center" >Construction activities commence
          <br />at the location</h4>  
          </div>
          </div>

     

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <TbRulerMeasure className=" home-icon"/>

          </p>
          <h4 className="text-center" >Civil work begins <br /> on site</h4>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <RiInstallLine className=" home-icon"/>

          </p>
          <h4 className="text-center" >Execution &  Simple <br /> Installation</h4>
          </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2 mb-2">
          <div className="content-card card pt-4 pb-4">
          <p className="text-center">
           <BiDoorOpen className=" home-icon"/>

          </p>
          <h4 className="text-center" >Settle <br />in!</h4>
          </div>
       
         
          </div>
          <p className="text-center mt-5"> 
          <Link className="btn naving-btn2" onClick={scrollToTop} to="/howitwork">Learn More</Link>
</p>
        </div>
       </section>
       {/* review */}
       {/* <section className="review container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-lg-10  mt-5 mb-5" data-aos="fade-up"
     data-aos-duration="2000">
                <h2>We'll let our clients do the talking</h2>
                <h5>Here's what they have to say</h5>
              </div>
              <div className="col-lg-2 mt-5 mb-5"  data-aos="fade-up"
     data-aos-duration="2000">
          <p className="text-center "> <a href="/" className="btn naving-btn2 ">Learn More</a>
                </p>
              </div>
            </div>
              <div className="row mb-5">
               
                <div className="col-lg-4">
                  <div className="card p-3">
                    <div className="card-content card-review">
                    <iframe  style={{width:"100%"}}  src="https://www.youtube.com/embed/pkMiuF039Yo"  data-aos="fade-up"
     data-aos-duration="2000">
                   </iframe>
                      <p>Best Interior Designers Customer Review | Modular Home Design in Bangalore</p>
                      <h3>
                        Abhinash Ghoshal</h3> 
                      <p>Modular Home in Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="card p-3">
                    <div className="card-content card-review">
                    <iframe  style={{width:"100%"}}  src="https://www.youtube.com/embed/VCdtoP2k1Kc"  data-aos="fade-up"
     data-aos-duration="2000">
                   </iframe>
                      <p>Best Interior Designers Customer Review | Modular Home Design in Bangalore</p>
                      <h3>Mr & Mrs Hussain</h3> 
                      <p>Modular Home in Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="card p-3">
                    <div className="card-content card-review">
                    <iframe  style={{width:"100%"}}  src="https://www.youtube.com/embed/fujMmEGQAsQ"  data-aos="fade-up"
     data-aos-duration="2000">
                   </iframe>
                      <p>Best Interior Designers Customer Review | Modular Home Design in Bangalore</p>
                      <h3>
                        Mrs Niti & Prasanth</h3> 
                      <p>Modular Home in Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
       </section> */}
  
  {/* News  */}
  {/* <section className="news container"  data-aos="fade-up"
     data-aos-duration="2000">
      <div className="row ">
        <h1 className="text-center">In the News</h1>
        <div className="col-lg-4 mt-5 mb-5">
          <div className="card">
          <img src=""  className="news-img" alt="News image1" />

          </div>
        </div>
        <div className="col-lg-4 mt-5 mb-5">
        <div className="card">
          <img src="" className="news-img" alt="News image2" />

          </div>
        </div>
        <div className="col-lg-4 mt-5 mb-5">
        <div className="card">
          <img src="" className="news-img" alt="News image3" />

          </div>

        </div>
      </div>
  </section> */}




       {/* free consult */}

       <section className="freeconsult"  data-aos="fade-up"
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