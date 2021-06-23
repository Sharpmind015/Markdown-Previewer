import "./App.css";
import SplitPane from "react-split-pane";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Markdown Preview</h1>
      <SplitPane split="vertical" minSize={"50%"}>
        <div id="editor" />
        <div id="preview" />
      </SplitPane>
    </div>
  );
}

export default App;
