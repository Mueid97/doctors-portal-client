import React from 'react';

const Hero = ({ cardTitle, img, bgClass, detail }) => {
    return (
        <div >
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`} >
                <figure className='lg:pl-5 lg:mt-0 mt-6'>
                    <img src={img}  alt="Album" />
                </figure>
                <div class="card-body ">
                    <h2 class="card-title text-white">{cardTitle}</h2>
                    <p className='text-white'>{detail}</p>

                </div>
            </div>
        </div>
    );
};

export default Hero;