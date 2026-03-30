import NavBar from "./Components/NavBar"
import Hero from "./Sections/Hero"
import Projects from "./Sections/Projects"
import ProjectsDb from "./db/ProjectsDb"
import AboutMe from "./Sections/AboutMe"
import Technologies from "./Sections/Technologies"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"

function App() {

  return (
    <>


      <main className="pt-20">
        <NavBar />
        <Hero />
        <Projects items={ProjectsDb} />

        <div className="lg:flex lg:bg-[#FEE349] lg:px-25">
          <AboutMe />
          <Technologies />
        </div>

        <Contact />
        <Footer />
      </main>

    </>
  )
}

export default App
