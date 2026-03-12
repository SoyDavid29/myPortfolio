import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CarouselProps = {
    images: string[];
};

export default function PhotoCard({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);

    // auto-loop every 2 seconds
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
                // Calculate relative position
                const relative = (i - index + images.length) % images.length;

                // Position states:
                // 0 → center
                // 1 → right tilted
                // 2 → left tilted
                // (for more images, it keeps cycling)

                let x = 0;
                let rotate = 0;
                let zIndex = 0;

                if (relative === 0) {
                    // Center image
                    x = 0;
                    rotate = 0;
                    zIndex = 3;

                    /* states of figma animation */

                } else if (relative === 1) {
                    // Next image → right + tilt
                    x = 500;
                    rotate = 180;
                    zIndex = 2;
                } else if (relative === images.length - 1) {
                    // Previous image → left - tilt
                    x = -500;
                    rotate = -180;
                    zIndex = 1;
                } else {
                    // Everything else stays hidden far away
                    x = -500;
                    rotate = -180;
                    zIndex = 0;
                }

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
                        animate={{ x, rotate, opacity: relative > 2 ? 0 : 1 }}
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
