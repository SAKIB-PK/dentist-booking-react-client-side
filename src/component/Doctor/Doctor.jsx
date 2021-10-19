import React from 'react'
import useServices from '../../hooks/useServices'
import Service from '../Service/Service'

const Doctor = () => {
    const post = useServices()
    return (
        <div className='container-fluid'>
            {/* Services section  */}
            <div className="row">
                    <h2 className="border-bottom font-monospace fst-italic fw-bold my-5 text-center text-muted text-uppercase">services</h2>
                </div>
                <div className="row g-5 mb-5">
                    {
                        post.map(item => <Service key={item.id} item ={item}>

                            <p className="card-text">{item.description}</p>
                        </Service>)
                    }
                </div>
        </div>
    )
}

export default Doctor
