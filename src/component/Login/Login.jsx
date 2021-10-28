import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import useFirebaseContext from '../../context/useFirebaseContext'
import './Login.css'
const Login = () => {
    const {googleSignIn,customLogin,setUser}= useFirebaseContext()
    const [error,setError] = useState('')
    // const [email,setEmail] =useState('')
    // const [pwd,setPwd] =useState('')
    let history = useHistory();
    let location = useLocation();
    const { register, handleSubmit } = useForm();
  
    let { from } = location?.state || { from: { pathname: "/" } };
    const onSubmit = data => {
        const {email,pwd} = data
        customLogin(email,pwd)
        .then(res =>{
            setUser(res.user)
            console.log(res.user);
            history.push(from)
        })
        .catch(err => console.log(setError(err.message)))
    }

    const gooleLogin=()=>{
        googleSignIn()
        .then(result=>{
            setUser(result.user)
            history.push(from)
        })
        .catch(err=>{
            console.log(setError(err.message))
        })
    }

    

    return (
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center my-5 ">
                <div className="col-md-6 login-form-1 rounded-3">
                    <h3 className='text-center mb-5'>Login for Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Email *" defaultValue="" {...register("email")}  />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="Your Password *" defaultValue=""  {...register("pwd")}/>
                        </div>
                        <span className="text-danger">{error}</span>
                        <div className="form-group mb-3">
                            <input type="submit" className="btnSubmit" />
                        </div>
                        <div className="form-group mb-3">
                            <NavLink to='/signup' className="ForgetPwd" >Create a new account</NavLink>
                        </div>
                        
                    </form>
                    <p className='text-muted text-center'>Or Other Option</p>
                    <div className="mb-3">
                        <button className='btn btn-primary' onClick={gooleLogin}>
                            Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
