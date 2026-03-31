import ProjectCard from "../Components/ProjectCard";
import type { Project } from "../db/ProjectsDb";

interface ProjectProps {
    items: Project[];
}
const Projects: React.FC<ProjectProps> = ({ items }) => {
    return (
        <section id="projects" className="pt-10 flex flex-col items-center justify-center gap-6">

            <div className="lg:px-25">
                <h2 className="font-poppins font-semibold text-2xl text-center mb-5 px-5">PROJECTS</h2>
                <h2 className="font-poppins font-semibold text-2xl text-center mb-5 px-5">Where The Ideas Come To Life</h2>
                <p className="font-poppins text-center mb-5 px-5">Every project starts with a question: How can this feel intuitive, beautiful, and fast? I begin in Figma, shaping ideas into clean designs, then bring them to life using React and TypeScript for solid, scalable interfaces. I style every detail with Tailwind CSS and connect everything to reliable databases with SQL and MongoDB. These aren't just projects — they're problems I loved solving.</p>
            </div>


            {items.map((card) => (
                <ProjectCard key={card.id} {...card} />
            ))}

        </section>
    );
}
export default Projects;