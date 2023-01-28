import React from 'react'

import LazyLoad from 'react-lazy-load';

const LessonUni = ({ title = "", src = '' }) => {
    return (
        <div className="LessonUni  position-relative d-block w-100 rounded shadow-sm overflow-hidden">
            {/* <img className="w-100 h-100 object-fit-cover rounded-inherit" src={src} alt={title} /> */}
            <LazyLoad height={250} offset={100} >
                <img className="w-100 h-100 object-fit-cover rounded-inherit" src={src} alt={title} />
            </LazyLoad>
            <div className="popular-title w-100">
                <p className="fs-12 fw-500 text-right text-white m-2">{title}</p>
            </div>
        </div>
    )
}

export default LessonUni