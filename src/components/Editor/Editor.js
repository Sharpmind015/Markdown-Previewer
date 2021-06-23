import "./editor.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-markdown";

const Editor = () => {
  return (
    <div id="editor" className="editor">
      <label htmlFor="editor" className="editor__label">
        Markdown
      </label>
      <textarea className="editor__input" name="editor" id="editor" />
      <AceEditor
        mode="markdown"
        theme="monokai"
        name="MARKDOWN"
        setOptions={{ useWorker: false }}
      />
    </div>
  );
};

export default Editor;
