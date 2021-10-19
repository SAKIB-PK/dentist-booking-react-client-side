import React from 'react'
import { NavLink } from 'react-router-dom'

const Service = ({item}) => {
    const{name,speciallist,img} = item
    return (
        <div className="col-md-6 col-lg-4">
            <div class="card" >
                <img src={img} class="card-img-top"style={{height:250}} alt={name}/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"><span className="fw-bold"> Professional:</span>{speciallist}</p>
                    <NavLink to='/sakib' class="btn btn-danger">Details</NavLink>
                </div>
            </div>  
        </div>
    )
}

export default Service
