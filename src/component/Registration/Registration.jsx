import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import useFirebaseContext from '../../context/useFirebaseContext'

const Registration = () => {
    const {customSignIn,setUser,updateData}= useFirebaseContext()
    // const [email,setEmail] =useState('')
    // const [pwd,setPwd] =useState('')
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location?.state || { from: { pathname: "/" } };
    // form value setup state
    const onSubmit = (data) => {
        const {name,img,email,pwd}= data
        // setEmail(data.email)
        // setPwd(data.pwd)
        console.log(email,pwd);
        customSignIn(email,pwd)
        .then(result =>{
            updateData(name,img)
            setUser(result.user)
            console.log(result)
            history.push(from)
        })
        .catch(err => console.log(err.message))
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
                            <input type="submit" className="btnSubmit"/>
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
