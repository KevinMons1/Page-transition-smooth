import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap, { Power2 } from "gsap"
import Arrow from "../Assets/arrow.png"

export default function Card({ data, single, setSingle }) {

    const articleRef = useRef(null)

    useEffect(() => {
        if (single) {
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
                fontSize: "10rem",
                duration: 1,
                ease: Power2.easeInOut,
                onComplete: () => gsap.set("body", { overflowY: "auto" })
            })

            gsap.to(".card-back", {
                opacity: 1,
                delay: 1,
                duration: 0.5,
                ease: Power2.easeOut
            })

            gsap.to(".article-aside", {
                y: 0,
                opacity: 1,
                delay: 1,
                duration: 0.5,
                ease: Power2.easeOut
            })

            gsap.to(".article-text", {
                y: 0,
                opacity: 1,
                delay: 1,
                duration: 0.5,
                ease: Power2.easeOut
            })
        }
    }, [single])

    const handleBack = e => {
        e.preventDefault()

        const disappearance = {
            opacity: 0,
            duration: 0.5,
            ease: Power2.easeOut
        }

        gsap.set("body", { overflow: "hidden" })

        gsap.to(".card-back", disappearance)
        gsap.to(".article-aside", disappearance)
        gsap.to(".article-text", {
            ...disappearance,
            onComplete: () => articleRef.current.style.position = "absolute"
        })

        gsap.to(articleRef.current, {
            top: `${data.top - 75}px`,
            right: data.right >= window.innerWidth / 2 ? 0 : null,
            width: "35vw",
            paddingLeft: 25,
            delay: 1,
            duration: 1,
            ease: Power2.easeInOut
        })

        gsap.to(".card-title", {
            x: 0,
            left: 0,
            fontSize: "5rem",
            delay: 1,
            duration: 1,
            ease: Power2.easeInOut,
            onComplete: () => setSingle(data.scroll)
        })
    }

    return !single ?
        <>
            <h3 className="card-title">{data.title}</h3>
            <img src={data.src} alt={data.title} />
        </>
    :    
        <article 
            ref={articleRef} 
            className="card-single card" 
            style={{
                top: `${data.top - 75}px`,
                right: data.right >= window.innerWidth / 2 ? 0 : null
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
