import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const TextBox = () => {
  const dispatch = useAppDispatch();
  const generateRandomWords = useAppSelector(
    (state) => state.randomWords.value
  );

  const getTypedWords = useAppSelector((state) => state.typingWords.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "typingWords/HANDLE_CHANGE", payload: e.target.value });
  };

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

      {/* Overlapping Input */}
      <input
        className="absolute left-0 w-full h-full bg-transparent tracking-wide 
                 outline-none text-3xl z-10 
                 text-green-500 placeholder-gray-400"
        value={getTypedWords}
        onChange={handleChange}
        placeholder={generateRandomWords}
      />
    </div>
  );
};

export default TextBox;
