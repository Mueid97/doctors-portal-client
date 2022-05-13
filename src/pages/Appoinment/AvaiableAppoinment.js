import { format } from 'date-fns';
import React from 'react';

const AvaiableAppoinment = ({date}) => {
    return (
        <div>
            <h1 className='text-secondary text-bold text-2xl text-center'>Avaiable Appoinment Date: {format(date, 'PP')}</h1>
        </div>
    );
};

export default AvaiableAppoinment;