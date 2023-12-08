import "./App.css";
import InterviewAccord from "./components/InterviewAccord";
import Header from "./components/Header";

import { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const handleClick = (e) => {
    setData(e.target.textContent.toLowerCase());
  };

  return (
    <div>
      <Header></Header>
      <nav className="btns">
        <button onClick={handleClick}>JavaScript</button>
        <button onClick={handleClick}>React</button>
        <button onClick={handleClick}>TypeScript</button>
      </nav>

      <div className="app">
        <div className="main">
          <InterviewAccord data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
