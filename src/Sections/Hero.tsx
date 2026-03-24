import { motion, useScroll, useTransform } from "framer-motion";
import PhotoCard from "../Components/PhotoCard";
import { useRef } from "react";

import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";


const images = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
];

const Hero: React.FC = () => {

    //scroll animation on CEO tittle
    const tittleRef = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: tittleRef,
        offset: ["start end", "end start"], // element start to end relative to viewport
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // 1 → 2
    const opacity = useTransform(scrollYProgress, [0.9, 1, 1], [1, 0.2, 0]); // 1 → 0.4 → 0 


    return (
        <section className="pt-10 flex flex-col items-center justify-center" id="start">

            <article className="flex flex-col items-center">

                <div className="relative flex items-center justify-center mb-8">

                    {/* --- THE PULSING RINGS --- */}
                    {[0, 1, 2, 3].map((i) => (
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
                    I'm a web developer with 3+ years of experience, passionate about crafting powerful, responsive websites and applications. Currently focused on Frontend development and UI/UX Design, using the latest technologies to build experiences that look great on any device
                </p>
            </article>

            <article className="flex flex-col items-center justify-center w-full gap-4 mt-4">

                <motion.h1 className="font-poppins font-semibold text-gray-400 sm:text-1xl md:text-3xl lg:text-4xl text-center px-4"
                    ref={tittleRef}
                    style={{ scale, opacity }}
                >Interfaces That Work on Every Screen
                </motion.h1>

                <a className="bg-yellow-300 rounded-lg shadow-lg flex justify-center items-center font-poppins font-semibold px-4 py-2.5" href="#projects">Take a look!!</a>

                <PhotoCard images={images} />

            </article>

        </section>
    );
};

export default Hero;