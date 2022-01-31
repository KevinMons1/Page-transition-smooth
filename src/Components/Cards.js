import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import gsap, { Power2 } from "gsap"
import Card from './Card';
import data from "../data.js"

export default function Cards() {

    const navigate = useNavigate()
    const [single, setSingle] = useState(null)

    const handleClick = (e, index, path) => {
        e.preventDefault() 

        gsap.set("body", { overflowY: "hidden" })

        let articles = gsap.utils.toArray(".card")
        let articlesDisp = articles.filter((el, i) => i !== index)
        const positions = getPositionsElement(articles[index])
        const disappearance = {
            opacity: 0,
            duration: 0.5,
            ease: Power2.easeOut
        }
        
        gsap.to("h1", disappearance)

        gsap.to(articlesDisp, {
            ...disappearance,
            pointerEvents: "none",
            onComplete: () => {
                setSingle({
                    ...data[index],
                    ...positions,
                    scroll: window.pageYOffset
                })
                // Wait disappearance animations finish for redirect
                navigate(path)
            }
        })
    }

    const getPositionsElement = (element) => {
        const rect = element.getBoundingClientRect()
        return {
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom
        }
    }

    const handleBack = (scroll) => {
        setSingle(null)
        navigate("/")
    }

    return (
        <section>
            {!single ?
                data.map((item, index) => {
                    return (
                        <Link 
                            className={index % 2 === 0 ? "card card-home parallax" : "card card-home card-down parallax"}
                            key={index}
                            data-speed={0.2 * ((index + 1) / 5)} 
                            to={`/article/${data.title}`}
                            onClick={(e) => handleClick(e, index, `/article/${item.title}`)}
                        >
                            <Card data={item} />
                        </Link>
                    )
                })
            : <Card data={single} single={true} setSingle={(scroll) => handleBack(scroll)} /> }
        </section>
    )
}
