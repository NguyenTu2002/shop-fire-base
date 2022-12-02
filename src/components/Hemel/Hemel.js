import React from 'react'

const Hemel = (props) => {
    document.title = 'Maltimart -' + props.title
    return (
        <div className='w-100'>{props.children}</div>
    )
}

export default Hemel