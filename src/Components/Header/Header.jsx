import React from 'react'
import Brand from '../Brand/Brand'
import "./Header.css"

const Header = (props) => {
    return (
        <div className='Header'>
        <h2 className='onStock'>{props.greetings}</h2>
        </div>
    )
}

export default Header