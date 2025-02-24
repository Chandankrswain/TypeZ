export const KeyboardLayout = () => {
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"];
  const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

  return (
    <div className="text-[#646669] text-xl">
      <ul className="flex gap-2 justify-center mb-2">
        {row1.map((char) => (
          <div className="px-6 py-4 rounded-lg bg-[#2c2e31]" key={char}>
            {char}
          </div>
        ))}
      </ul>
      <ul className="flex gap-2 justify-center mb-2 ">
        {row2.map((char) => (
          <div className="px-6 py-4 rounded-lg bg-[#2c2e31]" key={char}>
            {char}
          </div>
        ))}
      </ul>
      <ul className="flex gap-2 justify-center mb-2">
        {row3.map((char) => (
          <div className="px-6 py-4 rounded-lg bg-[#2c2e31]" key={char}>
            {char}
          </div>
        ))}
      </ul>
      <ul className="">
        <div className="px-6 py-4 rounded-xl bg-[#2c2e31]" key="space">
          space
        </div>
      </ul>
    </div>
  );
};

export default KeyboardLayout;
