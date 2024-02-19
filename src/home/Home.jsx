import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import FrontPage from '../front/FrontPage'
import ParentContainer from '../card/ParentContainer'
import Loader from '../components/Loader'

const Home = () => {
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
            <FrontPage />
            <ParentContainer />
        </>
    )
}

export default Home