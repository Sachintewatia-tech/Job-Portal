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

const Login = () => {
  const [input,setInput] = useState({
    email:"",
    role:"",
    password:""
});
const navigate = useNavigate();
const changeEvent = (e)=>{
    setInput({...input,[e.target.name]:e.target.value});
};

const submitHandler = async (e)=>{
  e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/user/login`,input,{
          headers:{
             "Content-Type":"application/json"
          },
          withCredentials:true,
      });
      console.log('res',res.data);
      if(res.data.success){
          toast.success(res.data.message);
          navigate('/');
      }
  } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
  }
  
}
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/3 border border-gray-200 rounded-md p-4 my-10'>
            <h1 className='font-bold text-xl mb-5'>Login</h1>

            <div>
                <Label>Email</Label>
                <Input name='email' value={input.email}
                    onChange={changeEvent}
                    type='text' placeholder='john@gmail.com...'  />
            </div>
        
            <div>
                <Label>Password</Label>
                <Input name='password' value={input.password}
                    onChange={changeEvent}
                    type='password' placeholder='password...' />
            </div>
            
            <div className='flex items-center justify-between'>
                <RadioGroup className='flex item-center gap-4 my-5'>
                    <div className="flex items-center space-x-2">
                        <Input className='cursor-pointer' type="radio" name='role' value='recruiter' checked={input.role=='recruiter'} onChange={changeEvent}  />
                        <Label htmlFor="r2">Recruiter</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Input className='cursor-pointer' type="radio" name='role' value='student' checked={input.role=='student'} onChange={changeEvent} />
                        <Label htmlFor="r3">Student</Label>
                    </div>
                </RadioGroup>
                
            </div>
            <Button type='submit' variant='outline' className='w-full my-4 bg-[#007bff] hover:bg-[#0568d1]'>Login</Button>
            <span>Dont't have an account? <Link to={'/signup'}>SignUp</Link> </span>
        </form>
      </div>
    </div>
  )
}

export default Login;
