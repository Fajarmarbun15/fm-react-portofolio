import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aperiam eaque amet dolores eveniet obcaecati dolorem provident ab illum praesentium quod consequuntur harum accusantium, fuga perspiciatis doloremque quas illo soluta! Eum quas aspernatur quis amet sunt molestias necessitatibus autem consectetur odio illo. Repudiandae perferendis id, maxime sed repellendus architecto. Libero?
            </p>
            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt natus deleniti numquam error asperiores quibusdam odit odio optio fuga esse eos ipsum, necessitatibus nihil earum porro hic dolorem. Ducimus, hic!
            </p>
        </div>
    </div>
  )
}

export default About