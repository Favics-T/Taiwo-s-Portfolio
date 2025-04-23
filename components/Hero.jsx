import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });


const Hero = () => {
  return (
    <div className='p-6 mt-12 md:w-[1000p] text-gray-300 flex flex-col gap-4 '>
        <h1 className=" font-bold text-[#7F5AF0] ">Hi, my name is</h1>
        <h1 className="text-5xl font-bold ">Kolapo Faith Taiwo.</h1>
        <h1 className="text-3xl font-bold">Frontend Web Developer</h1>

        <h1 className="text-[18px]">
        I am a Dedicated and detail-oriented Frontend Web Developer with a strong foundation in web development and a passion
         for creating user-friendly, innovative solutions. Seeking an opportunity to apply and grow technical skills in a challenging Frontend Web Development role.
        Thousands of paperwork were scraped after I built a robust web application that business owners use to track customer credits and finances.
89% increase in active users after optimizing the performance and UI of a job board software.
145 new clients for a local vendor by building a visually pleasing landing page with fast load times.
This is the kind of results you get when I work on your projects. Your webiste sell your Ideas / products to different people online, it is important that you get it right.
With years of experience in building fast, responsive, robust and visually appealing websites. I will build websites that will take your business from 0 to 1.
If you need a perfect hands handling your software solutions, kindly shoot me a mail by clicking the button below.
            </h1>

            <h1 className="cursor-pointer bg-[#7f5af0 bg-[#FF7AC3] text-center p-2 rounded-lg shadow-lg hover:bg-[#965478] w-40">
              <Link href='/contact'>Get in Touch</Link>
              </h1>
      
    </div>
  )
}

export default Hero
