import React from 'react'
import ScheduleImage from '../assets/stats.webp'
import { FaArrowRightLong } from "react-icons/fa6";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>

        {/* left  */}

        <div className='md:w-1/2 w-full'>
          <img src={ScheduleImage} alt="Schedule Image" className='w-full h-auto' />
        </div>

        {/* right */}

        <div className='md;w-1/2 w-full'>
        <p className='text-orange-500 font-semibold'>SCHEDULE</p>
        <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business
         <br />  With Smart Scheduling Solutions</h2>
         <p className='text-gray-600 mb-8'>Take control of your time and boost productivity 
          with our intelligent Ivans schulte and celiver exceptional customer experiences unrouan seamiess calender magement</p>
       
       <a href="#" className='text-blue-500 text-semibold flex items-center gap-2 hover:gap-4 transition-all'>
       Explore scheduling features
       <FaArrowRightLong  className='size-8'/>
       </a>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection