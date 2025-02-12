import { Footer, Navbar, RestartButton, TextBox, Timer } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center font-robotoMono">
      <Navbar />
      <div className="flex flex-col items-center h-[200px] w-[80%] justify-evenly">
        <Timer />
        <TextBox />
        <RestartButton onRestart={() => null} />
      </div>

      <Footer />
    </div>
  );
}
export default App;
