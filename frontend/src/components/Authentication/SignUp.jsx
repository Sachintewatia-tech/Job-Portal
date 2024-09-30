import React, { useState } from 'react'
import Navbar from '../Shared/Navabr/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/Utils/constant'
import { toast } from 'sonner'

const SignUp = () => {
    const [input,setInput] = useState({
        fullname:"",
        email:"",
        mobile:"",
        role:"",
        file:"",
        password:""
    });
    const naviagte = useNavigate();
    const changeEvent = (e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    };
    const changeFileHandler = (e)=>{
        setInput({...input,file:e.target.files?.[0]});
    }
    const submitHandler = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname",input.fullname);
        formData.append("email",input.email);
        formData.append("mobile",input.number);
        formData.append("password",input.password);
        if(input.file){
            formData.append("role",input.role);
        }
        formData.append("file",input.file);
        try {
            const res = await axios.post(`${USER_API_ENDPOINT}/user/register`,formData,{
                headers:{
                   "Content-Type":"multipart/form-data"
                },
                withCredentials:true,
            });
            console.log('res',res.data);
            
            if(res.status.success){
                toast.success(res.data.message);
                naviagte('/login')
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        
    }
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/3 border border-gray-200 rounded-md p-4 my-10'>
            <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
            <div>
            <Label>Full Name</Label>
                <Input 
                    className='border border-gray-300 focus:border-blue-500 p-2' 
                    type='text' value={input.fullname}
                    placeholder='john...'  name='fullname'
                    onChange={changeEvent}
                />
            </div>

            <div>
                <Label>Email</Label>
                <Input className='border border-gray-300 focus:border-blue-500 p-2'
                 name='email' value={input.email}
                    onChange={changeEvent}
                    type='text' placeholder='john@gmail.com...' />
            </div>
            <div>
                <Label>Phone Number</Label>
                <Input className='border border-gray-300 focus:border-blue-500 p-2'
                 name='mobile' value={input.number}
                    onChange={changeEvent}
                    type='number' placeholder='958*****21' />
            </div>
            <div>
                <Label>Password</Label>
                <Input className='border border-gray-300 focus:border-blue-500 p-2'
                 name='password' value={input.password}
                    onChange={changeEvent}
                    type='password' placeholder='password...' />
            </div>
            <div className='item-center gap-2'>
                <Label>Profile</Label>
                <Input onChange={changeFileHandler} accept='image/*' type='file' className='cursor-pointer'  />
            </div>
            <div className='flex items-center justify-between'>
                <RadioGroup className='flex item-center gap-4 my-5'>
                    <div className="flex items-center space-x-2">
                        <Input className='cursor-pointer' type="radio" name='role' value='recruiter' checked={input.role=='recruiter'} onChange={changeEvent} />
                        <Label htmlFor="r2">Recruiter</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input className='cursor-pointer' type="radio" name='role' value='student' checked={input.role=='student'} onChange={changeEvent} />
                        <Label htmlFor="r3">Student</Label>
                    </div>
                </RadioGroup>
                
            </div>
            <Button type='submit' variant='outline' className='w-full my-4 bg-[#007bff] hover:bg-[#0568d1]'>Sign Up</Button>
            <span>Already have an account? <Link to={'/login'}>Login</Link> </span>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
