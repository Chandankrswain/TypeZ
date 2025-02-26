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
    <div className="flex flex-col h-screen justify-between items-center font-robotoMono">
      <Navbar />
      <div className="flex flex-col items-center h-[200px] w-[80%] justify-between">
        <Timer inputRef={inputRef} />
        <div>
          <TextBox divRef={inputRef} />
        </div>
        <RestartButton onRestart={() => window.location.reload()} />
      </div>
      <KeyboardLayout />
      <Guide />
      <Footer />
    </div>
  );
}

export default App;
