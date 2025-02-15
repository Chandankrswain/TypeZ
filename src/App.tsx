import { useRef } from "react";
import { Footer, Navbar, RestartButton, Timer } from "./components";
import TextBox from "./components/text-box/text-box";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col h-screen justify-between items-center font-robotoMono">
      <Navbar />
      <div className="flex flex-col items-center h-[200px] w-[80%] justify-between">
        <Timer inputRef={inputRef} />
        <div>
          <TextBox inputRef={inputRef} />
        </div>
        <RestartButton onRestart={() => window.location.reload()} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
