import React from 'react'

export const GifGridItem = ({title, url}) => {
    return (
        <div>
            <div className="card animate__animated animate__fadeInUp">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    )
}
