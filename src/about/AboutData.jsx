import React from 'react'
import './about.css'
import { RiArrowDropRightLine } from "react-icons/ri";

const AboutData = () => {
    return (
        <>
            <div className="row justify-content-center align-items-center my-2">
                <div className="col-lg-5">
                    <img className='photo' style={{ width: '90%' }} src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                    <h3 className='head3'>Professional Photographer from New York</h3>
                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <ul className='d-flex flex-column gap-4 list-unstyled'>
                                <li><RiArrowDropRightLine size={30} color='#27A776' /><b>Birthday:</b>1 May 1995</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />
                                    <b>Website:</b>
                                    www.example.com</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />
                                    <b>Phone:</b>
                                    +123 456 7890</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />
                                    <b>Phone:</b>
                                    +123 456 7890</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />

                                    <b>City:</b>
                                    New York, USA</li>

                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className='d-flex flex-column gap-4 list-unstyled'>

                                <li><RiArrowDropRightLine size={30} color='#27A776' /><b>Birthday:</b>1 May 1995</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />
                                    <b>Website:</b>
                                    www.example.com</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />
                                    <b>Phone:</b>
                                    +123 456 7890</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />
                                    <b>Phone:</b>
                                    +123 456 7890</li>
                                <li><RiArrowDropRightLine size={30} color='#27A776' />

                                    <b>City:</b>
                                    New York, USA</li>
                            </ul>

                        </div>
                    </div>
                    <p className='fs-6 '>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p>
                    <p className='fs-6 '>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutData