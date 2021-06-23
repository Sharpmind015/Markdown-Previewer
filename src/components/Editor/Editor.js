import "./editor.css";

const Editor = () => {
  return (
    <div id="editor" className="editor">
      <label htmlFor="editor" className="editor__label">
        Editor
      </label>
      <textarea name="editor" id="editor" />
    </div>
  );
};

export default Editor;
