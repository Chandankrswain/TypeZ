import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const TextBox = () => {
  const dispatch = useAppDispatch();
  const generateRandomWords = useAppSelector(
    (state) => state.randomWords.value
  );

  return (
    <div className="relative text-left text-[#646669] flex flex-col">
      {/* Random Words Display */}
      <div className="text-3xl tracking-wide">
        {generateRandomWords.split("").map((char, idx) => (
          <span className="leading-12" key={idx}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
