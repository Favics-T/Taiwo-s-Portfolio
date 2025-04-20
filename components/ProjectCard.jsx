import Image from 'next/image';

const ProjectCard = ({ description, imageSrc, imageAlt,link }) => {
  return (
    <div className="flex flex-wrap justify-center items-center transition-transform duration-300 ease-in-out hover:scale[1.02] hover:shadow-xl">
      <div className="border border-[#ae9ce5] h-20 m-2 rounded-4xl w-[650px]">
        <p className="p-4">{description}</p>
      </div>
      <div className="border w-[650px] -ml-[200px] h-20 cursor-pointer border-[#ae9ce5] rounded-4xl">
        <Image src={imageSrc} alt={imageAlt} width={300} height={300} />
        <a href={link}></a>
      </div>
    </div>
  );
};

export default ProjectCard;
