import { motion } from "framer-motion";
import home from "../assets/homeicon.png"

const HomeBtn: React.FC = () => {
    return (
        <motion.button
            className="hidden cursor-pointer p-4 bg-white/30 backdrop-blur-lg rounded-full shadow-2xl lg:flex"
            onClick={() => document.getElementById("start")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
            <motion.img
                className="h-6 w-6"
                src={home}
                alt="home icon"
                whileHover={{ rotate: -15 }}
                transition={{ type: "spring", stiffness: 400 }}
            />
        </motion.button>
    );
};

export default HomeBtn;