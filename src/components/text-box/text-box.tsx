import { useAppSelector } from "../../redux/hooks";

export const TextBox = () => {
  const generateRandomWords = useAppSelector(
    (state) => state.randomWords.value
  );

  return (
    <div className="text-left text-[#646669]">
      <div className="text-3xl ">
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
// just for commit
