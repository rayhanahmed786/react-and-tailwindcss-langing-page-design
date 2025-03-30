import React from 'react'

const PurpoSesection = () => {


 const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];

  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8 '>
     <div className='max-w-6xl flex items-center mx-auto'>
        <div>
            <p className='text-sm text-purple-600 font-medium mb-2'>ACHIVE MORE</p>
            <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray text-gray-900'>Purpose of a convoy is to keep your team</h2>
        </div>

        <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
            {features.map((features, index) => (
                <div key={index} className='flex items-start space-x-4'> 
                    <div className='w-12 h-12 flex items-center justify-center rounded-lg'>{features.icon}</div>

                    <div>
                        <h3 className='text-lg font-semibold text-gray-semibold text-gray-900 mb-2'>{features.title}</h3>
                        <p className='text-gray-600'>{features.description}</p>
                    </div>
                </div>
            ))}
        </div>
     </div>
    </section>
  )
}

export default PurpoSesection