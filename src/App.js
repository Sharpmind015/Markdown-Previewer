import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./components/Editor/Editor";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Markdown Preview</h1>
      <SplitPane split="vertical" minSize={"50%"}>
        <Editor />
        <div id="preview" />
      </SplitPane>
    </div>
  );
}

export default App;
