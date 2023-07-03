import {motion} from 'framer-motion';
import { styles } from '../styles';
import { SoccerCanvas } from './canvas';
import {github} from '../assets';
import linkedinwhite from '../assets/linkedinwhite.png';
import resumewhite from '../assets/resumewhite.png';
import IgnazioPerezResume  from '../assets/IgnazioPerezResume.pdf';


const buttonclass1 = "relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white";
const buttonclass2 = "absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50";
const buttonclass3 = "absolute left-0 w-48 h-48 -ml-2  sm:w-24 sm:h-24 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease";

const Button = (input) => (
  <button>
              <a href={input.href} className="relative inline-block text-lg group" download={input.href == "IgnazioPerezResume.pdf" ? "IgnazioPerezResume" : "" }>
              <span className={`${buttonclass1}`}>
                <span className={`${buttonclass2}`}></span>
                <span className={`${buttonclass3}`}></span>
                <span className="relative">{input.text}</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
  </button>
)

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex ${styles.paddingX} flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF69B4]' />
          <div className='w-1 sm:h-80 h-40 pink-gradient'/>
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FF69B4]'>Ignazio.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 break-words`}>
            I'm a fullstack software developer, poker enthusiast, sneakerhead, and avid soccer player. <br className='sm:block hidden' />
            I'm currently majoring in <span className='text-[#FF69B4]'> Computer Science</span> at Cornell University 
            while minoring in <span className='text-[#FF69B4]'>Business </span> 
            as well as <span className='text-[#FF69B4]'>Operations Research and Management Science</span>.<br className='sm:block hidden' />
          </p>
          <div className='flex flex-col space-between gap-2 mt-5 '>
            <div className= "py-5 flex flex-row content-start gap-x-2">
              <div className="flex flex-col gap-y-2 items-center">
                <Button text="Resume" href={IgnazioPerezResume}/>
                <a href={IgnazioPerezResume} download="IgnazioPerezResume">
                <img src={resumewhite} alt="LinkedIn"className="w-9 h-9 object-contain" />
                </a>     
              </div>
          
                <div className="flex flex-col gap-y-2.5 items-center">
                    <Button text="LinkedIn" href="https://www.linkedin.com/in/ignazio-perez-romero-08833b1b3/"/>
                    <a href= "https://www.linkedin.com/in/ignazio-perez-romero-08833b1b3/">
                    <img src={linkedinwhite} alt="LinkedIn"className="w-8 h-8 object-contain" />
                    </a>
                </div>
          
              <div className="flex flex-col gap-y-2 items-center">
                <Button text="GitHub" href="https://github.com/ignaziopr"/>
                <a href="https://github.com/ignaziopr">
                <img src={github} alt="GitHub"className="w-9 h-9 object-contain" />
                </a>
              </div>
            
            </div>
          </div>
          
          </div>



      </div>


    </section>

  )
}


export default Hero


//ENSURE SMALLER SIZE COMPATIBILITY