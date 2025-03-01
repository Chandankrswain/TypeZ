import { useRef, useState } from "react";
import {
  Footer,
  Guide,
  KeyboardLayout,
  Navbar,
  RestartButton,
  TextBox,
  Timer,
} from "./components";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [viewKeyword, setViewKeyboard] = useState();

  return (
    <div className="flex flex-col h-screen font-robotoMono justify-between">
      <Navbar />
      <div className="flex flex-col items-center justify-between h-[700px]">
        <div className="flex flex-col items-center h-[200px] w-[80%] jusitfy-between">
          <Timer inputRef={inputRef} />
          <div>
            <TextBox divRef={inputRef} />
          </div>
          <RestartButton onRestart={() => window.location.reload()} />
        </div>
        <KeyboardLayout />
        <Guide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
