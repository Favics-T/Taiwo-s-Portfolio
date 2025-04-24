import React from 'react'

const SkillRange = ({skill,percentage}) => {
  return (
    <div>
      
      <div className='text-[#FF7AC3]'>
        <div>
        <h2 className='font-bold'>{skill}</h2>
                <h2 className='font-medium'>{typeof percentage === 'number' ? `${percentage}%` : percentage}</h2>
                <div className='w-76 bg-white rounded-lg  h-2'>
                  <div className='h-full bg-[#ff7ac3]' 
                  style={{width: typeof percentage === 'number' ? `${percentage}%` : percentage}}>

                  </div>
                </div>
        </div>
         </div>
    </div>
  )
}

export default SkillRange
