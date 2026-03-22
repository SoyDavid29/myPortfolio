import perfil from "../assets/perfil2.png";
import maps from "../assets/mapsIcon.png";
import linkedin from "../assets/linkedinLogo.png";
import gmail from "../assets/gmailLogo.png";

const AbautMe: React.FC = () => {
    return (
        <section className="pt-10 px-10 flex flex-col items-center justify-center gap-5" id="aboutme">

            <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
                <img className="w-5/12 h-auto" src={perfil} alt="perfil photo" />
                <h2 className="font-poppins font-semibold text-2xl text-center">David</h2>
                <h2 className="flex items-center gap-2 justify-center font-poppins font-semibold text-2xl text-center"><span><img className="w-2.5 h-3.5" src={maps} alt="maps icon" /></span>Durango, Mexico.</h2>
            </div>

            <p className="text-lg font-poppins font-semibold text-center max-w-2xl px-5">
                I'm currently finishing my degree in Computer Systems Technology, where I discovered my passion for building things for the web. I enjoy working on both the frontend and backend, turning ideas into real, functional applications. I'm looking for my first opportunity to grow as a developer and contribute to a real team.
            </p>

            <div className="w-full h-auto flex justify-between items-center px-5">
                <a href="https://www.linkedin.com/in/soydavidr/"><img className="w-16 h-4 animate-wiggle" src={linkedin} alt="linkedin logo" /></a>
                <a href="mailto:daviswebdesigner@gmail.com"><img className="w-4 h-4 animate-wiggle" src={gmail} alt="gmail logo" /></a>
            </div>

        </section>
    );
};

export default AbautMe;