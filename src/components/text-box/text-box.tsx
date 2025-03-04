import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";
import { SET_CORRECT_CHARS, SET_ERRORS } from "../../features/resultSlice";
import { useEffect, useRef, useState } from "react";
import { CapslockIndicator } from "../capslock-indicator";

export const TextBox = ({}: {}) => {
  const dispatch = useAppDispatch();
  const generateRandomWords =
    useAppSelector((state) => state.randomWords.value) || "";
  const getUserInput = useAppSelector((state) => state.typingWords.value) || "";
  const getTime = useAppSelector((state) => state.timeCount.value) || "";
  const [isCaps, setIsCaps] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  const handleCapsLock = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setIsCaps(e.getModifierState("CapsLock"));
  };

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;
    const inputValue = e.target.value;
    if (inputValue.length > generateRandomWords.length) {
      inputRef.current.innerText = inputValue.slice(
        0,
        generateRandomWords.length
      );
      return;
    }

    dispatch({ type: "typingWords/HANDLE_CHANGE", payload: inputValue });

    if (!isTimerRunning) {
      dispatch(START_TIMER()); // Start timer when typing starts
    }

    // Reset character colors when input is empty
    if (inputValue === "") {
      dispatch(SET_CORRECT_CHARS(0));
      dispatch(SET_ERRORS(0));
      return;
    }

    const correctChars = inputValue.split("").reduce((count, char, idx) => {
      return char === generateRandomWords[idx] ? count + 1 : count;
    }, 0);

    const errorChars = inputValue.split("").reduce((count, char, idx) => {
      return char !== generateRandomWords[idx] ? count + 1 : count;
    }, 0);

    dispatch(SET_CORRECT_CHARS(correctChars));
    dispatch(SET_ERRORS(errorChars));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (getTime === 0) {
      e.preventDefault(); // ⛔ Block key presses after the timer stops
      inputRef.current?.blur(); // ✅ Remove focus from input
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault(); // Prevent Enter key from submitting
    }

    setIsCaps(e.getModifierState("CapsLock"));
  };
  return (
    <div className="relative text-left flex flex-col mt-4">
      {isCaps && <CapslockIndicator />}
      {/* Ultra-Smooth Typing Animation */}
      <div className="text-3xl tracking-wide leading-12">
        {generateRandomWords.split("").map((char, idx) => (
          <span
            key={idx}
            className={`transition-all duration-200 ease-out opacity-80 ${
              getUserInput.length > idx
                ? getUserInput[idx] === char
                  ? "text-gray-400 opacity-100" // Correct character (gray)
                  : "text-[#ca4754] opacity-100" // Incorrect character (red)
                : "text-[#646669] opacity-60" // Yet to type (faded gray)
            }`}
          >
            {char}
          </span>
        ))}

        <br></br>
        <input
          ref={inputRef}
          type="text"
          className="user-select-none bg-transparent whitespace-pre-wrap tracking-wide outline-none text-red-500"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck="false"
          disabled={getTime === 0}
        />
      </div>
    </div>
  );
};

export default TextBox;
