import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Button from '../components/Button'
import AboutData from './AboutData'
import Testemonials from './Testemonials'
import Footer from '../footer/Footer'
import Loader from '../components/Loader'

const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    if (isLoading) {
        return <Loader />
    }
    return (
        <>
            <Navbar />
            <div className="text-center col-lg-4 my-2 mx-auto">
                <h1>About</h1>
                <p className='fs-5 '>r adipisicing elit. Dolor voluptates aliquid iusto porro velit, quibusdam, dolorem exercitationem reprehenderit minima officiis ab cupiditate alias nihil quaerat, et nulla odit vero tenetur.</p>
                <Button btn_text="Available in the about" func={() => alert('hello from about')} />
            </div>
            <div className="container">
                <AboutData />
            </div>
            <div className="container my-3">
                <Testemonials />
            </div>
            <Footer />
        </>
    )
}

export default About