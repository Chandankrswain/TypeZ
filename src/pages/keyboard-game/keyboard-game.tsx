import { useState, useEffect } from "react";
import {
  Footer,
  Guide,
  KeyboardGameLayout,
  Navbar,
  RestartButton,
} from "../../components";

const keys = "abcdefghijklmnopqrstuvwxyz"; // Allowed characters

export const KeyboardGame = () => {
  const [isKeyBoardVisible] = useState(true);
  const [currentKey, setCurrentKey] = useState(""); // Key to press
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false); // ✅ Sound state

  // Function to generate a new key and update the state immediately
  const generateRandomKey = () => {
    const randomIndex = Math.floor(Math.random() * keys.length);
    setCurrentKey(keys[randomIndex]);
  };

  useEffect(() => {
    generateRandomKey(); // Start the game with an initial key
  }, []);

  // Function to handle key press
  const handleKeyPress = (key: string) => {
    setTotalCount((prev) => prev + 1); // Increase total count

    if (key === currentKey) {
      setCorrectCount((prev) => prev + 1); // Increase correct count
      setTimeout(generateRandomKey, 100); // ✅ Ensure new key updates after a small delay
    }
  };

  // Calculate accuracy percentage
  const accuracy =
    totalCount > 0 ? ((correctCount / totalCount) * 100).toFixed(2) : "0";

  return (
    <div className="flex flex-col items-center h-screen font-robotoMono justify-between">
      <Navbar
        onGameMode={() => {}}
        onToggleKeyboard={() => {}}
        handleSound={() => setIsSoundOn((prev) => !prev)} // ✅ Toggle sound
        isSoundOn={isSoundOn} // ✅ Pass sound state
      />

      <div className="flex flex-col items-center justify-center h-full">
        {/* Show Random Key */}
        <div className="text-2xl text-[#bb86fc] my-4">
          Press:{" "}
          <span className="text-[#646669]">{currentKey.toUpperCase()}</span>
        </div>

        {/* Show Accuracy */}
        <div className="text-lg text-gray-400 mb-4">Accuracy: {accuracy}%</div>

        {/* Render Keyboard Layout */}
        {isKeyBoardVisible && (
          <KeyboardGameLayout
            onKeyClick={handleKeyPress}
            targetKey={currentKey}
            isSoundOn={isSoundOn} // ✅ Pass sound state
          />
        )}

        <RestartButton onRestart={() => window.location.reload()} />
      </div>
      <Guide />
      <Footer />
    </div>
  );
};
