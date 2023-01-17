import { marked } from "marked";
import React from "react";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

//a header (H1 size), a sub header (H2 size), a link, inline code,
//a code block, a list item, a blockquote, an image, and bolded text

const App = () => {
  const [text, setText] = React.useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**`);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="textarea"
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
};

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

export default App;
