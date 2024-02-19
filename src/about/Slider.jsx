import React from 'react'

const Slider = () => {

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: '100%', height: '600px', objectFit: 'cover', aspectRatio: '4/3' }} src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/profile-img.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: '100%', height: '600px', objectFit: 'cover', aspectRatio: '4/3' }} src="https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: '100%', height: '600px', objectFit: 'cover', aspectRatio: '4/3' }} src="https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Slider