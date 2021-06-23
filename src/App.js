import SplitPane from "react-split-pane";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <div className="App">
      <SplitPane split="vertical" minSize={"50%"}>
        <Editor />
        <Preview />
      </SplitPane>
    </div>
  );
}

export default App;
