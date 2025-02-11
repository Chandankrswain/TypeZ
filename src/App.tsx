import { Footer, Navbar, TextBox, Timer } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center font-robotoMono">
      <Navbar />
      <div className="flex flex-col items-center h-[200px] w-[80%] justify-evenly">
        <Timer />
        <TextBox />
      </div>
      <Footer />
    </div>
  );
} // will be used to export the App component
export default App;
