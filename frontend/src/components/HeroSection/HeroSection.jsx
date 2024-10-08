import React from 'react'
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className='px-4 py-2 rounded-lg bg-gray-100 text-[#F83002]'>No.1 job hunt website</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Job</span> </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad, culpa itaque fugiat id est necessitatibus nisi, eaque p voluptate.</p>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input type="text" placeholder='find your dream job..' className='outline-none border-none w-full' />
          <Button className='rounded-r-full bg-[#6A38C2]'> <Search className='h-5 w-5' /> </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
