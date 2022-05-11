import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import apponmentSection from '../../assets/images/appointment.png'
const ApponmenSection = () => {
    return (
        <div class="hero min-h-screen" style={{background:`url(${apponmentSection})`, backgroundSize: 'cover'}}>
            <div class="hero-content flex-col lg:flex-row">
                <img src={doctor} width='600px' class=" lg:mt-[-300px] mt-[-200px]" alt='' />
                <div>
                    <h3 class="text-2xl font-bold text-primary pb-3">Appointment</h3>
                    <h1 class="text-4xl font-bold text-white pb-3">Make An Appointment Today</h1>
                    <p class="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ApponmenSection;