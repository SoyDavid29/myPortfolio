import HelloBtn from "./Components/HelloBtn"
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
      <HelloBtn />

      <main className="pt-20">
        <Hero />
        <Projects items={ProjectsDb} />
        <AboutMe />
        <Technologies />
        <Contact />
        <Footer />
      </main>

    </>
  )
}

export default App
