import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className=" bg-dark pt-5">
                {/* <p><u><a href="https://www.google.com/" className='text-muted text-decoration-none'>National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p> */}
                <div className="row justify-content-center pb-5">
                    <div className="col-12 col-md-3">
                        <h2 className=" text-start fs-4 fw-light text-info ">Navigation Menu</h2>
                        <ul className="nav flex-column">
                            <li className="nav-item navItem">
                                <NavLink className="nav-link" to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item navItem">
                                <NavLink  className="nav-link" to="/doctor">Our Doctor</NavLink>
                            </li>
                            <li className="nav-item navItem">
                                <NavLink  className="nav-link" to="/special">Special</NavLink>
                            </li>
                            <li className="nav-item navItem">
                                <NavLink  className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item navItem">
                                <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                    <h2 className=" text-start fs-4 fw-light text-info ">Google Maps</h2>
                        {/* Google Map Setup  */}
                        <iframe className='w-100 h-100 rounded' src="https://maps.google.com/maps?q=rangpur&t=&z=13&ie=UTF8&iwloc=&output=embed" title='Google Maps for Bangladesh' frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-5">
                        <p className='text-center'> All right Reversed.<a className="text-muted ml-2 text-decoration-none" href="#ss" target="_blank">Dentist Care- &copy; 2021-{String(new Date().getFullYear())}</a></p>
                    </div>
                </div>
            <hr/>
        </div>
    )
}

export default Footer
