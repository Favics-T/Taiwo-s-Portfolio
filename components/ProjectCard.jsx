import Image from 'next/image';

const ProjectCard = ({ description, imageSrc, imageAlt,link,projectTitle }) => {
  return (
    <div>

      <h1 className={`mb-4 font-bold underline underline-offset-4`}>{projectTitle}</h1>

<div className="flex flex-row  px-10 justify-center items-center transition-transform duration-300 ease-in-out hover:scale[1.02] hover:shadow-xl">
    
    {/* left div */}
    
   <div className='border border-[#FF7AC3] object-contain pl-2 pr-10 py-2 rounded-lg h-32 w-1/2'>
     <p className={`font-bold`}>{description}</p>
   </div>

   {/* right div */}
   <div className='border-2  border-[#FF7AC3] object-contain -ml-10 cursor-pointer rounded-lg  w-1/2 h-32'>
     <Image  src={imageSrc} alt={imageAlt} width={800} height={150}
     className='h-[125px] rounded-lg'/>
   </div>
   
  
   </div>

    </div>

   
  );
};

export default ProjectCard;
