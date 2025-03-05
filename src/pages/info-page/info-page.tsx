import { Footer, Navbar } from "../../components";

export const InfoPage = () => {
  return (
    <>
      <Navbar
        isSoundOn={false}
        onToggleKeyboard={() => {}}
        onGameMode={() => {}}
        handleSound={() => {}}
      />
      <div className="p-6 max-w-3xl mx-auto text-lg text-gray-400">
        <h1 className="text-3xl font-bold text-center mb-6">
          Enhancing Your Typing Skills, One Word at a Time
        </h1>

        <p className="mb-4">
          Welcome to <strong>TypeZ</strong>, the ultimate typing experience
          designed to help you
          <strong>improve speed, accuracy, and efficiency</strong>. Whether
          you're a beginner looking to level up your typing or a pro aiming for
          high WPM scores, our platform is built for you!
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">What We Offer?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Real-Time Typing Experience</strong> – Our smooth and
            responsive interface lets you type with <strong>zero lag</strong>,
            ensuring a seamless experience.
          </li>
          <li>
            <strong>Animated Caret & Live Feedback</strong> – With our
            <strong> dynamic caret animation</strong>, track your position
            <strong> word by word</strong> as you type.
          </li>
          <li>
            <strong>Error & Accuracy Tracking</strong> – Instantly see your
            mistakes, analyze your <strong>error rate</strong>, and work on
            improvement.
          </li>
          <li>
            <strong>Customizable Settings</strong> – Adjust themes, difficulty
            levels, and more to suit your typing style.
          </li>
          <li>
            <strong>Minimalistic & Distraction-Free UI</strong> – A clean,
            simple, and modern design to help you focus entirely on typing.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
        <p className="mb-4">
          Unlike traditional typing tests, <strong>TypeZ</strong> is built using
          the latest technologies like{" "}
          <strong>React, Framer Motion, Redux, and TailwindCSS</strong>,
          ensuring a
          <strong> fast, responsive, and visually appealing experience</strong>.
        </p>
        <p>
          Whether you're <strong>competing against yourself</strong> or
          challenging your friends, our goal is to{" "}
          <strong>make typing fun, engaging, and rewarding</strong>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default InfoPage;
