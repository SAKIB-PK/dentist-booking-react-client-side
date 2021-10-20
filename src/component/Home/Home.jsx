import React from 'react'
import useDentist from '../../hooks/useDentist'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Dentist from '../Dentist/Dentist'
import Footer from '../Footer/Footer'
import './Home.css'

const Home = () => {
    const post = useDentist()

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
                {/* Services section  */}
                <div className="row">
                    <h2 className="border-bottom font-monospace fst-italic fw-bold my-5 text-center text-muted text-uppercase">services</h2>
                </div>
                <div className="row g-5 mb-5">
                    {
                        post.map(item => <Dentist key={item.id} item ={item}/>)
                    }
                </div>


            </div>
            {/* About Section */}
            <About/>
            {/* Contact section */}
            <Contact />

            {/* Footer Section  */}
            <Footer/>
        </>
    )
}

export default Home
