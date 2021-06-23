import { connect } from "react-redux";
import markdownSet from "../../redux/action/markdownAction";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/mode-markdown";
import "./editor.css";

const Editor = ({ markdownSet, markdown }) => {
  return (
    <div id="editor" className="editor">
      <label htmlFor="editor" className="editor__label">
        Markdown
      </label>
      <textarea className="editor__input" name="editor" id="editor" />
      <AceEditor
        mode="markdown"
        theme="nord_dark"
        name="MARKDOWN"
        fontSize={18}
        width={"100%"}
        height={`${100 - 11 / 100}%`}
        showPrintMargin={true}
        value={markdown}
        showGutter={true}
        tabSize={2}
        setOptions={{ useWorker: false }}
        onChange={value => {
          markdownSet(value);
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { markdown: state.markdown };
};

export default connect(mapStateToProps, { markdownSet })(Editor);
