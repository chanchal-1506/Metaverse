import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import AppStore from './components/AppStore/AppStore';
import Footer from './components/Footer/Footer';

const App=()=> {
  useEffect (()=>{
    AOS.init(
      {
        offset:100,
        duration:700,
        easing:"ease-in",
        delay:100,
      }
    )
  })

  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Features/>
      <AppStore/>
      <Footer/>
    </main>
  )
};

export default App
