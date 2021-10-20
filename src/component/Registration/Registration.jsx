import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import useFirebaseContext from '../../context/useFirebaseContext'

const Registration = () => {
    const {setName,setPwd,customSignIn,setImg,setEmail}= useFirebaseContext()
    const { register, handleSubmit } = useForm();
    // form value setup state
    const onSubmit = data => {
        setName(data.name)
        setPwd(data.pwd)
        setImg(data.img)
        setEmail(data.email)
    }
    return (
        
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center my-5 ">
                <div className="col-md-6 login-form-1 rounded-3">
                    <h3 className='text-center mb-5'>Registration Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Name *" defaultValue="" {...register("name")} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Photo Link" defaultValue=""{...register("img")}/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" placeholder="Your Email *" defaultValue=""{...register("email")} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" className="form-control" placeholder="Your Password *" defaultValue="" {...register("pwd")} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="submit" className="btnSubmit" onClick={()=>customSignIn()} />
                        </div>
                        <div className="form-group mb-3">
                            <NavLink  className="ForgetPwd" to='/login'>Already have an account.</NavLink>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
