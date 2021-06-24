const initialState = {
  markdown: `Paragraph
**bolded text**
    
# heading
## heading 2
- list item
    
[google](https://google.com)
    
Heres some code, \`<div></div>\`, between 2 backticks.
    
> block quote
    
    
\`\`\`
// this is multi-line code:
    
function anotherExample
(firstLine, lastLine) {
    if (firstLine == 
        '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`
    
![image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
        
     `
};
const markdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "markdown/markdownSet":
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
};

export default markdownReducer;
