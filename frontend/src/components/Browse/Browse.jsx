import React from 'react'
import Navbar from '../Shared/Navabr/Navbar'
import Job from '../Jobs/Job';

const jobs = [1,2,3,4,5,6];
const Browse = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-5xl mx-auto my-10'>
        <h1 className=' font-bold my-10 text-xl'>Search Results "{jobs.length}"</h1>
        <div className='grid grid-cols-3 gap-4'>
            {
                jobs.map((ele,i)=>{
                    return(
                        <Job/>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Browse
