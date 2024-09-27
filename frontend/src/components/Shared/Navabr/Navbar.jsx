import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
            <div>
                <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
            </div>
            <div>
                <ul className='flex font-medium items-center gap-5'>
                    <li> <Link>Home</Link> </li>
                    <li> <Link>Jobs</Link> </li>
                    <li> <Link>Browse</Link> </li>
                </ul>
                <Popover>
                    <PopoverTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                    Sachin
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    </div>
  )
}

export default Navbar
