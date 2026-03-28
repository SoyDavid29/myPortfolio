import { useState, useEffect, useRef } from "react";
import clickIcon from "../assets/clickon.png";

const useIsLg = () => {
    const [isLg, setIsLg] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(min-width: 932px)");
        setIsLg(media.matches);
        const listener = (e: MediaQueryListEvent) => setIsLg(e.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);
    return isLg;
};

const HelloBtn: React.FC = () => {

    const [view, setView] = useState(false);
    const isLg = useIsLg();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setView(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            ref={navRef}
            onClick={() => setView(!view)}
            className={`bg-black text-white font-poppins font-semibold cursor-pointer
        rounded-xl shadow-lg flex items-center justify-center
        transition-all duration-500 ease-in-out 
        ${isLg
                    ? view ? "w-9/12 flex-row" : "w-40 flex-row"
                    : "w-40 flex-col"
                }`}
            style={{ minHeight: "2.5rem" }}

        >
            {/* INITIAL STATE — label */}
            <div className={`flex items-center justify-center py-2 px-4 shrink-0
                transition-all duration-200 ease-in-out
                ${view && isLg
                    ? "opacity-100 translate-x-0 max-h-20"
                    : !view && !isLg
                        ? "opacity-100 translate-x-0 max-h-20"
                        : view && !isLg
                            ? "opacity-0  max-h-0 overflow-hidden pointer-events-none"
                            : "opacity-100  max-h-20"
                }`}
            >
                Hey there!
                <span className="ml-2">
                    <img src={clickIcon} alt="logo click" className="w-3 h-4" />
                </span>
            </div>

            {/* ACTIVE STATE — links */}
            <div className={`flex text-center
                transition-all duration-500 ease-in-out
                ${isLg ? "flex-row w-full justify-around" : "flex-col w-full"}
                ${view
                    ? "opacity-100 max-h-60 max-w-full"
                    : "opacity-0   max-h-0 max-w-0 overflow-hidden pointer-events-none"
                }`}
            >
                <a href="#start" onClick={(e) => handleScroll(e, "start")} className="py-2 px-3 hover:bg-zinc-800 hover:rounded-xl transition-colors whitespace-nowrap">Start</a>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="py-2 px-3 hover:bg-zinc-800 hover:rounded-xl transition-colors whitespace-nowrap">Contact</a>
                <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="py-2 px-3 hover:bg-zinc-800 hover:rounded-xl transition-colors whitespace-nowrap">Projects</a>
                <a href="#aboutme" onClick={(e) => handleScroll(e, "aboutme")} className="py-2 px-3 hover:bg-zinc-800 hover:rounded-xl transition-colors whitespace-nowrap">About me</a>
            </div>
        </div>
    );
}

export default HelloBtn;