import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import clickIcon from "../assets/clickon.png";

const HelloBtn: React.FC = () => {
  const [view, setView] = useState(false);

  return (
    <motion.div
      // This makes the container animate its own height automatically
      layout
      onClick={() => setView(!view)}
      className="bg-black text-white font-poppins font-semibold w-40 cursor-pointer overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center m-auto fixed top-15.5 left-0 right-0 z-99"
      style={{ minHeight: "2.5rem" }} // Equivalent to h-10
    >
      <AnimatePresence mode="wait">
        {!view ? (
          /* INITIAL STATE: The "Button" Label */
          <motion.div
            key="label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center rounded-sm py-2"
          >
            Hey there!
            <span className="ml-2">
              <img src={clickIcon} alt="logo click" className="w-4 h-4" />
            </span>
          </motion.div>
        ) : (
          /* ACTIVE STATE: The 3 Options */
          <motion.div
            key="options"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col w-full text-center"
          >
            <a href="#contact" className="py-2 hover:bg-zinc-800 transition-colors">Contact</a>
            <a href="#projects" className="py-2 hover:bg-zinc-800 transition-colors">Projects</a>
            <a href="#about" className="py-2 hover:bg-zinc-800 transition-colors">About me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HelloBtn;