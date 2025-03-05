import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";
import { SET_CORRECT_CHARS, SET_ERRORS } from "../../features/resultSlice";
import { useEffect, useRef, useState } from "react";
import { CapslockIndicator } from "../capslock-indicator";

export const TextBox = () => {
  const dispatch = useAppDispatch();
  const generateRandomWords =
    useAppSelector((state) => state.randomWords.value) || "";
  const getUserInput = useAppSelector((state) => state.typingWords.value) || "";
  const getTime = useAppSelector((state) => state.timeCount.value) || 0;
  const [isCaps, setIsCaps] = useState(false);
  const [isFocused, setIsFocused] = useState(true); // ✅ Track focus state
  const inputRef = useRef<HTMLInputElement>(null);
  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  // ⏳ Focus input on mount
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  // 🚀 Detect clicks outside the input to remove focus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false); // Lose focus if clicked outside
        inputRef.current.blur();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getTime === 0) return; // 🚫 Prevent input when time is 0

    const inputValue = e.target.value;

    if (inputValue.length > generateRandomWords.length) {
      e.target.value = inputValue.slice(0, generateRandomWords.length);
      return;
    }

    dispatch({ type: "typingWords/HANDLE_CHANGE", payload: inputValue });

    if (!isTimerRunning) {
      dispatch(START_TIMER()); // Start timer when typing starts
    }

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
      e.preventDefault(); // 🚫 Block key presses after timer ends
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault(); // 🚫 Prevent Enter key from submitting
    }

    setIsCaps(e.getModifierState("CapsLock"));
  };

  return (
    <div className="relative text-left flex flex-col mt-4">
      {isCaps && <CapslockIndicator />}

      {/* ✅ Blur effect applied when `isFocused` is false */}
      <div
        className={`text-3xl tracking-wide leading-12 transition-all duration-300 ${
          isFocused ? "blur-none" : "blur-sm"
        }`}
      >
        {generateRandomWords.split("").map((char, idx) => (
          <span
            key={idx}
            className={`transition-all duration-200 ease-out opacity-80 ${
              getUserInput.length > idx
                ? getUserInput[idx] === char
                  ? "text-gray-400 opacity-100" // ✅ Correct character (gray)
                  : "text-[#ca4754] opacity-100" // ❌ Incorrect character (red)
                : "text-[#646669] opacity-60" // ⏳ Yet to type (faded gray)
            }`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* ✅ Show "Click here to focus" when unfocused */}
      <input
        ref={inputRef}
        type="text"
        placeholder={!isFocused ? "Click here to focus" : ""}
        className="user-select-none bg-transparent tracking-wide outline-none text-transparent w-full cursor-pointer placeholder-gray-500 text-center mt-4"
        onClick={() => setIsFocused(true)} // ✅ Clicking restores focus
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        autoFocus
        spellCheck="false"
        disabled={getTime === 0} // ✅ Directly disable input
      />
    </div>
  );
};

export default TextBox;
