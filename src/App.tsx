import { Footer, Navbar, TextBox } from "./components";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      <Navbar />
      <TextBox />
      <Footer />
    </div>
  );
}

export default App;
