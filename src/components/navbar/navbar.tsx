import { FaKeyboard } from "react-icons/fa";
import Logo from "../../../public/logo.png";

export const Navbar = () => {
  return (
    <div className="flex text-2xl h-26 items-center justify-start">
      <div className="flex flex-col items-center">
        <img className="w-14 h-14 m-1" src={Logo} alt="" />
        <p className="text-2xl font-bold text-[#bb86fc]">TypeZ</p>
      </div>
      <div>
        <FaKeyboard />
      </div>
    </div>
  );
};

export default Navbar;
