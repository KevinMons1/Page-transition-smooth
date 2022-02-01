import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router';
import gsap, { Power1 } from "gsap"

export default function Nav({ setSingle }) {

  const navigate = useNavigate()
  const location = useLocation()

  const handleBack = e => {
    e.preventDefault()

    if (location.pathname !== "/") {
      const disappearance = {
          y: -25,
          opacity: 0,
          duration: 0.5,
          ease: Power1.easeOut
      }
  
      gsap.to(".card", disappearance)
      gsap.to(".article-aside", {
          ...disappearance,
          y: window.innerWidth <= 768 ? -125 : -25
      })
      gsap.to(".article-text", {
          ...disappearance,
          onComplete: () => {
            gsap.set(".article-text", { display: "none" })
            setSingle(null)
            navigate("/")
          }
      })
    }
}

  return (
      <nav>
          <ul>
            <li><Link to="/" onClick={e => handleBack(e)}>Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
      </nav>
  );
}
