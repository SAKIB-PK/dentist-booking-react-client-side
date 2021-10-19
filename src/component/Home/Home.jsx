import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row hero-banner vh-100 justify-content-center align-items-center">
                    <div className="col-12 col-md-6">
                        <h3 className='text-danger fs-4 fst-italic'>Care For Your Smile</h3>
                        <h1 className='display-4 fw-bold text-secondary'>Committed To Excellence</h1>
                        <button className='btn btn-warning btn-danger fw-bold mt-4'> View our Services</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="/images/doctor.svg" className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
