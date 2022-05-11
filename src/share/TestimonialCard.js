import React from 'react';

const TestimonialCard = ({ patient }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">

                    <p>{patient.message}</p>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <div>
                        <div class="avatar">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={patient.img} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='pb-6'>
                        <h2 class="card-title">{patient.name}</h2>
                        <h4>{patient.city}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;