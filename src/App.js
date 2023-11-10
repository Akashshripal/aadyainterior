import './style.css';
import 'animate.css';
import {useEffect} from "react";

import 'aos/dist/aos.css';
import AOS from "aos";


// import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services';
// import Blogs from './Components/Blogs';
import HowitWorks from './Components/HowitWorks';
import Contact from './Components/Contact';
import Careers from './Components/Careers';
import Testimonial from './Components/Testimonial';
import ReferFriend from './Components/ReferFriend';
import HomeAndVilla from './Components/HomeAndVilla';
import Rooms from './Components/Rooms';
import Kitchens from './Components/Kitchens';
import LivingRoom from "./Components/LivingRoom"
import PoojaRoom from './Components/PoojaRoom';
import FAQs from './Components/FAQs';

import {Routes, Route} from 'react-router-dom';
function App() {
  useEffect(()=>{

    AOS.init({duration:2000})
},[])

  return (

    <>
    {/* <Navbar/> */}
     <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/HomeAndVilla" element={<HomeAndVilla/>} />
        <Route exact path="/Rooms" element={<Rooms/>} />
        <Route exact path="/PoojaRoom" element={<PoojaRoom/>} />
        <Route exact path="/Kitchens" element={<Kitchens/>} />
        <Route exact path="/LivingRoom" element={<LivingRoom/>} />
        {/* <Route exact path="/blogs" element={<Blogs/>} /> */}
        <Route exact path="/howitwork" element={<HowitWorks/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/careers" element={<Careers/>} />
        <Route exact path="/testimonial" element={<Testimonial/>} />
        <Route exact path="/referfriend" element={<ReferFriend/>} />
        <Route exact path="/FAQs" element={<FAQs/>} />
        
     </Routes>
    <Footer/>
    </>
   
  );
}

export default App;
