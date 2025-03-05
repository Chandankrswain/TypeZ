import { motion } from "framer-motion";

const Caret = ({
  position,
  isFocused,
}: {
  position: number;
  isFocused: boolean;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isFocused ? [1, 0, 1] : 0, // Blinking effect when focused
        x: position * 18, // Adjust movement based on text position
      }}
      transition={{
        opacity: { duration: 0.8, repeat: Infinity },
        x: { type: "spring", stiffness: 100 },
      }}
      className="absolute top-0 left-0 h-10 w-1 bg-[#bb86fc] rounded-sm"
    />
  );
};

export default Caret;
