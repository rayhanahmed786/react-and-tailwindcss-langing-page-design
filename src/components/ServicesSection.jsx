import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'


const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]

const ServicesSection = () => {
  return (
    <section className='py-20 container mx-auto sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
            {/* header  */}
            <div className='md:w-1/3 w-full'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>Future of support with new shape</h2>
                <p className='text-gray-600 text-lg mb-4 md:w-4/5'>Niceuce waur maale Motormind
                cucroce motrice idontify nrohlomel</p>
            
            <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                        <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                    </div>
                    <span className='text-gray-600'>IlY docian contont stratonv</span>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                        <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                    </div>
                    <span className='text-gray-600'>Development bring</span>
                </div>

                
            </div>

            
            <button className='bg-indigo-600 mt-8 text-white cursor-pointer px-8 py-3 rounded-full hover:bg-indigo-700
            transition-color'>Get Started</button>
           
           </div>

           {/* service card  */}

           <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            { services.map((services, index) => (
                <div key={index} className='bg-white max-w-72 coursor-pointer rounded-2xl p-6 hover:scal-105
                 hover:shadow-xl transition-all duration-300'>
                    <div className='mb-4'>{services.icon}</div>
                    <h3 className='text-xl font-semibold mb-2'>{services.title}</h3>
                    <p className='text-gray-600 mb-4'>{services.description}</p>
                    <a  className='text-indigo-600 font-medium hover:text-indigo-700
                    transition-colors' href={services.link}>LEARN MORE</a>
                </div>
            ))}
           </div>

          
        </div>
    </section>
  )
}

export default ServicesSection