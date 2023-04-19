import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-gray-900">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
