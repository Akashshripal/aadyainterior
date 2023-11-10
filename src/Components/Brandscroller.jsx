import React from 'react';
import partner1 from "../Img/logo collections/logo1.png"
import partner2 from "../Img/logo collections/logo2.png"
import partner3 from "../Img/logo collections/logo3.jpg"
import partner4 from "../Img/logo collections/logo4.png"
import partner5 from "../Img/logo collections/logo5.png"
import partner6 from "../Img/logo collections/logo6.png"
import partner7 from "../Img/logo collections/logo7.png"
import partner8 from "../Img/logo collections/logo8.png"
import partner9 from "../Img/logo collections/logo9.png"
import partner10 from "../Img/logo collections/logo10.png"

// import './BrandScroller.css'; // Import the CSS styles

const BrandScroller = () => {
  // Sample brand data
  const brands = [
    <div className='brand-card card ' >
   <img className='circle' src={partner1} alt="" />
    </div>
    ,
    <div className='brand-card card ' >   
   <img className='circle' src={partner2} alt="" />
    </div>,
     <div className='brand-card card ' >
 
    <img className='circle' src={partner3} alt="" />
     </div>,
     <div className='brand-card card ' >
    
    <img className='circle' src={partner4} alt="" />
     </div>,
     <div className='brand-card card ' >
    
     <img className='circle' src={partner5} alt="" />
      </div>,
      <div className='brand-card card ' >
    
      <img className='circle' src={partner6} alt="" />
       </div>,
       <div className='brand-card card' >
    
       <img className='circle'  src={partner7} alt="" />
        </div>,
        <div className='brand-card card' >
    
        <img className='circle'  src={partner8} alt="" />
         </div>,
         <div className='brand-card card' >
    
         <img className='circle'  src={partner9} alt="" />
          </div>,
          <div className='brand-card card' >
    
          <img className='circle'  src={partner10} alt="" />
           </div>



  ];

  return (
    <div className="brand-scroller-container our-brands mt-5">
        <div className='text-center text-white mt-5 mb-5'>
        <h1>We have worked at</h1>

        </div>

      <div className="brand-scroller">
        {/* Brand list */}
        <div className="brand-list container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item ">
              {/* Render the brand logo or name */}
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandScroller;
