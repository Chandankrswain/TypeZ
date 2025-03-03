import { FaGamepad, FaInfo, FaKeyboard } from "react-icons/fa";
import Logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { useState } from "react";

interface NavbarProps {
  isSoundOn: boolean; // Get sound status from HomePage
  handleSound: () => void;
  onToggleKeyboard: () => void;
  onGameMode: () => void;
}

export const Navbar = ({
  isSoundOn,
  onToggleKeyboard,
  onGameMode,
  handleSound,
}: NavbarProps) => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  // Handle icon click & toggle active state
  const handleIconClick = (iconName: string, callback: () => void) => {
    setActiveIcon(activeIcon === iconName ? null : iconName);
    callback(); // Call the provided function
  };

  return (
    <div className="flex text-2xl h-26 items-center mx-52 my-2">
      <div
        onClick={() => navigate("/")}
        className="flex items-center mr-10 gap-1 cursor-pointer"
      >
        <img className="w-14 h-14 m-1" src={Logo} alt="Logo" />
        <p className="text-2xl font-bold text-[#bb86fc]">TypeZ</p>
      </div>

      <div className="text-[#646669] flex gap-6 items-center">
        {/* Click to Show/Hide Keyboard */}
        <FaKeyboard
          className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
            activeIcon === "keyboard" ? "text-gray-300" : "hover:text-gray-300"
          }`}
          onClick={() => handleIconClick("keyboard", onToggleKeyboard)}
        />

        {/* Click to Enable Game Mode (Hide TextBox, Show Keyboard) */}
        <FaGamepad
          className={`w-7 h-7 ml-2 cursor-pointer transition-colors duration-300 ${
            activeIcon === "game" ? "text-gray-300" : "hover:text-gray-300"
          }`}
          onClick={() => handleIconClick("game", onGameMode)}
        />

        {/* Info Icon (No Toggle) */}
        <FaInfo className="w-5 h-4 hover:text-gray-300 cursor-pointer" />

        {/* Sound Toggle */}
        <PiSpeakerSimpleHighFill
          className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${
            isSoundOn ? "text-gray-300" : "hover:text-gray-300"
          }`}
          onClick={handleSound} // Use `isSoundOn` from props
        />
      </div>
    </div>
  );
};

export default Navbar;
