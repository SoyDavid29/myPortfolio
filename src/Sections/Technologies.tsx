import html from "../assets/logohtml.png";
import css from "../assets/csslogo.png";
import javascript from "../assets/javascriptlogo.png";
import react from "../assets/reactlogo.png";
import typescript from "../assets/typescriptlogo.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/githublogo.png";
import git from "../assets/gitlogo.png";
import figma from "../assets/figmalogo.png";
import postgress from "../assets/postgre-sqllogo.png";


const Technologies: React.FC = () => {
    return (
        <section className="mt-10 pt-10 px-10 flex flex-col items-center justify-center gap-5 bg-[#FEE349] shadow-lg " id="technologies">
            <h2 className="font-poppins font-semibold text-2xl text-center">My Tech Stack</h2>
            <h3 className="font-poppins font-normal text-lg text-center">Here are the technologies and tools I've been working with. I'm always learning and expanding my stack.</h3>
            <div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
                <img className="w-10 h-13" src={html} alt="html icon" />
                <img className="w-16 h-16" src={css} alt="css icon" />
                <img className="w-12 h-12" src={javascript} alt="javascript icon" />
                <img className="w-14 h-14" src={react} alt="react icon" />
                <img className="w-12 h-12" src={typescript} alt="typescript icon" />  
                <img className="w-16 h-8" src={tailwind} alt="tailwind icon" />  
                <img className="w-12 h-12" src={github} alt="github icon" />  
                <img className="w-16 h-16" src={git} alt="git icon" />  
                <img className="w-12 h-12" src={figma} alt="figma icon" />  
                <img className="w-16 h-16" src={postgress} alt="postgres-sql icon" />  
            </div>
        </section>
    );                  
};

export default Technologies;