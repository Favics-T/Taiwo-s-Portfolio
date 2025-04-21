'use client'
import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link'


const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });


const Nav = () => {
  return (
    <div className='shadow-2xs py-10 px-10  bg-[#12081f] text-white '>

        <div className='flex justify-between'>
            {/* Logo */}

            <div>
              <Link href='/'><h1 className={`${playfair.variable} font-sans text-[20px] font-extrabold text-[#FF7AC3 `}>{"<Taiwo />"}</h1></Link>  
            </div>

            {/* header components */}
            <ul className='grid grid-cols-3 gap-4'>
      <Link href='/about'><li className='hover:text-[#7F5AF0] hover:font-bold'>About</li></Link>  
      <Link href='/projects'><li className='hover:text-[#7F5AF0] hover:font-bold'>Projects</li></Link>  
      <Link href='/contact'><li className='hover:text-[#7F5AF0] hover:font-bold'>Contact</li></Link>  
             </ul>

      <div>
      <Link href="/resume"><h1> Resume</h1></Link>  
      </div>
        </div>
      
    
    </div>
  )
}

export default Nav
