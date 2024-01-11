import logo from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} alt="dictionary-icon" className="App-logo" />
      <footer>
        This AI project was coded by
        <a href="https://laurenkemp.dev" target="_blank">
          {" "}
          Lauren Kemp
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/laurenkemp/dictionary-project.git"
          target="_blank"
        >
          GitHub
        </a>
        , and hosted on
        <a href="https://www.netlify.com/" target="_blank">
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
