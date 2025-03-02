import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";
import { SET_CORRECT_CHARS, SET_ERRORS } from "../../features/resultSlice";
import { useEffect, useState } from "react";
import { CapslockIndicator } from "../capslock-indicator";

export const TextBox = ({
  divRef,
}: {
  divRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const dispatch = useAppDispatch();
  const generateRandomWords =
    useAppSelector((state) => state.randomWords.value) || "";
  const getUserInput = useAppSelector((state) => state.typingWords.value) || "";
  const [isCaps, setIsCaps] = useState(false);
  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  const handleCapsLock = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setIsCaps(e.getModifierState("CapsLock"));
  };

  useEffect(() => {
    setTimeout(() => {
      divRef.current?.focus();
    }, 100);
  }, []);

  const handleInput = () => {
    if (!divRef.current) return;
    const inputValue = divRef.current.innerText.trim(); // Trim spaces
    if (inputValue.length > generateRandomWords.length) {
      divRef.current.innerText = inputValue.slice(
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Enter key ka default behavior rokna
    }
    handleCapsLock(e);
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
                  ? "text-gray-400 opacity-100" // ✅ Correct character (gray)
                  : "text-[#ca4754] opacity-100" // ❌ Incorrect character (red)
                : "text-[#646669] opacity-60" // ⏳ Yet to type (faded gray)
            }`}
          >
            {char}
          </span>
        ))}
        <div
          ref={divRef}
          contentEditable
          className="select-none user-select-none absolute left-0 top-0 w-full min-h-[50px] bg-transparent whitespace-pre-wrap tracking-wide outline-none text-transparent caret-[#bb86fc]"
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck="false"
        ></div>
      </div>
    </div>
  );
};

export default TextBox;
