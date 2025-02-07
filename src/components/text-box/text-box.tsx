import { generate } from "random-words";
import { useState } from "react";
export const TextBox = () => {
  const generateRandomWords = generate({ exactly: 20, join: " " });
  const [words, setWords] = useState([generateRandomWords]);

  return (
    <div className="text-box">
      <div className="words">
        {words.map((words, index) => (
          <span key={index}>
            {words.split("").map((char, idx) => (
              <span key={idx}>{char}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextBox;
