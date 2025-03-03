import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import keyClickSound from "../../assets/audio-files/src_assets_audio_mxblack_press_GENERIC_R0.mp3"; // Import Sound

export const KeyboardLayout = ({
  onKeyClick,
  targetKey,
  isSoundOn, // Receive sound state
}: {
  onKeyClick?: (key: string) => void;
  targetKey: string;
  isSoundOn: boolean;
}) => {
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
  const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
  const spaceKey = " ";

  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const audio = new Audio(keyClickSound); // ✅ Create an audio object

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setPressedKey(key);
      onKeyClick?.(key);

      if (isSoundOn) {
        audio.currentTime = 0; // ✅ Restart sound if already playing
        audio.play();
      }

      if (key === targetKey) {
        setWrongKey(null);
      } else {
        setWrongKey(key);
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
  }, [targetKey, onKeyClick, isSoundOn]); // Depend on sound toggle

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-[#646669] text-xl parent-container"
    >
      {[row1, row2, row3].map((row, rowIndex) => (
        <ul key={rowIndex} className="flex gap-2 justify-center mb-2">
          {row.map((char) => (
            <motion.div
              key={char}
              onClick={() => {
                onKeyClick?.(char);
                if (isSoundOn) {
                  audio.currentTime = 0; //  Play sound on click
                  audio.play();
                }
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`px-6 py-4 rounded-lg transition-all duration-200 cursor-pointer ${
                pressedKey === char
                  ? wrongKey === char
                    ? "bg-[#ca4754] scale-110"
                    : "bg-[#bb86fc] scale-110"
                  : char === targetKey
                  ? "bg-gray-400 animate-pulse"
                  : "bg-[#2c2e31]"
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
          onClick={() => {
            onKeyClick?.(spaceKey);
            if (isSoundOn) {
              audio.currentTime = 0;
              audio.play();
            }
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`px-16 py-4 rounded-xl transition-all duration-200 cursor-pointer ${
            pressedKey === spaceKey
              ? wrongKey === spaceKey
                ? "bg-[#ca4754] scale-110"
                : "bg-[#bb86fc] scale-110"
              : spaceKey === targetKey
              ? "bg-[#3a86ff] animate-pulse scale-110"
              : "bg-[#2c2e31]"
          }`}
        >
          space
        </motion.div>
      </ul>
    </motion.div>
  );
};

export default KeyboardLayout;
