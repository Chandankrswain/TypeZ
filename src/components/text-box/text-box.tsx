import { generate } from "random-words";
import { useState } from "react";
export const TextBox = () => {
  const generateRandomWords = generate({ exactly: 25, join: " " });
  const [words, setWords] = useState([generateRandomWords]);

  return (
    <div className=" ml-48 mr-48 h-[30%] text-left tracking-wider text-[#646669]">
      <div className="text-4xl">
        {words.map((words, index) => (
          <span key={index}>
            {words.split("").map((char, idx) => (
              <span className="leading-14" key={idx}>
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
