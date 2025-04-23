"use client"
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  //   details: '',
  // });

  const [formData,setFormData] = useState({
    name:"",
    email:"",
   phone:"",
    address:"",
    details:"",
      })
  const [message, setMessage] = useState('');

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.details) {
          setMessage('Please fill in all required fields.');
          return;
        }
        setMessage('Message Received. We will get back to you soon!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          details: '',
        });
      };

  return (
    <div className="flex justify-center items-center text-white">

<div className="mx-10 shadow-2xl rounded-2xl bg-[#0f051b] px-6  py-10 ">

<div className="flex gap-10">

  <div className="flex flex-col gap-10 w-3/4">
    <div className="flex flex-col gap-2">
    <h1 className={`text-4xl font-semibold  text-[#FF7AC3]`}>Hire me</h1>
    <p className="text-[12px]">
    Thank you for your interest in working with me! Please provide details about the role, project, or opportunity, including any specific requirements or timelines. I’ll get back to you promptly.
    </p>
    </div>
   
{/* form */}
    <div className="w-full flex flex-col gap-4">

      <div className="flex gap-10 w-full">
      <input
                type="text"
                name="name"
                placeholder="Name.."
                value={formData.name}
                onChange={handleInputChange}
                className=" w-[320px] rounded-md  p-1 border border-[#FF7AC3] "
              />

<input
                type="text"
                name="name"
                placeholder="Email.."
                value={formData.name}
                onChange={handleInputChange}
                className=" w-[320px] rounded-md  p-1 border border-[#FF7AC3] "
              />
      </div>

      <div className="flex gap-10 w-full">
      <input
                type="text"
                name="name"
                placeholder="Phone.."
                value={formData.phone}
                onChange={handleInputChange}
                className=" w-[320px] rounded-md  p-1 border border-[#FF7AC3] "
              />

<input
                type="text"
                name="name"
                placeholder="Address.."
                value={formData.address}
                onChange={handleInputChange}
                className=" w-[320px] rounded-md  p-1 border border-[#FF7AC3] "
              />
      </div>

      <div>
        <textarea 
            type="text"
            name="details"
            onChange={handleInputChange}
            value={formData.details}
            placeholder="Detailed Details...."
            className="border border-[#FF7AC3] w-3/4 h-40 p-2 rounded-2xl"
        />
      </div>

      <div>
        <button className="bg-[#ff3ba7] hover:bg-[#ff3b45] cursor-pointer rounded-xl w-full text-center text-[19px] "
        onClick={handleSubmit}>Submit</button>
      </div>

           

    </div>
  </div>
 
  <div>
<ul className="flex flex-col mt-10 gap-4">
  <div className="flex gap-4">
    <div className="bg-[#FF7AC3] p-2 flex justify-center items-center">
    <FaPhone className=" text-2xl"/>
    </div>
    <div>
    <h1>Phone</h1>
    <p>+234 9063288467</p>
    </div>
    </div>

    <div className="flex gap-4">
    <div className="bg-[#FF7AC3] p-2 flex justify-center items-center">
    <MdEmail className=" text-2xl"/>
    </div>
    <div>
    <h1>Email</h1>
    <p>taiwopersonal24@gmail.com</p>
    </div>
    </div>
</ul>
  </div>

</div>
</div>
      
    </div>
  )
}

export default Contact
