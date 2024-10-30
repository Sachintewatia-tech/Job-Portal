import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const JobDescription = () => {
    const isApplied = true;
  return (
    <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-bold text-xl'>Frontend Developer</h1>
                <div className='flex item-center gap-2 my-4'>
                    <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>Positions</Badge>
                    <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>12 lpa</Badge>
                    <Badge className={'text-[#7209b7] font-bold'} variant={'ghost'}>Part time</Badge>
                </div>
            </div>
            <Button className={`rounded-lg text-white ${isApplied? 'bg-gray-600 hover:bg-black cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#56058d]' }`}>{ isApplied ? "Already applied" : "Apply Now"}</Button>
        </div>
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
        <div className='my-4'>
            <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>Fontened Developer</span></h1>
            <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>Bangalore</span></h1>
            <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam ducimus.</span></h1>
            <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>2 Years</span></h1>
            <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>12Lpa</span></h1>
            <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>340</span></h1>
            <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>20-09-2024</span></h1>
        </div>
    </div>
  )
}

export default JobDescription
