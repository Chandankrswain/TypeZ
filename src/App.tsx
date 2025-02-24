import { useRef } from "react";
import {
  Footer,
  KeyboardLayout,
  Navbar,
  RestartButton,
  TextBox,
  Timer,
} from "./components";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

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
      <Footer />
    </div>
  );
}

export default App;
