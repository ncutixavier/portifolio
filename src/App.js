import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";

function App() {
  return (
    <div className="App bg-gray-900">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Appointment />
      <Contact />
    </div>
  );
}

export default App;
