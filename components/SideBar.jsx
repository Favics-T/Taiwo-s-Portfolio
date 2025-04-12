import { FaTwitter,FaLinkedinIn  } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";



const Sidebar = () => {
  return (
    <div className=' h-screen relative w-40 text-[#FF7AC3] '>
      <div className="absolute ml-4  bottom-20 grid gap-2 items-center ">
    <a href="https://github.com/Favics-T"><FiGithub className="text-2xl "/></a>  
     <a href="www.linkedin.com/in/
faith-kolapo-91615230b"><FaLinkedinIn  className="text-2xl "/></a> 
      <FaTwitter className="text-2xl text-[#FF7AC3]"/>

      <div className="bg-[#FF7AC3] ml-2 h-[120px] w-[1.5px]"></div>
      </div>
      

    </div>
  )
}

export default Sidebar
