import React from 'react'
import { NavLink } from 'react-router-dom'
import useFirebaseContext from '../../context/useFirebaseContext'

const Navbar = () => {
    const {user,logOut}= useFirebaseContext()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <NavLink className="navbar-brand" to='/home'>Dentist</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  className="nav-link" to="/doctor">Our Doctor</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  className="nav-link" to="/special">Special</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
                <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                    {user?.email? <>
                        <span className='text-white px-3 pt-2'>{user.displayName}</span>
                        <button className='btn btn-light fw-bold' onClick={()=> logOut()}>Log out</button>
                        </>
                     :<>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='signup'>
                                SignUp
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/login'>Login</NavLink>
                        </li>
                    </>}
                    
                </ul>
               
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
