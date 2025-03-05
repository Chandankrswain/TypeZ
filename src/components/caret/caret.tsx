import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const Caret = ({
  position,
  isFocused,
  containerRef,
}: {
  position: number;
  isFocused: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const [caretX, setCaretX] = useState(0);
  const [caretY, setCaretY] = useState(0);
  const charWidth = 18; // Approximate character width in px
  const lineHeight = 40; // Approximate line height in px

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const charsPerLine = Math.floor(containerWidth / charWidth);

      const newX = (position % charsPerLine) * charWidth;
      const newY = Math.floor(position / charsPerLine) * lineHeight;

      setCaretX(newX);
      setCaretY(newY);
    }
  }, [position, containerRef]);

  return (
    <motion.div
      animate={{
        opacity: isFocused ? [1, 0.4, 1] : 0,
        x: caretX,
        y: caretY,
        scaleY: isFocused ? [1, 1.3, 1] : 1,
      }}
      transition={{
        opacity: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
        scaleY: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
        x: { type: "spring", stiffness: 150, damping: 10 },
        y: { type: "spring", stiffness: 100, damping: 10 },
      }}
      className="absolute w-1 bg-[#bb86fc] rounded-sm"
      style={{ height: `${lineHeight}px` }}
    />
  );
};

export default Caret;
