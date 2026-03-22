import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CarouselProps = {
    images: string[];
};

export default function PhotoCard({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);

    // auto-loop every 4 seconds
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <div
            style={{
                position: "relative",
                width: "70%",
                height: "600px",
                overflow: "hidden",
            }}
        >
            {images.map((src, i) => {
                const relative = (i - index + images.length) % images.length;

                let x = 0;
                let rotate = 0;
                let zIndex = 0;

                if (relative === 0) {
                    // Center image
                    x = 0;
                    rotate = 0;
                    zIndex = 3;

                } else if (relative === 1) {
                    // Next image → right + tilt
                    x = 500;
                    rotate = 180;
                    zIndex = 2;

                } else if (relative === images.length - 1) {
                    // Previous image → left + tilt
                    x = -500;
                    rotate = -180;
                    zIndex = 1;

                } else {
                    // ✅ All in-between images → hidden off screen to the right
                    x = 500;
                    rotate = 180;
                    zIndex = 0;
                }

                // ✅ Only show center, right, and left images
                const isVisible =
                    relative === 0 ||
                    relative === 1 ||
                    relative === images.length - 1;

                return (
                    <motion.img
                        key={i}
                        src={src}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex,
                        }}
                        animate={{ x, rotate, opacity: isVisible ? 1 : 0 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                        }}
                    />
                );
            })}
        </div>
    );
}