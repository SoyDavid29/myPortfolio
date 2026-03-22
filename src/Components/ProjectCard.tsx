import type { Project } from "../db/ProjectsDb";

import typescript from "../assets/typescriptlogo.png";
import react from "../assets/reactlogo.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/githublogo.png";
import www from "../assets/wwwlogo.png";

const ProjectCard: React.FC<Project> = ({ img, tittle, description, link }) => {

    return (
        <aside className="flex flex-col w-10/12 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl shadow-black/20 p-6 rounded-2xl gap-5">

            <div className="flex justify-between items-center">
                <div className="flex jaustify-start gap-2">
                    <img className="w-4.5 h-4.5"  src={typescript} alt="" />
                    <img className="w-5 h-5"  src={react} alt="" />
                    <img className="w-8 h-4.5" src={tailwind} alt="" />
                </div>

                <div className="flex items-center gap-2">
                    <img  className="w-4.5 h-4.5 text-amber-50" src={github} alt="" />
                    <a href={link}><img className="w-8 h-8 animate-wiggle object-cover" src={www} alt="" /></a>
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