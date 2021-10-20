import React from 'react'
import { useParams } from 'react-router'

const DentistDetails = ({post}) => {
    const {id} = useParams()
    const item =post.find(item => String(item.id) ===  id) 
    const{name,price,description,img} = item
    
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="card my-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={img} style={{height:250}} className="img-fluid rounded-start" alt={name}/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Price:<small className="text-muted">{price}</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>      
        </>
    )
}

export default DentistDetails
