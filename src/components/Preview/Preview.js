import { connect } from "react-redux";
import marked from "marked";
import "./preview.css";

const Preview = ({ markdown }) => {
  return (
    <div id="preview" className="preview">
      <div>
        <h1 className="preview__heading">Results</h1>
        <div
          className="results"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  marked.setOptions({
    breaks: true
  });
  return { markdown: marked(state.markdown) };
};

export default connect(mapStateToProps, null)(Preview);
