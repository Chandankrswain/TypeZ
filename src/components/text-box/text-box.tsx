import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { START_TIMER } from "../../features/timeCountSlice";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTimerRunning) {
      dispatch(START_TIMER()); // 🔹 Start timer when typing starts
    }
    dispatch({ type: "typingWords/HANDLE_CHANGE", payload: e.target.value });
  };

  return (
    <div className="relative text-left flex flex-col mt-4">
      <div className="text-3xl tracking-wide leading-12">
        {generateRandomWords.split("").map((char, idx) => (
          <span
            key={idx}
            className={
              getUserInput[idx] === char
                ? "text-gray-400"
                : getUserInput[idx]
                ? "text-[#ca4754]"
                : "text-[#646669]"
            }
          >
            {char}
          </span>
        ))}

        <input
          ref={inputRef}
          className="absolute left-0 top-0 w-full min-h-[50px] bg-transparent whitespace-pre-wrap tracking-wide outline-none text-transparent caret-[#bb86fc]"
          value={getUserInput}
          onChange={handleChange}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TextBox;
