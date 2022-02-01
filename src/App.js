import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import { useLocation } from 'react-router';
import gsap from "gsap"
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Home from './Pages/Home'
import Article from './Pages/Article';
import Nav from './Components/Nav';
import Cards from "./Components/Cards"

// Setup gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {
  
  const location = useLocation()

  useEffect(() => {
    window.addEventListener("resize", () => resize())
  }, [])
  
  useEffect(() => {
    if (location.pathname === "/" && window.innerWidth > 550) giveParallax()
    else if (window.innerWidth <= 550) resize()
  }, [location])

  const resize = () => {
    const elements = ScrollTrigger.getAll()
    
    if (window.innerWidth <= 550) {
      console.log("test");
      elements.forEach(element => {
        element.kill(true)
      })
      let parallax = document.querySelectorAll(".parallax")
      parallax.forEach(element => {
          element.style.transform = "translate(0, 0)"
      })
    } else if (elements.length === 0) giveParallax()
  }

  // setup parallax
  const giveParallax = () => {
    gsap.to(".parallax", {
      scrollTrigger: {
        scrub: true
      },
      y: (i, target) => - ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    })
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Cards />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:name" element={<Article />} />
        </Routes> 
      </main>
    </>
  )
}

export default App;
