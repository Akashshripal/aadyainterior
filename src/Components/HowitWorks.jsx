
import React,{useState} from "react";
import { Link } from "react-router-dom";
import ourProject2 from "../Img/howwrok1.jpg"
import HowitWorksimg1 from "../Img/howitworkImg1.jpg" 
import HowitWorksimg2 from "../Img/howitworkImg2.jpg" 
import HowitWorksimg3 from "../Img/howitworkImg3.jpg" 
import HowitWorksimg4 from "../Img/howitworkImg4.jpg" 
import HowitWorksimg5 from "../Img/howitworkImg5.jpg" 
import HowitWorksimg6 from "../Img/howitworkImg6.jpg" 
import Navbar from "./Navbar";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";

export default function HowitWorks() {

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

            {/* how it works-head */}
            <section className="Ourproject howitworks1">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" alt="" data-aos="fade-up"
     data-aos-duration="2000"/>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head project-head1 howitwork-head mt-5" data-aos="fade-up"
     data-aos-duration="2000">How it Works</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* how it works */}

            <section className="howWorks container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">

                        <img src={HowitWorksimg1} className="card-image1" alt="" data-aos="fade-up"
     data-aos-duration="2000"  />
                     <h3 >1</h3>                   
                        <h4>Reserve a Complimentary
                         Design Consultation</h4>
                    </div>
                    <div className="col-lg-6 col-md-6 ">

                        <img src={HowitWorksimg2} className="card-image1" alt="" data-aos="fade-up"
     data-aos-duration="2000" />
                    <h3 >2</h3>
                        <h4>Discover your Personal Designer</h4>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                    <img src={HowitWorksimg3} className="card-image1 mt-5" alt="" data-aos="fade-up"
     data-aos-duration="2000" />

                        <h3>3</h3>
                        <h4>Complete your Home Design</h4>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                    <img src={HowitWorksimg4} className="card-image1 mt-5" alt="" data-aos="fade-up"
     data-aos-duration="2000" />

                        <h3>4</h3>
                        <h4>Construction activities commence
at the location.    </h4>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                    <img src={HowitWorksimg5} className="card-image1 mt-5" alt="" data-aos="fade-up"
     data-aos-duration="2000" />

                        <h3>5</h3>
                        <h4>Execution & Simple Installation </h4>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                    <img src={HowitWorksimg6} className="card-image card-image1 mt-5" alt="" data-aos="fade-up"
     data-aos-duration="2000" />

                        <h3>6</h3>
                        <h4>Settle in!</h4>
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
             <Link to="/contact" className="btn naving-btn3 "  onClick={scrollToTop}>Get Started</Link>
              
                </p>
        </div>
       </div>
       </section>

        </>


    )
}