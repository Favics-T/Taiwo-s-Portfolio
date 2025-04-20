'use client'
import { useState } from 'react';
import { jsPDF } from 'jspdf';

const ResumePage = () => {
  // Dummy resume data
  const resumeData = {
    name: "Kolapo Faith Taiwo.",
    email: "taiwopersonal24@example.com",
    skills: "JavaScript, React, Next.js, HTML, CSS, Node.js,Excellent communication",
    experience: "Frontend Intern at Afriment, 2024-present ",
  };

  const handleDownload =()=>{
   const link = document.createElement('a');
    link.href = '/MyResume.pdf';  
    link.download = 'TaiwoKolapo.pdf';  
    link.click();  
  }

  // Function to generate PDF
  const generatePDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text(resumeData.name, 20, 30);
    doc.setFontSize(16);
    doc.text(resumeData.email, 20, 40);

    doc.setFontSize(18);
    doc.text('Skills', 20, 50);
    doc.setFontSize(14);
    doc.text(resumeData.skills, 20, 60);

    doc.setFontSize(18);
    doc.text('Education', 20, 80);
    doc.setFontSize(14);
    doc.text(resumeData.education, 20, 90);

    doc.setFontSize(18);
    doc.text('Experience', 20, 110);
    doc.setFontSize(14);
    doc.text(resumeData.experience, 20, 120);

    // Save the resume as PDF
    doc.save('Taiwo_Resume.pdf');
  };

  return (
    <div className="p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">{resumeData.name}</h1>
      <p>{resumeData.email}</p>


      <h2 className="text-lg font-semibold">Skills</h2>
      <p>{resumeData.skills}</p>

      <h2 className="text-lg font-semibold">Education</h2>
      <p>{resumeData.education}</p>

      <h2 className="text-lg font-semibold">Experience</h2>
      <p>{resumeData.experience}</p>

      {/* Button to download PDF */}
      {/* <button
        onClick={generatePDF}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Download Portfolio Resume 
      </button> */}

     <a href="/MyResume.pdf"
     download='TaiwoKolapoResume'><button onClick={handleDownload} className='bg-[#FF7AC3] p-2 rounded-lg cursor-pointer hover:bg-[#AC1754]'>Download Resume</button></a> 
    </div>
  );
};

export default ResumePage;
