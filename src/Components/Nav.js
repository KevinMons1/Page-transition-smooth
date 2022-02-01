import React from 'react';
import { Link } from 'react-router-dom';
import gsap, { Power1 } from "gsap"

export default function Nav({ setSingle }) {

  const handleBack = e => {
    e.preventDefault()

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
        onComplete: () => setSingle()
    })
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
