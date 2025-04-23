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

<div className=" h-96 w-[700px] my-10 shadow-lg rounded-3xl">

<div className="flex">

  <div>
    <h1>Hire me</h1>
{/* form */}
    <div>
      <label htmlFor="">Full Name:</label>
      <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-black w-[320px] rounded-md mr-2 p-1 border border-pink-100"
              />

    </div>
  </div>
 
  <div>
<ul>
  <li>Phone</li>
  <li>Email</li>
</ul>
  </div>

</div>
</div>
      
    </div>
  )
}

export default Contact
