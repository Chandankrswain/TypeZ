import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { MdError, MdLocalOffer } from "react-icons/md";
import { FaKeyboard, FaLevelUpAlt } from "react-icons/fa";
import { PiCaretLineRightFill, PiMonitorFill } from "react-icons/pi";
import { SiTarget } from "react-icons/si";
import { HiCursorClick } from "react-icons/hi";

export const InfoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        isSoundOn={false}
        onToggleKeyboard={() => {}}
        onGameMode={() => navigate("/game")}
        handleSound={() => {}}
      />
      <div className="p-6 max-w-6xl mx-auto text-lg text-gray-400 font-robotoMono tracking-wide leading-loose">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#646669]">
          Enhancing Your Typing Skills, One Word at a Time
        </h1>

        <p className="mb-4">
          Welcome to <strong className="text-[#bb86fc]">TypeZ</strong>, the
          ultimate typing experience designed to help you{" "}
          <strong>improve speed, accuracy, and efficiency</strong>. Whether
          you're a beginner looking to level up your typing or a pro aiming for
          high WPM scores, our platform is built just for you!
        </p>

        <h2 className="text-2xl flex items-center font-semibold mt-6 mb-4 text-[#646669]">
          <MdLocalOffer className="mr-2 w-8 h-8" /> What We Offer?
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <strong className="text-[#646669] flex items-center">
            <FaKeyboard className="mr-3" /> Real-Time Typing Experience
          </strong>{" "}
          Our smooth and responsive interface lets you type with{" "}
          <strong>zero lag</strong>, ensuring a seamless experience.
          <strong className="text-[#646669] flex items-center ">
            <PiCaretLineRightFill className="mr-3" />
            Animated Caret
          </strong>{" "}
          With our
          <strong> dynamic caret animation</strong>, track your position{" "}
          <strong>word by word</strong> as you type.
          <strong className="text-[#646669] flex items-center">
            <MdError className="mr-3" /> Error & Accuracy Tracking
          </strong>{" "}
          Instantly see your mistakes, analyze your <strong>error rate</strong>,
          and work on improvement.
          <strong className="text-[#646669] flex  items-center">
            <PiMonitorFill className="mr-3" />
            Minimalistic & Distraction-Free UI
          </strong>{" "}
          A clean, simple, and modern design to help you focus entirely on
          typing.
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#646669] flex items-center">
          <HiCursorClick className="mr-3 w-10 h-10" />
          Why Choose Us?
        </h2>
        <p className="mb-4">
          Unlike traditional typing tests, <strong>TypeZ</strong> is built using
          the latest technologies like{" "}
          <strong>React, Framer Motion, Redux, and TailwindCSS</strong>,
          ensuring a{" "}
          <strong>fast, responsive, and visually appealing experience</strong>.
        </p>
        <p>
          Whether you're <strong>competing against yourself</strong> or
          challenging your friends, our goal is to{" "}
          <strong>make typing fun, engaging, and rewarding</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#646669] flex items-center">
          <SiTarget className="mr-3 w-8 h-8" /> Our Mission
        </h2>
        <p className="mb-4">
          We believe that{" "}
          <strong>
            typing should be more than just a skill—it should be an experience
          </strong>
          . Our mission is to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <p>- Help users type faster & more accurately</p>
          <p>- Make learning fun through interactive features</p>
          <p>- Provide an adaptive typing platform for all skill levels</p>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#646669] flex items-center">
          <FaLevelUpAlt className=" mr-3" /> Ready to Level Up Your Typing?
        </h2>
        <p>
          Start your journey today and experience{" "}
          <strong>the future of typing practice</strong> with{" "}
          <strong>TypeZ</strong>!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default InfoPage;
