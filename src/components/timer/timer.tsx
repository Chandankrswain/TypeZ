import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { UPDATE_TIME } from "../../features/timeCount";

export const Timer = () => {
  const timeCountDown = useAppSelector((state) => state.timeCount.value);
  const dispatch = useDispatch();

  const updateTime = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTime = parseInt(e.currentTarget.id);
    dispatch(UPDATE_TIME(newTime));
  };

  return (
    <div className="text-[#646669] text-lg font-bold w-full flex justify-between">
      <div className="text-3xl text-[#bb86fc]">{timeCountDown}</div>
      <div className="flex justify-between mr-7 w-[8%] ">
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
  );
};

export default Timer;
