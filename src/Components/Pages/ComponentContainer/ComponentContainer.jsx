import React from 'react'
import Header from '../../Header/Header'
import NavBar from '../../NavBar/NavBar'

function ComponentContainer() {
    const link = ()=>{console.log("clickeaste ${this.key}");} 
    return (
        <>
            <NavBar link={link} />
            <Header greetings="bienvenidos a"/>
        </>
    )
}

export default ComponentContainer