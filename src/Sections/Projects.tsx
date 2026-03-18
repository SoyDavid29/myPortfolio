import ProjectCard from "../Components/ProjectCard";
import type { Project } from "../db/ProjectsDb";

interface ProjectProps{
    items: Project[];
}
const Projects: React.FC<ProjectProps> = ({items}) => {
    return (
        <section className="pt-10 flex flex-col items-center justify-center gap-6">
            <h2 className="font-poppins font-semibold text-2xl text-center mb-5 px-5">Right Here A Few  Projects that  I've worked</h2>

            {items.map((card) => (
                <ProjectCard key={card.id} {...card}/>
            ))} 
            
        </section>
    );
}
export default Projects;