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
} from "./components";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  return (
    <div className="flex flex-col h-screen font-robotoMono justify-between">
      <Navbar onToggleKeyboard={() => setIsKeyboardVisible((prev) => !prev)} />

      <div
        className={`flex flex-col items-center ${
          isKeyboardVisible ? "h-[700px]" : "h-[500px]"
        } justify-between transition-all duration-300`}
      >
        <div className="flex flex-col items-center w-[80%]">
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
              <KeyboardLayout />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Adjust Guide Position */}
        <Guide className={isKeyboardVisible ? "mt-0" : "mt-10"} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
