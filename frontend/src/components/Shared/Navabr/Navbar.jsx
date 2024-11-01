import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { LogOut, User2 } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {user} = useSelector(store=>store.auth);
    console.log(user);
    
    const navigate = useNavigate();
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-6xl h-16'>
            <div className='cursor-pointer' onClick={()=>navigate('/')}>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex font-medium items-center gap-5'>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/jobs'}>Jobs</Link> </li>
                    <li> <Link to={'/browse'}>Browse</Link> </li>
                </ul>
                {
                    !user ? (
                        <div className='flex items-center gap-2'>
                            <Link to={'/login'}> <Button variant='outline'>Login</Button> </Link>
                            <Link to={'/signup'}><Button className='bg-[#0283de] hover:bg-[#0568d1]' variant='outline'>SignUp</Button></Link>
                        </div>
                    ) :
                
                <Popover>
                    <PopoverTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className='flex gap-2 sapce-y-2'>
                            <div>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                            </div>
                            <div>
                                <h4 className='font-medium'>Sachin Tewatia</h4>
                                <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit </p>
                            </div>
                        </div>
                        <div className='flex flex-col my-1 text-gray-600'>
                            <div className='flex w-fit items-center gap-1 cursor-pointer'>
                                <User2/>
                                <Button variant='link'><Link to={'/profile'}>View Profile</Link></Button>
                            </div>
                            <div className='flex w-fit items-center gap-1 cursor-pointer'>
                                <LogOut/>
                                <Button variant='link'>Logout</Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
}
            </div>
        </div>
    </div>
  )
}

export default Navbar
