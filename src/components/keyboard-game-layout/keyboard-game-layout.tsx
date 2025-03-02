import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const KeyboardGameLayout = ({
  onKeyClick,
  targetKey,
}: {
  onKeyClick?: (key: string) => void;
  targetKey: string;
}) => {
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
  const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
  const spaceKey = " ";

  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [wrongKey, setWrongKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setPressedKey(key);
      onKeyClick?.(key); // Pass key press to parent

      if (key === targetKey) {
        setWrongKey(null);
      } else {
        setWrongKey(key); // Wrong key pressed
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
      setWrongKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey, onKeyClick]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start from bottom
      animate={{ opacity: 1, y: 0 }} // Move to normal position
      exit={{ opacity: 0, y: 100 }} // Exit smoothly
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      className="text-[#646669] text-xl parent-container"
    >
      {[row1, row2, row3].map((row, rowIndex) => (
        <ul key={rowIndex} className="flex gap-2 justify-center mb-2">
          {row.map((char) => (
            <motion.div
              key={char}
              onClick={() => onKeyClick?.(char)} // Handle click event
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`px-6 py-4 rounded-lg transition-all duration-200 cursor-pointer ${
                pressedKey === char
                  ? wrongKey === char
                    ? "bg-[#ca4754] scale-110" // ❌ Wrong Key - Red
                    : "bg-[#bb86fc] scale-110" // ✅ Correct Key - Purple
                  : char === targetKey
                  ? "bg-gray-400 animate-pulse" // 🔹 Target Key - Blue Glow
                  : "bg-[#2c2e31]" // Default
              }`}
            >
              {char}
            </motion.div>
          ))}
        </ul>
      ))}

      {/* Spacebar Key */}
      <ul className="flex justify-center">
        <motion.div
          key="space"
          onClick={() => onKeyClick?.(spaceKey)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`px-16 py-4 rounded-xl transition-all duration-200 cursor-pointer ${
            pressedKey === spaceKey
              ? wrongKey === spaceKey
                ? "bg-[#ca4754] scale-110" // ❌ Wrong Key - Red
                : "bg-[#bb86fc] scale-110" // ✅ Correct Key - Purple
              : spaceKey === targetKey
              ? "bg-[#3a86ff] animate-pulse scale-110" // 🔹 Target Key - Pulse & Scale
              : "bg-[#2c2e31]" // Default
          }`}
        >
          space
        </motion.div>
      </ul>
    </motion.div>
  );
};

export default KeyboardGameLayout;
