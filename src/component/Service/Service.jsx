import React from 'react'
import { NavLink } from 'react-router-dom'

const Service = ({item,children}) => {
    const{id,name,speciallist,img} = item
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card" >
                <img src={img} className="card-img-top"style={{height:250}} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span className="fw-bold"> Professional:</span>{speciallist}</p>
                    {children}
                    <NavLink to={`/details/${id}`} className="btn btn-danger">Details</NavLink>
                </div>
            </div>  
        </div>
    )
}

export default Service
