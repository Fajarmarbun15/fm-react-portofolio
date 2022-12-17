import React from 'react'
import heroImage from '../assets/hero/hero.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Homes = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      
<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
  <div className='flex flex-col justify-center h-full'>
    <h2 className='text-3xl sm:text-7xl font-bold text-white'>
      I'm Fajar Marbun.Stack Developer
    </h2>
    <p className='text-gray-500 py-4 max-w-md'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eum, sapiente deleniti reprehenderit quam quia reiciendis aspernatur. Veritatis, sint tenetur maiores quam labore ratione, facilis iusto accusamus exercitationem ipsa numquam expedita placeat? Nulla, nostrum soluta?
    </p>
  
  
  <div>
    <Link to='portofolio'
    smooth
    duration={500} 
    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-800 cursor-pointer'>
      Portofolio
      <span className='group-hover:rotate-90 duration-300'>
      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />        
      </span>
    </Link>
  </div>
</div>

{/* image */}
<div>
  <img src={heroImage} alt="foto" className='rounded-3xl mx-auto w-1/3 md:w-full' />
</div>
{/* endimage */}

  </div>

    </div>
  )
}

export default Homes