import ProjectCard from "../../../components/ProjectCard"



const page = () => {
  return (
    <div className="text-white">
      <div>
      {/* Header */}
      <div>
        <h1 className="text-3xl text-[#7F5AF0]  font-extrabold">My Projects</h1>
      </div>

      {/* Project list */}
      <div className='mt-10'>
        <ProjectCard 
        description='P-gpt is a web application that allows users'
        imageSrc='/Image/image.png'
        imageAlt='pgpt imAGE'
        link="https://favics-t.github.io/ai-translate"
        />

      {/* <div className="flex">
        <div className="border border-[#ae9ce5]  m-2 h-30 rounded-4xl  w-[650px]">
          <p className='p-4'>P-Gpt is a web application that allow users translate, summarize and detect language, it was build with react js, this project helped me in solidifying my knowledge with asynchronus javascript and Api </p>
        </div>
        <div className='border w-[650px] -ml-[200px] h-30 border-[#ae9ce5] rounded-4xl '>
          <Image src="/Image/image.png"
          alt='phote o'
          width={300}
          height={300}/>
        </div>
      
      </div> */}

      </div>

     


      </div>
    </div>
  )
}

export default page
