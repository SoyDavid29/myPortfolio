import HelloBtn from "./Components/HelloBtn"
import Hero from "./Sections/Hero"
import Projects from "./Sections/Projects"
import ProjectsDb from "./db/ProjectsDb"
import AboutMe from "./Sections/AboutMe"
import Technologies from "./Sections/Technologies"
import Contact from "./Sections/Contact"

function App() {

  return (
    <>

      <main className="pt-20">
        <HelloBtn />
        <Hero />
        <Projects items={ProjectsDb}/>
        <AboutMe />
        <Technologies />
        <Contact />
      </main>

    </>
  )
}

export default App
