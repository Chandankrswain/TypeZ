import {
  Footer,
  Navbar,
  RestartButton,
  TextBox,
  Timer,
  UserTextbox,
} from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center font-robotoMono">
      <Navbar />
      <div className="flex flex-col items-center h-[200px] w-[80%] justify-evenly">
        <Timer />
        <div>
          <TextBox />
          {/* <UserTextbox /> */}
        </div>
        <RestartButton onRestart={() => window.location.reload()} />{" "}
      </div>
      <Footer />
    </div>
  );
}
export default App;
