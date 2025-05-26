import React from 'react'
import '../CSS_SCSS/Components/SmallItem.css'

const SmallItems = ({title}) => {
    return (
        <div className='items my-3 mx-2'>{title}</div>
    )
}

export default SmallItems