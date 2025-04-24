import ProjectCard from "../../../components/ProjectCard"
import Header from "../../../components/Header"


const page = () => {
  return (
    <div className="text-white">
      <div>
      {/* Header */}
      <div>
       <Header text='My Projects' />
      </div>

      {/* Project list */}
      <div className='mt-10 flex flex-col gap-10'>
        <ProjectCard 
        description='P-gpt is a web application with the following features Summarize, Translate, Detect and Prompting.
        It allows users summarize words greater than 150, users can detect language and also translate to English, Api is from gemini.'
        imageSrc='/Image/image.png'
        imageAlt='pgpt imAGE'
        projectTitle='PG-pt (Summarizer App)'
        link="https://favics-t.github.io/ai-translate"
        />

<ProjectCard 
        description='This is an online ticket, you can select your preffered choice VIP, Regular or VVIP nd also get your ticket ready..Ticket is downlaodable, this was built with react js.'
        imageSrc='/Image/Techember.png'
        imageAlt='pgpt imAGE'
         projectTitle='Techember ticket'
        link="https://favics-t.github.io/ai-translate"
        />

<ProjectCard 
        description='Geeks store is an online e-commerce store, you can shop and also add to cart, data was fetched from fake store api'
        imageSrc='/Image/Geeks.png'
        imageAlt='pgpt imAGE'
        projectTitle='Geeks Store'
        link="https://favics-t.github.io/ai-translate"
        />

        

     

      </div>

     


      </div>
    </div>
  )
}

export default page
