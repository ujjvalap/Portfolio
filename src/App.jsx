import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Profile,
<<<<<<< HEAD
  Education
} from "./components";

=======
  Education,
  Certificates
  
} from "./components";


>>>>>>> old-history
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Stars only once in background */}
        <StarsCanvas />

        <div className="relative z-10 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Experience />
          <Tech />
          <Works />
<<<<<<< HEAD
          <Profile />
          <Feedbacks />
=======
           <Feedbacks />
          <Profile />
          <Certificates/>
>>>>>>> old-history
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
