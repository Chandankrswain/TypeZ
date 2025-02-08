import { useAppSelector } from "../redux/hooks";

export const TextBox = () => {
  const generateRandomWords = useAppSelector(
    (state) => state.randomWords.value
  );

  return (
    <div className="ml-48 mr-48 h-[30%] text-left tracking-wider text-[#646669]">
      <div className="text-4xl">
        {generateRandomWords.split("").map((char, idx) => (
          <span className="leading-14" key={idx}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
