const AbautMe: React.FC = () => {
    return (
        <section className="pt-10 px-10 flex flex-col items-center justify-center gap-5" id="aboutme">

            <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
                <img className="w-5/12 h-auto" src="src/assets/perfil2.png" alt="perfil photo" />
                <h2 className="font-poppins font-semibold text-2xl text-center">David</h2>
                <h2 className="flex items-center gap-2 justify-center font-poppins font-semibold text-2xl text-center"><span><img className="w-2.5 h-3.5" src="src/assets/mapsIcon.png" alt="maps icon" /></span>Durango, Mexico.</h2>
            </div>

            <p className="text-lg font-poppins font-semibold text-center max-w-2xl px-5">
                I'm currently finishing my degree in Computer Systems Technology, where I discovered my passion for building things for the web. I enjoy working on both the frontend and backend, turning ideas into real, functional applications. I'm looking for my first opportunity to grow as a developer and contribute to a real team.
            </p>

            <div className="w-full h-auto flex justify-between items-center px-5">
                <a href="https://www.linkedin.com/in/david-hernandez-ortiz/"><img className="w-16 h-4 animate-wiggle" src="src/assets/linkedinlogo.png" alt="linkedin logo" /></a>
                <a href="https://www.linkedin.com/in/david-hernandez-ortiz/"><img className="w-4 h-4 animate-wiggle" src="src/assets/gmaillogo.png" alt="gmail logo" /></a>
            </div>

        </section>
    );
};

export default AbautMe;