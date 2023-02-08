import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className='spinCont'>
            <div className="spin spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading