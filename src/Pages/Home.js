import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    if (document.querySelector("main").style.display === "block") {
      document.querySelector("main").style.display = "flex"
    }
  }, [])

  return (
    <>
      <h1 className="home-title">Page transition smooth</h1>
    </>
  )
}
