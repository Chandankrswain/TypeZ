import { FaGamepad, FaInfo, FaKeyboard } from "react-icons/fa";
import Logo from "../../../public/logo.png";

interface NavbarProps {
  onToggleKeyboard: () => void;
}

export const Navbar = ({ onToggleKeyboard }: NavbarProps) => {
  return (
    <div className="flex text-2xl h-26 items-center mx-52 my-2">
      <div className="flex items-center mr-10 gap-1 ">
        <img className="w-14 h-14 m-1" src={Logo} alt="Logo" />
        <p className="text-2xl font-bold text-[#bb86fc]">TypeZ</p>
      </div>
      <div className="text-[#646669] flex gap-6 items-center">
        {/* Click karne par Keyboard show/hide hoga */}
        <FaKeyboard
          className="w-6 h-6 hover:text-gray-300 cursor-pointer"
          onClick={onToggleKeyboard}
        />
        <FaGamepad className="w-7 h-7 ml-2 hover:text-gray-300" />
        <FaInfo className="w-5 h-4 hover:text-gray-300 " />
      </div>
    </div>
  );
};

export default Navbar;
