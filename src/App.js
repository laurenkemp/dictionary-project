import logo from "./images/logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} alt="dictionary-icon" className="App-logo" />
        <main>
          <Dictionary defaultKeyword="incandescent" />
        </main>
        <footer className="App-footer">
          This AI project was coded by
          <a href="https://laurenkemp.dev" target="_blank" rel="noreferrer">
            {" "}
            Lauren Kemp
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/laurenkemp/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted on
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
