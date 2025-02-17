import { useRef } from "react";
import { VscDebugRestart } from "react-icons/vsc";

interface RestartButtonProps {
  onRestart: () => void;
}

export const RestartButton = ({
  onRestart: handleRestart,
}: RestartButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="text-[#646669] m-4"
    >
      <VscDebugRestart className="w-6 h-6 hover:text-[#bb86fc] mx-6 my-4" />
    </button>
  );
};

export default RestartButton;
