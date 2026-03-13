import type { Project } from "../db/ProjectsDb";

const ProjectCard: React.FC<Project> = ({ img, tittle, description, link }) => {

    return (
        <aside className="flex flex-col w-10/12 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl shadow-black/20 p-6 rounded-2xl gap-5">

            <div className="flex justify-between items-center">
                <div className="flex jaustify-start gap-2">
                    <img className="w-4.5 h-4.5"  src="src/assets/typescriptlogo.png" alt="" />
                    <img className="w-5 h-5"  src="src/assets/reactlogo.png" alt="" />
                    <img className="w-8 h-4.5" src="src/assets/tailwind.png" alt="" />
                </div>

                <div className="flex items-center gap-2">
                    <img  className="w-4.5 h-4.5 text-amber-50" src="src/assets/githublogo.png" alt="" />
                    <a href={link}><img className="w-7 h-7 animate-wiggle" src="src/assets/wwwlogo.png" alt="" /></a>
                </div>

            </div>

            <div className="flex flex-col gap-2">
                <img className="rounded-lg" src={img} alt="" />
                <h2 className="text-black font-poppins font-semibold">{tittle}</h2>
                <p className="text-black font-poppins">{description}</p>
            </div>

        </aside>
    );

}
export default ProjectCard;