import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Card({ data, single }) {

    const navigate = useNavigate()
    const articleRef = useRef(null)

    useEffect(() => {
        if (single) {
            articleRef.current.style.transform = `translate(${data.left}px, ${data.top}px)`
        }
    }, [single])

    // Wait animation finish for redirect
    const handleRedirect = (e, path) => {
        e.preventDefault() 
        
        setTimeout(() => {
            navigate(path)
        }, 1000)
      }

    return !single ?
        <Link to={`/article/${data.title}`} onClick={e => handleRedirect(e, `/article/${data.title}`)}>
            <h3 className="parallax" data-speed="0.3">{data.title}</h3>
            <img src={data.src} alt={data.title} />
        </Link>
    :    
        <article ref={articleRef} className="card-single card">
            <h3 className="parallax" data-speed="0.3">{data.title}</h3>
            <img src={data.src} alt={data.title} />
        </article>
}
