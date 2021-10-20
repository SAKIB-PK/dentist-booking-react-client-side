import React from 'react'
import { NavLink } from 'react-router-dom'

const Dentist = ({item}) => {
    const{id,name,price,description,img} = item
    const text = description.slice(0,100)
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card" >
                <img src={img} className="card-img-top"style={{height:250}} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span className="fw-bold"> Description:</span>{text}</p>
                    <p className="card-text"><span className="fw-bold"> Price:</span>{price}</p>
                    <NavLink to={`/dentist/${id}`} className="btn btn-danger">Details</NavLink>
                </div>
            </div>  
        </div>
    )
}

export default Dentist
