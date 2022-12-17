import React from 'react'
import dashImage from "../assets/hero/portofolio/dashboard.png"
import boatParallax from "../assets/hero/portofolio/dashboat.png"
import migrasiDestruct from "../assets/hero/portofolio/db migrasi.png"
import dbSmooth from "../assets/hero/portofolio/db.png"
import exportWeather from "../assets/hero/portofolio/exportexcel.png"
import pdfImage from "../assets/hero/portofolio/exportpdf.png"
const Portofolio = () => {

    const portofolios =[
        {
            id: 1,
            src: dashImage
        },
        {
            id: 2,
            src: boatParallax
        },
        {
            id: 3,
            src: migrasiDestruct
        },
        {
            id: 4,
            src: dbSmooth
        },
        {
            id: 5,
            src: exportWeather
        },
        {
            id: 6,
            src: pdfImage
        },
    ]

  return (
    <div name='portofolio'
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portofolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portofolios.map(({id, src}) => (
                   
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="dash" className='rounded-md duration-200 hover:scale-105'/>
    
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Done</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                ))}
                </div>


            
        </div>
    </div>
  )
}

export default Portofolio