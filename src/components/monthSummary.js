import React from 'react';
import { Line } from 'react-chartjs-2';
import { data } from '../utils/data';

const MonthSummary = () => {
    
    return (
        <div className='shadow-md p-4 bg-white rounded w-11/12 sm:w-10/12 md:w-7/12 mb-4 md:mb-0'>
            <p className='primary-font text-base text-purp font-bold'>June summary</p>
            <div className='flex justify-between'>
                <div>
                  <p className='primary-font text-sm dashboard-side-text font-semibold'>Money in</p>
                  <p className='primary-font text-base text-purp font-bold'>$650,000</p>
                </div>
                <div>
                  <p className='primary-font text-sm dashboard-side-text font-semibold'>Money out</p>
                  <p className='primary-font text-base text-purp font-bold'>$150,000</p>
                </div>
                <div>
                  <p className='primary-font text-sm dashboard-side-text font-semibold'>Money difference</p>
                  <p className='primary-font text-base text-purp font-bold'>$500,000</p>
                </div>
            </div>
            <Line data={data} />
        </div>
    )
}

export default MonthSummary;