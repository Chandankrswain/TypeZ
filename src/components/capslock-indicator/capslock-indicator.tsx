import { FaLock } from "react-icons/fa";

export const CapslockIndicator = () => {
  return (
    <div className="flex bg-[#bb86fc] justify-between items-center py-4 px-5 w-[170px] rounded-lg m-auto mb-2 ">
      <FaLock className="w-5 h-5" />
      <p className="text-md tracking-wide">Caps Lock</p>
    </div>
  );
};

export default CapslockIndicator;
