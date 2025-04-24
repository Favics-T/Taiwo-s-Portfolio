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
        description='P-gpt is a web application that allows users'
        imageSrc='/Image/image.png'
        imageAlt='pgpt imAGE'
        projectTitle='PG-pt (Summarizer App)'
        link="https://favics-t.github.io/ai-translate"
        />

<ProjectCard 
        description='P-gpt is a web application that allows users'
        imageSrc='/Image/Techember.png'
        imageAlt='pgpt imAGE'
         projectTitle='Techember ticket'
        link="https://favics-t.github.io/ai-translate"
        />

<ProjectCard 
        description='P-gpt is a web application that allows users'
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
