import React from 'react'
import Navbar from '../Shared/Navabr/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'

const SignUp = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
            <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
            <div>
                <Label>Full Name</Label>
                <Input type='text' placeholder='enter name...' />
            </div>
            <div>
                <Label>Email</Label>
                <Input type='text' placeholder='enter email...' />
            </div>
            <div>
                <Label>Phone Number</Label>
                <Input type='number' placeholder='enter number...' />
            </div>
            <div>
                <Label>Password</Label>
                <Input type='password' placeholder='enter password...' />
            </div>
            <div className='flex items-center justify-between'>
                <RadioGroup className='flex item-center gap-4 my-5'>
                    <div className="flex items-center space-x-2">
                        <Input className='cursor-pointer' type="radio" name='role' value='recruiter' />
                        <Label htmlFor="r2">Recruiter</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <Input className='cursor-pointer' type="radio" name='role' value='student' />
                    <Label htmlFor="r3">Student</Label>
                    </div>
                </RadioGroup>
                <div className='flex item-center gap-2'>
                    <Label>Profile</Label>
                    <Input accept='image/*' type='file' className='cursor-pointer'  />
                </div>
            </div>
            <Button type='submit' variant='outline' className='w-full my-4 bg-[#007bff] hover:bg-[#0568d1]'>Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
