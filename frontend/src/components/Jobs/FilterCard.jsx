import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
  {
    filterType:"Location",
    arr:["Delhi","Gurugram","Noida","Bangalore","Mumbai"]
  },
  {
    filterType:"Industry",
    arr:["Frontend Developer","Backend Developer","Devops Engineer","Full Stack Developer"]
  },
  {
    filterType:"Salary",
    arr:["0-40k","50k-1 lpa","1-5 lpa"]
  },
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3 h-1 bg-[#b8baba77]' />
      <RadioGroup>
        {
          filterData.map((ele,i)=>(
            <div>
              <h1 className='text-bold text-lg'>{ele.filterType}</h1>
              {
                ele.arr.map((item,i)=>{
                  return(
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
