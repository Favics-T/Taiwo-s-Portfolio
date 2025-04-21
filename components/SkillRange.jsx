import React from 'react'

const SkillRange = ({skill,percentage}) => {
  return (
    <div>
      
      <div className='text-[#FF7AC3]'>
                <h2 className='font-bold'>{skill}</h2>
                <h2 className='font-medium'>{percentage}</h2>
                <div className='w-76 bg-[#ff7ac3] h-2'></div>
            </div>
    </div>
  )
}

export default SkillRange
