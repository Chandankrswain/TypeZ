import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { UPDATE_TIME, TIME_COUNTDOWN } from "../../features/timeCountSlice";
import { ResultScreen } from "../result-screen";
import { SET_WPM } from "../../features/resultSlice";

export const Timer = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const dispatch = useDispatch();
  const timeCountDown = useAppSelector((state) => state.timeCount.value);
  const isTimerRunning = useAppSelector(
    (state) => state.timeCount.isTimerRunning
  );

  // State to control result screen visibility
  const [showResult, setShowResult] = useState(false);

  //  Start countdown when typing starts
  useEffect(() => {
    if (isTimerRunning && timeCountDown > 0) {
      const interval = setInterval(() => {
        dispatch(TIME_COUNTDOWN());
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timeCountDown === 0) {
      setShowResult(true); // Show result screen when timer reaches 0
    }
  }, [isTimerRunning, timeCountDown, dispatch]);

  // Update time and focus input
  const updateTime = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTime = parseInt(e.currentTarget.id);
    dispatch(UPDATE_TIME(newTime));
    dispatch(SET_WPM(newTime));
    setShowResult(false); // Hide result screen on restart

    // Reset input and focus
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <>
      {showResult && <ResultScreen />}{" "}
      {/* Show result screen when timer hits 0 */}
      <div className="text-[#646669] text-lg font-bold w-full flex justify-between">
        <div className="text-3xl text-[#bb86fc]">{timeCountDown}</div>
        <div className="flex justify-between mr-7 w-[8%]">
          <button
            className="cursor-pointer hover:text-[#bb86fc]"
            onClick={updateTime}
            id="10"
          >
            10s
          </button>
          <button
            className="cursor-pointer hover:text-[#bb86fc]"
            onClick={updateTime}
            id="20"
          >
            20s
          </button>
          <button
            className="cursor-pointer hover:text-[#bb86fc]"
            onClick={updateTime}
            id="30"
          >
            30s
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
