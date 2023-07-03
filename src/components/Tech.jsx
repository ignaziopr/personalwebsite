import {BallCanvas} from './canvas';
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";

const Tech = () => {
  return (
    <div className= "flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        
      <div className="w-24 h-24" key={tech.name}>
        <BallCanvas icon={tech.icon} />
      
      </div>
      
      ))}
    
    </div>
  )
}

const background = "";

export default SectionWrapper(Tech, "tech", background);