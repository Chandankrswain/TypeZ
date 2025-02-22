import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";
import { SET_CORRECT_CHARS } from "../../features/resultSlice";

export const TextBox = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const dispatch = useAppDispatch();
  const generateRandomWords = useAppSelector(
    (state) => state.randomWords.value
  );
  const getUserInput = useAppSelector((state) => state.typingWords.value);

  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  const handleCapsLock = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.getModifierState("CapsLock") === true) {
      alert("Caps Lock is on");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const correctChars = inputValue.split("").reduce((count, char, idx) => {
      return char === generateRandomWords[idx] ? count + 1 : count;
    }, 0);

    dispatch(SET_CORRECT_CHARS(correctChars));

    if (!isTimerRunning) {
      dispatch(START_TIMER()); // 🔹 Start timer when typing starts
    }
    dispatch({ type: "typingWords/HANDLE_CHANGE", payload: e.target.value });
  };

  return (
    <div className="relative text-left flex flex-col mt-4">
      {/* 🔹 Ultra-Smooth Typing Animation */}
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

        <input
          ref={inputRef}
          className="absolute left-0 top-0 w-full min-h-[50px] bg-transparent whitespace-pre-wrap tracking-wide outline-none text-transparent caret-[#bb86fc]"
          value={getUserInput}
          onChange={handleChange}
          onKeyDown={handleCapsLock}
          autoFocus
          spellCheck="false"
        />
      </div>
    </div>
  );
};
export default TextBox;
