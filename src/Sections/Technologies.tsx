import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

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

// Each logo gets a unique "scattered" starting position
const logoVariants = [
    { x: -200, y: -150, rotate: -45 },
    { x: 300, y: -100, rotate: 60 },
    { x: -150, y: 200, rotate: 30 },
    { x: 250, y: 180, rotate: -70 },
    { x: -300, y: 50, rotate: 90 },
    { x: 200, y: -200, rotate: -30 },
    { x: -100, y: 250, rotate: 50 },
    { x: 350, y: 100, rotate: -60 },
    { x: -250, y: -80, rotate: 75 },
    { x: 100, y: 300, rotate: -90 },
];

// The container controls the stagger timing for its children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08, // seconds between each logo animation
        },
    },
};

// Each logo animates from its scattered position to its flex position (x:0, y:0)
const itemVariants: Variants = {
    hidden: (scatter: { x: number; y: number; rotate: number }) => ({
        x: scatter.x,
        y: scatter.y,
        rotate: scatter.rotate,
        opacity: 0,
    }),
    visible: (_scatter: { x: number; y: number; rotate: number }) => ({
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 14,
        },
    }),
};

const logos = [
    { src: html, alt: "html icon", className: "w-10 h-13" },
    { src: css, alt: "css icon", className: "w-16 h-16" },
    { src: javascript, alt: "javascript icon", className: "w-12 h-12" },
    { src: react, alt: "react icon", className: "w-14 h-14" },
    { src: typescript, alt: "typescript icon", className: "w-12 h-12" },
    { src: tailwind, alt: "tailwind icon", className: "w-16 h-8" },
    { src: github, alt: "github icon", className: "w-12 h-12" },
    { src: git, alt: "git icon", className: "w-16 h-16" },
    { src: figma, alt: "figma icon", className: "w-12 h-12" },
    { src: postgress, alt: "postgres-sql icon", className: "w-16 h-16" },
];

const Technologies: React.FC = () => {
    const ref = useRef(null);

    // once: false → re-triggers the animation every time it enters/leaves view
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section
            className="mt-10 pt-10 px-10 flex flex-col items-center justify-center gap-5 bg-[#FEE349] shadow-lg"
            id="technologies"
        >
            <h2 className="font-poppins font-semibold text-2xl text-center">
                My Tech Stack
            </h2>
            <h3 className="font-poppins font-normal text-lg text-center">
                Here are the technologies and tools I've been working with. I'm always
                learning and expanding my stack.
            </h3>

            {/* This motion.div is the "conductor" — it controls the stagger */}
            <motion.div
                ref={ref}
                className="w-full h-auto flex items-center justify-center gap-5 flex-wrap pb-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {logos.map((logo, index) => (
                    <motion.img
                        key={logo.alt}
                        className={logo.className}
                        src={logo.src}
                        alt={logo.alt}
                        custom={logoVariants[index]}  // 👈 pass scatter data here
                        variants={itemVariants}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default Technologies;