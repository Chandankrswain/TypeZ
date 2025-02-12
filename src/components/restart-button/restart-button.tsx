import { useRef } from "react";

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

  return <button ref={buttonRef} onClick={handleClick}></button>;
};

export default RestartButton;
