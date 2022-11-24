import React from 'react'
import Brand from '../Brand/Brand'
import "../Styles.css"

const Header = (props) => {
    return (
        <div className='Header'>
        <h2>{props.greetings}</h2>
        <Brand/>
        </div>
    )
}

export default Header