import React from 'react'
import useServices from '../../hooks/useServices'
import Service from '../Service/Service'
import './Home.css'

const Home = () => {
    const post = useServices()

    console.log(post)
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
                        post.slice(0,6).map(item => <Service key={item.id} item ={item}/>)
                    }
                </div>


            </div>

            {/* Footer Section  */}
            <div className="row bg-dark pt-5">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <p><u><a href="https://www.google.com/" className='text-muted text-decoration-none'>National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                    <p>&copy; All right Reversed.<a className="text-muted ml-2 text-decoration-none" href="#ss" target="_blank">Dentist Care</a></p>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default Home
