import React from 'react'
import './frontpage.css'
import Button from '../components/Button'
const FrontPage = () => {
    return (
        <>
            <div className="d-flex p-5 flex-column col-lg-5 mx-auto text-center gap-1">
                <h1>I'm <span className='name'>Jenny Wilson</span> a Professional Photographer from New York City</h1>
                <p className='text-secondary fs-4'>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
                <Button btn_text="Available for hire" func={() => alert('hello from front')} />
            </div>
        </>
    )
}

export default FrontPage