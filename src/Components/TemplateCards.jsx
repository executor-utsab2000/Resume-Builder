import React from 'react'
import '../CSS_SCSS/Components/TemplateCards.css'

const TemplateCards = ({ image, caption }) => {
    return (
        <div className="card">
            <div className="card-details">
                <div className="imgContainer">
                    <img src={`Template/${image}`} alt="" className='img-fluid' />
                </div>
            </div>
            <button className="card-button">{caption}</button>
        </div>
    )
}

export default TemplateCards
