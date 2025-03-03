import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Footer,
  Guide,
  KeyboardLayout,
  Navbar,
  RestartButton,
  TextBox,
  Timer,
} from "../../components";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [targetKey] = useState(""); //  Set an initial target key

  const handleGameMode = () => {
    setIsKeyboardVisible(true);
    navigate("/game");
  };

  return (
    <div className="flex flex-col h-screen font-robotoMono justify-between">
      <Navbar
        isSoundOn={isSoundOn}
        handleSound={() => setIsSoundOn((prev) => !prev)}
        onToggleKeyboard={() => setIsKeyboardVisible((prev) => !prev)}
        onGameMode={handleGameMode}
      />

      <div
        className={`flex flex-col items-center ${
          isKeyboardVisible ? "h-[700px]" : "h-[500px]"
        } justify-between transition-all duration-300`}
      >
        <div className="relative flex flex-col items-center w-[80%] transition-all duration-300">
          <Timer inputRef={inputRef} />
          <div>
            <TextBox divRef={inputRef} />
          </div>
          <RestartButton onRestart={() => window.location.reload()} />
        </div>

        {/* Animate Keyboard Layout with Fade-in/Fade-out */}
        <AnimatePresence>
          {isKeyboardVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <KeyboardLayout isSoundOn={isSoundOn} targetKey={targetKey} />
              {/*Pass `targetKey` */}
            </motion.div>
          )}
        </AnimatePresence>

        <Guide className={isKeyboardVisible ? "mt-0" : "mt-10"} />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
