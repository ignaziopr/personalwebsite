import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks,
Hero, Navbar, Works, StarsCanvas, Tech, Images} from './components';

const SizeScreen = () => { 

  return (
    <div className='relative z-0'>
      <div className="block sm:block md:block lg:hidden xl:hidden">
        <Works />
        <Feedbacks />
        <Images />
        <Contact />
      </div>
      <div className="hidden sm:hidden md:hidden lg:block xl:block">
      <div className="relative z-0">
          <Tech />
          <Works />
          <StarsCanvas />
      </div>
      <div className="relative z-0">
        <Feedbacks />
        <Images />
      </div>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
)}



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black ">
        <div className= "bg-black bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <SizeScreen />
      </div>
    </BrowserRouter>
  )
}
export default App
