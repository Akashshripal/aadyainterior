

import React from "react";
import { useState , useEffect } from "react";
import ourProject2 from "../Img/Referfriend2.jpg"
import { IoHomeOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { LiaToolsSolid } from 'react-icons/lia';
import { PiCubeTransparentLight } from 'react-icons/pi';
import {VscGraph} from 'react-icons/vsc';
import {GiTakeMyMoney} from 'react-icons/gi';
import {GiThermometerScale} from 'react-icons/gi';
import {BsPersonCheck} from 'react-icons/bs';
import { Link } from "react-router-dom";

import 'aos/dist/aos.css';
import AOS from "aos";
import Navbar from "./Navbar";

export default function ReferFriend() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 1500) {
        setNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 0.005); // Change the interval time here (in milliseconds)

    return () => clearInterval(interval);
  }, [number]);

  useEffect(()=>{

    AOS.init({duration:2000})
},[])

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
    return (
        <>
        <Navbar/>
            {/* ReferFriend  */}
            <section className="Ourproject ReferFriend">
                <div className="container-fluid">
                    <div className="Ourproject-head">
                        <div className="row ">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <img src={ourProject2} className="Ourproject-img rounded" alt="" data-aos="fade-up"
     data-aos-duration="2000" />
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-white project-head project-head1 referfriend-head mt-5" data-aos="fade-up"
     data-aos-duration="2000">Refer a Friend</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Refer-friend info */}
            <section className="referfriend-info">
        <div className="container-fluid p-5">
       <div className="row pt-3 pb-5">
          <div className="col-lg-6 col-sm-12 text-start ">
            <h1>Terms and Conditions</h1>
            <p>Refer and earn ₹ 15,000 every time your friends try Aadya interiors</p>
            <ul>
                <ol>
               1. You can earn a referral bonus of either Rs. 10,000 or home decor services worth Rs. 15,000.
                </ol>
                <ol>2. Referrals can be made to multiple people, but not the same person twice.</ol>
                <ol>3. Your payment will be processed as soon as any referred person makes a payment of 50% of the total order value.</ol>
                <ol>4. Your payment will be processed directly to the account linked with your profile.</ol>
                <ol>5. Minimum value of referred order should be Rs. 4 Lacs.</ol>
                <ol>6. Existing Aadya interiors customers are not eligible for the referral scheme</ol>
                <ol>7. Referral bonus cannot be combined or adjusted against any existing payment.</ol>
                <ol>8. Aadya interiors reserves the right to end any or all the offers at its sole discretion without any prior notice.</ol>
                <ol>9. Aadya interiors reserves the right to deny any suspected fraud case.Aadya interiors reserves the right to deny any suspected fraud case.</ol>
            </ul>
        
          </div>
          <div className="col-lg-5 col-sm-12 pt-2  pb-2">
          <form className="form rounded form-refer " data-aos="fade-up"
     data-aos-duration="2000">
                <h2 className="text-center text-white mb-3">Invite your friend</h2>
                <div class="mb-3 ">
                {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name*"/>
              </div>
              <div class="mb-3 ">
                {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Email*"/>
              </div>
              <div class="mb-3 ">
                {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Friend's Name*"/>
              </div>
              <div class="mb-3 ">
                {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Friend's Email ID*"/>
              </div>
              <div class="mb-3 ">
                {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Your Friend's Phone Number*"/>
              </div>
              <p className="text-center">
              <button type=" submit" class="btn naving-btn1">Submit</button>
              </p>
              
          </form>
          </div>
       </div>
       </div>
      </section>
         
      <section className="freeconsult careers-text Referfriend-text">
                <div className=" pb-5 pt-2">
                    <div className="mt-5">
                        <h1 className="text-center text-white mt-5" data-aos="fade-up"
     data-aos-duration="2000">REFER AND EARN</h1>
                        <h6 className="text-center text-white mt-3">Recommend Aadya interiors to earn up to</h6>
                        <h1 className="text-center text-white" data-aos="fade-up"
     data-aos-duration="2000">Rs. {number}0</h1>
                        <p className="text-center text-white">YOU ARE JUST ONE CLICK AWAY FROM GETTING YOUR DREAMS COME TRUE</p>
                        <p className="text-center mt-3">
                            
                             <a href="/" className="btn naving-btn3 ">Get Our Experts Suggestion</a>
                        </p>
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
        </>


    )
}