import React from 'react';
import Header from '../../../components/Header';
import SkillRange from '../../../components/SkillRange';

const About = () => {
  return (
        
      <div className='text-white flex flex-col gap-10'>

{/*sub heading */}
<div>
    <Header text='About Me'/>
</div>

{/* body */}
<div className='flex gap-20'>

    {/* skills */}
    <div className='grid grid-rows-2 gap-10  w-96'>
        {/* contact starts here */}
        <div>
       
            <h2><span className=''>Name: </span>Kolapo Faith Taiwo</h2>
            <h2><span className=''>Email: </span>taiwopersonal24@gmail.com</h2>
            <h2><span className=''>Number: </span>+2349063288467</h2>
            <h2><span className=''>Profile: </span>Web Developer</h2>
            
        </div>

        {/* skill range starts here */}
        <div className='grid grid-row-2 gap-4'>

            <div>
            <h1 className='font-bold text-2xl grid grid-cols-4'>Skills</h1>
            </div>

            <div>
            <SkillRange 
            skill='CSS'
            percentage='50%'
            />
           

            <SkillRange 
            skill='CSS'
            percentage='50%'
            />

            <SkillRange
             />


            </div>
          

          


        </div>

    </div>
    {/* skills ends here */}


    {/* paragraph starts here */}
    <div>
        <p className='w-[700px] text-justify '>
        My Name is Kolapo Faith Taiwo, a Software Engineering Student in NIIT Port Harcourt.

I am a Dedicated and detail-oriented Frontend Web Developer with a strong foundation in web development and a passion for creating user-friendly, innovative solutions. Seeking an opportunity to apply and grow technical skills in a challenging Frontend Web Development role.              


As a Frontend Developer, i am commited to continous learning and open to projects,
that help braoden my knowledge and gain more expertise.
i look forward to delivering excellence on any project, i lay my hand on. 


I am a good communicator and a great listener, i adapt easily..and make my way around tussles by always wearing a happy face.
        </p>
    </div>
    {/* paragraph ends here */}

    {/*  */}
    
</div>
          
      </div>
    
  )
}

export default About
