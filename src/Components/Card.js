import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap, { Power1, Power2 } from "gsap"
import Arrow from "../Assets/arrow.png"

export default function Card({ data, single, setSingle }) {

    const articleRef = useRef(null)

    useEffect(() => {
        if (!single) {
            gsap.to(".card-home", {
                opacity: 1,
                duration: 0.5,
                ease: Power2.easeOut
            })
        }
    }, [single])

    const handleBack = e => {
        e.preventDefault()

        const disappearance = {
            y: -25,
            opacity: 0,
            duration: 0.5,
            ease: Power1.easeOut
        }

        gsap.to(articleRef.current, disappearance)
        gsap.to(".article-aside", {
            ...disappearance,
            y: window.innerWidth <= 768 ? -125 : -25
        })
        gsap.to(".article-text", {
            ...disappearance,
            onComplete: () => setSingle()
        })
    }

    const handleLoad = () => {
        gsap.to(articleRef.current, {
            top: 0,
            right: 0,
            width: "100%",
            paddingLeft: 0,
            duration: 1,
            ease: Power2.easeInOut,
            onComplete: () => articleRef.current.style.position = "relative"
        })

        gsap.to(".card-title", {
            x: "-50%",
            left: "50%",
            fontSize: window.innerWidth <= 768 ? "4rem" : "10rem",
            duration: 1,
            ease: Power2.easeInOut
        })

        gsap.to(".card-back", {
            opacity: 1,
            delay: 1,
            duration: 0.5,
            ease: Power2.easeOut
        })

        gsap.to(".article-aside", {
            y: window.innerWidth <= 768 ? -100 : 0,
            opacity: 1,
            delay: 1,
            duration: 0.5,
            ease: Power2.easeOut
        })

        gsap.set(".article-text", { display: "block" })

        gsap.to(".article-text", {
            y: 0,
            opacity: 1,
            delay: 1,
            duration: 0.5,
            ease: Power2.easeOut,
        })
    }

    return !single ?
        <>
            <h3 className="card-title">{data.title}</h3>
            <img src={data.src} alt={data.title} />
        </>
    :    
        <article
        onLoad={() => handleLoad()} 
            ref={articleRef} 
            className="card-single card" 
            style={{
                top: `${data.top - 75}px`,
                right: window.innerWidth <= 768 
                    ? null
                    : data.right >= window.innerWidth / 2 ? 0 : null
            }}
        >
            <Link to="/" onClick={e => handleBack(e)} className="card-back">
                <img src={Arrow} alt="Back arrow" />
                <span>Back</span>
            </Link>
            
            <h1 className="card-title">{data.title}</h1>
            <img src={data.src} alt={data.title} />
        </article>
}
