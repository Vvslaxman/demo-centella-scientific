import { BrowserRouter } from "react-router-dom";

import { About, Contact, Workss, Team, Hero,Navbar, Perk, Offerings, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        </div>
        <About />
        <Workss />
        <Offerings />
        <Perk />
      
        
        <Team />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
