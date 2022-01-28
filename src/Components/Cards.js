import React, { useState } from 'react';
import gsap, { Power1 } from "gsap"
import Card from './Card';
import data from "../data.js"

export default function Cards() {

    const [single, setSingle] = useState(null)

    const handleClick = index => {
        gsap.set("body", { overflowY: "hidden" })

        let articles = gsap.utils.toArray(".card")
        let articlesDisp = articles.filter((el, i) => i !== index)
        const positions = getPositionsElement(articles[index])
        const disappearance = {
            y: -25,
            opacity: 0,
            duration: 0.25,
            ease: Power1.easeOut
        }
        
        // gsap.to("h2", disappearance)
        gsap.to(articlesDisp, {
            ...disappearance,
            pointerEvents: "none"
        })

        gsap.to("h1", {
            y: 0,
            duration: 0.5,
            ease: Power1.easeOut,
            onComplete: () => {
                gsap.set("body", { overflowY: "auto" })
                setSingle({
                    ...data[index],
                    ...positions
                })
            }
        })
    }

    const getPositionsElement = (element) => {
        const rect = element.getBoundingClientRect()
        const left = document.documentElement.scrollLeft
        const top = window.pageYOffset || document.documentElement.scrollTop
        return {
            top: rect.top + top,
            left: rect.left + left
        }
    }

    return (
        <section>
            {!single ?
                data.map((item, index) => {
                    return (
                        <article 
                            className={index % 2 === 0 ? "card parallax" : "card card-down parallax"}
                            key={index}
                            data-speed={0.2 * ((index + 1) / 5)} 
                            onClick={() => handleClick(index)}
                        >
                            <Card data={item} />
                        </article>
                    )
                })
            : <Card data={single} single={true} /> }
        </section>
    )
}
