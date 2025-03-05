import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

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
  const getUserInput = useAppSelector((state) => state.typingWords.value) || "";
  // Adjust character & line height based on actual rendering
  const charWidth = 18.5; // Width of a single character
  const spaceWidth = 20; // Width of a space
  const lineHeight = 40; // Line height for wrapping

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      let totalWidth = 0;

      // Loop through user input to calculate width
      for (let i = 0; i < position; i++) {
        totalWidth += getUserInput[i] === " " ? spaceWidth : charWidth;
      }

      // Check if caret should wrap to next line
      const caretLine = Math.floor(totalWidth / containerWidth);
      const adjustedX = totalWidth % containerWidth;
      const adjustedY = caretLine * lineHeight;

      setCaretX(adjustedX);
      setCaretY(adjustedY);
    }
  }, [position, containerRef, getUserInput]);

  return (
    <motion.div
      animate={{
        opacity: isFocused ? [1, 0, 1] : 0, // Blinking effect
        x: caretX,
        y: caretY,
      }}
      transition={{
        opacity: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
        x: { type: "spring", stiffness: 100 },
        y: { type: "spring", stiffness: 100 },
      }}
      className="absolute top-1 w-[2px] bg-[#bb86fc] rounded-sm h-10"
    />
  );
};

export default Caret;
