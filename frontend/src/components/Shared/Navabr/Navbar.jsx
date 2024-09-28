import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { LogOut, User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = false;
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-6xl h-16'>
            <div>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex font-medium items-center gap-5'>
                    <li> <Link>Home</Link> </li>
                    <li> <Link>Jobs</Link> </li>
                    <li> <Link>Browse</Link> </li>
                </ul>
                {
                    !user ? (
                        <div className='flex items-center gap-2'>
                            <Button variant='outline'>
                                <Link to={'/login'}>Login</Link>
                            </Button>
                            <Button className='bg-[#0283de] hover:bg-[#0568d1]'>
                                <Link to={'/signup'}>SignUp</Link>
                            </Button>
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
                                <Button variant='link'>View Profile</Button>
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
