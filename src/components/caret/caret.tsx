import { motion } from "framer-motion";

export const Caret = ({}: {}) => {
  return (
    <motion.div
      transition={{
        opacity: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
        x: { type: "keyframes", stiffness: 100 },
        y: { type: "keyframes", stiffness: 100 },
      }}
      className="absolute top-1 left-0 w-[2px] bg-[#bb86fc] rounded-sm h-10"
    />
  );
};

export default Caret;
