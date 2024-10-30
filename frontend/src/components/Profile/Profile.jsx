import React, { useState } from 'react'
import Navbar from '../Shared/Navabr/Navbar'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'
import AppliedJobsTable from '../AppliedJobs/AppliedJobsTable'
import UpdateProfile from './UpdateProfile'

const Profile = () => {
    const [open,setOpen] = useState(false);
    const isResume = true;
    const skills = ['Html', 'css','javascript','react js']
  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>

        <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
                <AvatarImage src='https://github.com/shadcn.png' />
            </Avatar>
        <div>
            <h1 className='font-medium text-xl'>Full Name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
        <Button onClick={()=>setOpen(true)} className="text-right" variant='outline' ><Pen/></Button>
        </div>
        <div className='mt-4'>
            <div className='flex items-centre gap-3'>
                <Mail/>
                <span>sachin@gmail.com</span>
            </div>
            <div className='flex items-centre gap-3'>
                <Contact/>
                <span>9588123711</span>
            </div>
        </div>
        <div className='my-4'>
            <h1 className='font-bold'>Skills</h1>
            {
                skills.length!=0 ? skills.map((ele,i)=> <Badge className={'bg-black text-white'} variant={'ghost'} key={i}>{ele}</Badge> ) : <span>NA</span>
            }
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume ? <a target='blank' href='https://youtube.com' className='text-blue-500 w-full hover:underline cursor-pointer'>Sachin's Resume</a>:<span>NA</span>
            }
        </div>
      </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
            <AppliedJobsTable/>
        </div>
        <UpdateProfile open={open} seOpen={setOpen} />
    </div>
  )
}

export default Profile
