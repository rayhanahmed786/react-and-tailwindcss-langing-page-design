import React from 'react'

const FeaturesSection = () => {

    const features = [
        {
          icon: "🔍", 
          title: "Find out what you need",
          description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
          icon: "⚙️",
          title: "Work out the details", 
          description: "Communication protocols apart from engagement models"
        },
        {
          icon: "🚀",
          title: "We get to work fast",
          description: "Protocols apart from engage models, pricing billing"
        }
      ]

  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>How can we help your business?</h2>
        <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
           {features.map((features, index) => (
        <div key={index} className='flex flex-col text-center items-center p-6'>
          <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{
            backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4"
          }}>
            <div className='text-3xl '>{features.icon}</div>
          </div>
          <h3 className='text-2xl text-center'>{features.title}</h3>
          <p>{features.description}</p>
          </div>

           ))}

        </div>
        <div className='text-center mt-16'>
            <button className='bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700
            transition-color relative'>Become a Partner</button>
            <div className='absolute -z-10 w-full h-full rounden-full bg-blue-600/30 blur-xl top-0 left-0'></div>
        </div>
    </section>
  )
}

export default FeaturesSection