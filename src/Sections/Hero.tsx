import { motion } from "framer-motion";

const Hero: React.FC = () => {
    return (
        <section className="pt-10 flex flex-col items-center justify-center">

            <article className="flex flex-col items-center">

                <div className="relative flex items-center justify-center mb-8">

                    {/* --- THE PULSING RINGS --- */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-green-400/45"
                            style={{ width: "128px", height: "128px" }}
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{
                                scale: 2.5,     // Makes the pulse reach further out
                                opacity: 0,     // Fades away as it hits the edge
                            }}
                            transition={{
                                duration: 3,             // Total time for one wave
                                repeat: Infinity,
                                delay: i * 1,            // Creates the "one after another" gap
                                ease: [0.16, 1, 0.3, 1], // This "Bezier" curve makes it pop then slow down
                            }}
                        />
                    ))}

                    {/* --- THE STATIC IMAGE --- */}
                    <img
                        className="relative z-10 w-32 h-32 rounded-full bg-white object-cover"
                        src="/img/perfil-yellow.jpg"
                        alt="photo of David"
                    />
                </div>

                <h2 className="font-poppins font-semibold text-xl">Jr. Developer</h2>
                <h2 className="font-poppins font-semibold text-lg text-gray-600">And UX/UI Designer</h2>
            </article>

            <article className="pt-5 px-7 max-w-2xl">
                <p className="font-poppins font-semibold text-center text-lg">
                    Hello everyone, my name is David Rodriguez
                </p>
                <p className="font-poppins font-medium text-center leading-relaxed">
                    I am a passionate person who loves Design. I turn ideas into
                    solid websites and applications. Currently, I've been working
                    as a freelancer and I've collaborated on exciting projects.
                </p>
            </article>
            
        </section>
    );
};

export default Hero;