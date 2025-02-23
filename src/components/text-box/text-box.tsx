import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";
import { SET_CORRECT_CHARS } from "../../features/resultSlice";
import { useEffect, useState } from "react";
import { CapslockIndicator } from "../capslock-indicator";

export const TextBox = ({
  divRef,
}: {
  divRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const dispatch = useAppDispatch();
  const generateRandomWords =
    useAppSelector((state) => state.randomWords.value) || "";
  const getUserInput = useAppSelector((state) => state.typingWords.value) || "";
  const [isCaps, setIsCaps] = useState(false);
  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  const handleCapsLock = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.getModifierState("CapsLock") === true) {
      setIsCaps(true);
    } else {
      setIsCaps(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      divRef.current?.focus();
    }, 100);
  }, []);

  const handleInput = () => {
    if (!divRef.current) return; //Null check before accessing innerText
    const inputValue = divRef.current.innerText;
    setTimeout(() => {
      dispatch({ type: "typingWords/HANDLE_CHANGE", payload: inputValue });

      const correctChars = inputValue.split("").reduce((count, char, idx) => {
        return char === generateRandomWords[idx] ? count + 1 : count;
      }, 0);

      dispatch(SET_CORRECT_CHARS(correctChars));

      if (!isTimerRunning) {
        dispatch(START_TIMER()); // Start timer when typing starts
      }
    }, 0);
  };

  return (
    <div className="relative text-left flex flex-col mt-4">
      {isCaps && <CapslockIndicator />}
      {/* Ultra-Smooth Typing Animation */}
      <div className="text-3xl tracking-wide leading-12">
        {generateRandomWords.split("").map((char, idx) => (
          <span
            key={idx}
            className={`transition-all duration-00 ease-out opacity-80 ${
              getUserInput[idx] === char
                ? "text-gray-400 opacity-100" //  Correct character (smooth fade)
                : getUserInput[idx]
                ? "text-[#ca4754] opacity-100" //  Incorrect character (smooth transition)
                : "text-[#646669] opacity-60" //  Yet to type (faded)
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
          onKeyDown={handleCapsLock}
          autoFocus
          spellCheck="false"
        ></div>
      </div>
    </div>
  );
};
export default TextBox;
