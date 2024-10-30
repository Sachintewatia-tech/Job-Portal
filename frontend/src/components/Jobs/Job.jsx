import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate();
    const jobId = 'wwwwwwwwwww';
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
        <div className='flex item-center justify-between'>
            <p className='text-sm text-gray-600'>2 days ago</p>
            <Button variant='outline' className="rounded-full" size='icon'><Bookmark/></Button>
        </div>
      <div className='item-center gap-2 my-2'>
        <div className='flex gap-3'>
            <Button>
                <Avatar>
                    <AvatarImage src='https://i.pinimg.com/736x/9c/b0/bc/9cb0bc7cab743ffccd22c07719ec9ba3.jpg'/>
                </Avatar>
            </Button>
            <div>
                <h1 className='font-md text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Title</h1>
            <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex item-center gap-2 my-4'>
            <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>12 lpa</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant={'ghost'}>Part time</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>  
            <Button onClick = {()=>navigate(`/description/${jobId}`)} variant='outline'>Details</Button>
            <Button className="bg-[#7209b6] hover:bg-[#4d057d] text-white">Save fot later</Button>
        </div>
      </div>
    </div>
  )
}

export default Job
