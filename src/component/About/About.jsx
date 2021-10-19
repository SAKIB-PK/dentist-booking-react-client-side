import React from 'react';
import './About.css';

const About = () => {
    return (
    <div className="container py-5">
        <h1 className='text-center text-danger mb-3'>About us</h1>
        <div className="row g-5">
            <div className="card p-3 col-12 col-md-6 col-lg-4 text-center">
                <div className="card-img pb-3 icon-size" >
                    {/* <FontAwesomeIcon  icon={faCreativeCommons} /> */}
                </div>
                <div className="card-box">
                    <h4 className="card-title py-3  display-5">
                        Best Doctor</h4>
                    <p className="mbr-text  display-7">
                        It's the ability to think outside the box. We make decisions, create something new and generate a lot of ideas.
                    </p>
                </div>
            </div>

            <div className="card p-3 col-12 col-md-6 col-lg-4 text-center">
                <div className="card-img pb-3 icon-size">
                    {/* <FontAwesomeIcon  icon={faWalking} /> */}
                </div>
                <div className="card-box">
                    <h4 className="card-title py-3  display-5">
                        Worldwide</h4>
                    <p className="mbr-text display-7">
                        All sites you make with Mobirise are mobile-friendly. You don't have to create a special mobile version of your site.
                    </p>
                </div>
            </div>

            <div className="card p-3 col-12 col-md-6 col-lg-4 text-center">
                <div className="card-img icon-size">
                    {/* <FontAwesomeIcon  icon={faUnity} /> */}
                </div>
                <div className="card-box">
                    <h4 className="card-title py-3  display-5">
                        Keep Smile
                    </h4>
                    <p className="display-7">
                        Mobirise offers many site blocks in several themes, and though these blocks are pre-made, they are flexible.
                    </p>
                </div>
            </div>

            

        </div>

    </div>
    );
};

export default About;