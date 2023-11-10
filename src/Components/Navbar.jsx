import React,{useEffect,useState } from "react";
import  {NavLink}  from "react-router-dom"; 
import logo from "../Img/aadhya logo-002-01.png"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar(){

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
    AOS.init();
    AOS.refresh();
  }, []);
    return(
      
        <>        
<nav className="navbar naving navbar-expand-lg navbar-light"  data-aos="fade-down" data-aos-duration="1000">
  <div className="container" >
    {/* <a className="navbar-brand" href="#">Aadya Interiors</a> */}
    <img className="navbar-brand" style={{height:"60px"}} src={logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  onClick={scrollToTop} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={scrollToTop} to="/about">About Us</NavLink>
        </li>
        <div className="dropdown nav-item">
          <NavLink  className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" >Services</NavLink>
        <ul class="dropdown-menu">
        <li><NavLink className="dropdown-item" onClick={scrollToTop} to="/HomeAndVilla">Home & Villa</NavLink></li>
        <li><NavLink className="dropdown-item" onClick={scrollToTop} to="/Rooms">Rooms</NavLink></li>
        <li><NavLink className="dropdown-item" onClick={scrollToTop} to="/Kitchens">Kitchen</NavLink></li>
        <li><NavLink className="dropdown-item" onClick={scrollToTop} to="/LivingRoom">Living Room</NavLink></li>
        <li><NavLink className="dropdown-item" onClick={scrollToTop} to="/PoojaRoom">Pooja Room</NavLink></li>
      </ul>
      </div>
      {/* <div className="dropdown nav-item">
      <a  className=" nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/"> 
      Dropdown 
    </a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/">Link 1</a></li>
      <li><a className="dropdown-item" href="/">Link 2</a></li>
      <li><a className="dropdown-item" href="/">Link 3</a></li>
      <li><a className="dropdown-item-text" href="/">Text Link</a></li>
      <li><span className="dropdown-item-text">Just Text</span></li>
    </ul>
    </div> */}

        <li className="nav-item">
          <a className="nav-link" onClick={scrollToTop} href="https://aadyainteriorsdesign.com/Blog/">Blogs</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={scrollToTop} to="/howitwork">How it Works</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={scrollToTop} to="/Contact">Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <a  href="tel:6361814490" className="btn nav-button naving-btn " type="submit">CONSULT ONLINE NOW</a> 
      </form>
   
    </div>
   
  </div>
</nav>
        </>
    )
}