import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="border border-top border-secondary text-center p-2">
                <h6>© Copyright <b>PhotoFolio.</b> All Rights Reserved</h6>
                <p>Designed by <span className='footer-credit'>Us</span></p>
            </div>
        </>
    )
}

export default Footer