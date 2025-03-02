import { FaCode, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="mx-10 flex h-28 text-2xl font-robotoMono items-center mx-50">
      <div className="font-bold text-[#bb86fc] text-3xl">TypeZ</div>
      <div className="flex text-[#646669] gap-6 ml-10">
        {/* Contact Email */}
        <div
          onClick={() =>
            (window.location.href = "mailto:your.email@example.com")
          }
          className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
        >
          <IoIosMail className="w-5 h-5" />
          <p className="text-sm">contact</p>
        </div>

        {/* LinkedIn */}
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/chandan-kumar-3b6674141/",
              "_blank"
            )
          }
          className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
        >
          <FaLinkedin className="w-4 h-4 " />
          <p className="text-sm">linkedin</p>
        </div>

        {/* GitHub */}
        <div
          onClick={() =>
            window.open("https://github.com/Chandankrswain", "_blank")
          }
          className="flex items-center gap-2 cursor-pointer hover:text-gray-300"
        >
          <FaCode className="w-4 h-4  " />
          <p className="text-sm">github</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
