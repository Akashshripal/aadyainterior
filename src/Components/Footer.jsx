import React,{useState} from "react";
import  {Link}  from "react-router-dom";
import { AiFillFacebook } from 'react-icons/ai';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';



export default function Footer(){

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
    return(
        <>
        <section className="footer">
            <div className="container">
             <div className="row pt-5 pb-3">
                <div className="col-lg-4 col-md-6">
                    <h2>Aadya interiors</h2>
                    <p className="text-justify">
                    Aadya Interiors, the premier interior designer in Bangalore, is committed to excellence in design. They bring a distinctive touch to every project, recognizing that each wall holds its unique narrative. 
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 text-start footer-item mt-1">
                    <ul className="footer-list">
                    <h4 className="mb-3">Company</h4>

                    <li> <Link to="/about"  onClick={scrollToTop}  className="footer-hyperlnk1">About Us</Link></li>
                    <li> <Link to="/howitwork" onClick={scrollToTop} className="footer-hyperlnk1" >How it Works</Link></li>
                    <li> <Link to="/careers" onClick={scrollToTop}  className="footer-hyperlnk1">Careers</Link></li>
                    <li> <Link to="/contact" onClick={scrollToTop}  className="footer-hyperlnk1">Contact Us</Link></li>
                    <li> <Link to="/referfriend" onClick={scrollToTop} className="footer-hyperlnk1" >Refer a Friend</Link></li>
                    <li> <Link to="/testimonial" onClick={scrollToTop}  className="footer-hyperlnk1">Testimonial</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 text-start footer-item mt-1">
                    <ul className="footer-list">
                    <h4 className="mb-3">Get in touch</h4>

               
                    <li> <Link to="/FAQs" onClick={scrollToTop}  className="footer-hyperlnk1">FAQ's </Link> </li>
                    <li><a href="tel:+916361814490"  className="footer-hyperlnk1">63618 14490</a> &nbsp; ,  &nbsp; <a href="tel:+916361014059"  className="footer-hyperlnk1">636 101 4059</a>
</li>
                    <li><a href="mailto:info@aadyainteriorsdesign.com" className="footer-hyperlnk1">
                
                info@aadyainteriorsdesign.com
                    </a></li>
                    
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 text-start footer-item mt-1">
                    <ul className="footer-list"> 
                    <h4 className="mb-3">Follow us</h4>

                    <li><a href="https://www.facebook.com/profile.php?id=61551622019102" rel="noreferrer"  target="_blank" className="footer-hyperlnk1"><AiFillFacebook/> &nbsp;Facebook</a></li>
                    <li><a href="https://www.instagram.com/aadyainteriorsdesign/" rel="noreferrer"  target="_blank" className="footer-hyperlnk1"><BiLogoInstagramAlt/>&nbsp;Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/aadyainteriorsdesign" rel="noreferrer"  target="_blank" className="footer-hyperlnk1"><BsLinkedin/>&nbsp;LinkedIn</a></li>
                    <li><a href="https://www.youtube.com/channel/UCFrPMq_t-QbhAPb0pfLm2xg" rel="noreferrer"  target="_blank" className="footer-hyperlnk1"><BsYoutube/>&nbsp;Youtube</a></li>
                    <li><a href="https://twitter.com/aadyainteriors"  rel="noreferrer"  target="_blank" className="footer-hyperlnk1"  ><FaTwitterSquare/>&nbsp;Twitter</a></li>
                   
                    </ul>
                </div>
             </div>
             </div>
             <hr />
             <div >
                <div className="pb-2">
                    <h6 className="text-center">© 2010-2023, All Rights Reserved | Developed by <a href="https://webuniversals.co.in/" className="footer-hyperlnk1" rel="noreferrer" target="_blank"> Webuniversals</a> </h6>
                </div>
             </div>
        </section>
        </>
    )
}