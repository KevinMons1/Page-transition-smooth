import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Home from './Pages/Home'
import Article from './Pages/Article';
import Nav from './Components/Nav';
import Title from "./Components/Title"
import Cards from "./Components/Cards"

function App() {

  useEffect(() => {
    // Setup gsap
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    // setup parallax
    gsap.to(".parallax", {
      scrollTrigger: {
        scrub: true
      },
      y: (i, target) => - ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    })
  })

  return (
    <>
      <Nav />
      <main>
        <Title />
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
