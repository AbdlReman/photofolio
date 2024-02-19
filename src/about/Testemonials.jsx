import React from 'react'
import './about.css'
import Slider from './Slider'
const Testemonials = () => {
    return (
        <>
            <div className="d-flex align-items-center gap-2">
                <h6 className='p-0 m-0'>Testemonial</h6>
                <div className="underline"></div>
            </div>
            <h1>What they are saying</h1>
            <Slider />
        </>
    )
}

export default Testemonials