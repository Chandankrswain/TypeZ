import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";
import { SET_CORRECT_CHARS, SET_ERRORS } from "../../features/resultSlice";
import { CapslockIndicator } from "../capslock-indicator";

export const TextBox = () => {
  const dispatch = useAppDispatch();
  const generateRandomWords =
    useAppSelector((state) => state.randomWords.value) || "";
  const getUserInput = useAppSelector((state) => state.typingWords.value) || "";
  const getTime = useAppSelector((state) => state.timeCount.value) || 0;
  const [isCaps, setIsCaps] = useState(false);
  const [isFocused, setIsFocused] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null!); //  Ensures it's always a valid HTMLDivElement
  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
        inputRef.current.blur();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getTime === 0) return;

    const inputValue = e.target.value;

    if (inputValue.length > generateRandomWords.length) {
      e.target.value = inputValue.slice(0, generateRandomWords.length);
      return;
    }

    dispatch({ type: "typingWords/HANDLE_CHANGE", payload: inputValue });

    if (!isTimerRunning) {
      dispatch(START_TIMER());
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
      e.preventDefault();
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
    }

    setIsCaps(e.getModifierState("CapsLock"));
  };

  console.log("user input", getUserInput);

  return (
    <div className="relative text-left flex flex-col mt-4 ">
      {isCaps && <CapslockIndicator />}
      <div
        ref={containerRef}
        className={`relative text-3xl tracking-wide leading-12 transition-all duration-300 ${
          isFocused ? "blur-none" : "blur-sm"
        }`}
      >
        {generateRandomWords.split("").map((char, idx) => {
          const isTyped = getUserInput.length > idx;
          const isCurrentChar = getUserInput.length === idx + 1;
          const isCorrect = isTyped && getUserInput[idx] === char;

          return (
            <span
              key={idx}
              className={`${
                isTyped
                  ? isCorrect
                    ? "text-gray-400"
                    : "text-[#ca4754]"
                  : "text-[#646669] opacity-60"
              } 
              ${
                isCurrentChar
                  ? "border-r-[1px] border-[#bb86fc] border-l-transparent"
                  : "border-none"
              }`}
            >
              {char}
            </span>
          );
        })}
      </div>

      <input
        ref={inputRef}
        type="text"
        placeholder={!isFocused ? "Click here to focus" : ""}
        className="absolute top-10 user-select-none bg-transparent tracking-wide outline-none text-transparent w-full cursor-pointer placeholder-gray-400 text-center mt-4"
        onClick={() => setIsFocused(true)}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        autoFocus
        spellCheck="false"
        disabled={getTime === 0}
      />
    </div>
  );
};

export default TextBox;
