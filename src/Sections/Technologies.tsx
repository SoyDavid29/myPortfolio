const Technologies: React.FC = () => {
    return (
        <section className="mt-10 pt-10 px-10 flex flex-col items-center justify-center gap-5 bg-[#FEE349] shadow-lg " id="technologies">
            <h2 className="font-poppins font-semibold text-2xl text-center">My Tech Stack</h2>
            <h3 className="font-poppins font-normal text-lg text-center">Here are the technologies and tools I've been working with. I'm always learning and expanding my stack.</h3>
            <div className="w-full h-auto flex items-center justify-center gap-5 flex-wrap">
                <img className="w-10 h-13" src="src/assets/logohtml.png" alt="html icon" />
                <img className="w-16 h-16" src="src/assets/csslogo.png" alt="css icon" />
                <img className="w-12 h-12" src="src/assets/javascriptlogo.png" alt="javascript icon" />
                <img className="w-14 h-14" src="src/assets/reactlogo.png" alt="react icon" />
                <img className="w-12 h-12" src="src/assets/typescriptlogo.png" alt="typescript icon" />  
                <img className="w-16 h-8" src="src/assets/tailwind.png" alt="tailwind icon" />  
                <img className="w-12 h-12" src="src/assets/githublogo.png" alt="github icon" />  
                <img className="w-16 h-16" src="src/assets/gitlogo.png" alt="git icon" />  
                <img className="w-12 h-12" src="src/assets/figmalogo.png" alt="figma icon" />  
                <img className="w-16 h-16" src="src/assets/postgre-sqllogo.png" alt="postgres-sql icon" />  
            </div>
        </section>
    );                  
};

export default Technologies;