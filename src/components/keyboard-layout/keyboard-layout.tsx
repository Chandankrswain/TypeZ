import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

export const KeyboardLayout = () => {
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
  const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
  const spaceKey = " ";

  // Redux se expected character le rahe hain
  const generateRandomWords = useAppSelector(
    (state) => state.randomWords.value
  );
  const getUserInput = useAppSelector((state) => state.typingWords.value);

  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [wrongKey, setWrongKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setPressedKey(key); //linux setup done

      // Check if the key pressed is correct
      const currentIndex = getUserInput.length;
      if (key === generateRandomWords[currentIndex]) {
        setWrongKey(null);
      } else {
        setWrongKey(key); // Wrong key store karega
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
  }, [getUserInput, generateRandomWords]);

  return (
    <div className="text-[#646669] text-xl parent-container">
      {[row1, row2, row3].map((row, rowIndex) => (
        <ul key={rowIndex} className="flex gap-2 justify-center mb-2">
          {row.map((char) => (
            <div
              className={`px-6 py-4 rounded-lg transition-all duration-200 ${
                pressedKey === char
                  ? wrongKey === char
                    ? "bg-[#ca4754]" // ❌ Wrong Key - Red
                    : "bg-[#bb86fc]" // ✅ Correct Key - Purple
                  : "bg-[#2c2e31]" // Default
              }`}
              key={char}
            >
              {char}
            </div>
          ))}
        </ul>
      ))}

      {/* Spacebar Key */}
      <ul className="flex justify-center">
        <div
          className={`px-16 py-4 rounded-xl transition-all duration-200 ${
            pressedKey === spaceKey
              ? wrongKey === spaceKey
                ? "bg-[#ca4754]" // ❌ Wrong Key - Red
                : "bg-[#bb86fc]" // ✅ Correct Key - Purple
              : "bg-[#2c2e31]" // Default
          }`}
          key="space"
        >
          space
        </div>
      </ul>
    </div>
  );
};

export default KeyboardLayout;
