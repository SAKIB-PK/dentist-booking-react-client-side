import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import useFirebaseContext from '../../context/useFirebaseContext'
import './Login.css'
const Login = () => {
    const {googleSignIn,setEmail,setPwd,customLogin}= useFirebaseContext()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setEmail(data.email)
        setPwd(data.pwd)
    }
    let history = useHistory();
    let location = useLocation();

    let { from } = location?.state || { from: { pathname: "/" } };
    // let login = () => {
    //     auth.signin(() => {
    //     history.replace(from);
    //     });
    // };
    const hundleLogin =()=>{
        customLogin()
        .then(res =>{
            history.push(from)
        })
        .catch(err => console.log(err.message))
    }
    const gooleLogin=()=>{
        googleSignIn()
        .then(result=>{
            history.push(from)
        })
        .catch(err=>{
            console.log(err.message)
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
                        <div className="form-group mb-3">
                            <input type="submit" className="btnSubmit" onClick={()=>hundleLogin()} />
                        </div>
                        <div className="form-group mb-3">
                            <NavLink to='/signup' className="ForgetPwd" >Create a new account</NavLink>
                        </div>
                        
                    </form>
                    <p className='text-muted text-center'>Or Other Option</p>
                    <div className="mb-3">
                        <button className='btn btn-primary' onClick={()=>gooleLogin()}>
                            Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
