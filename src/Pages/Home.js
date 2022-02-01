import React, { useEffect } from 'react';
import gsap, { Power1 } from "gsap"

export default function Home() {

  useEffect(() => {
    if (document.querySelector("main").style.display === "block") {
      document.querySelector("main").style.display = "flex"
    }

    gsap.to(".home-title", {
      opacity: 1,
      duration: 0.5,
      ease: Power1.easeOut
    })
  }, [])

  return (
    <>
      <h1 className="home-title">Page transition smooth</h1>
    </>
  )
}
