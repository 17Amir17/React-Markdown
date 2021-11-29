import { useContext } from 'react';
import { EditorTextContext } from '../Context/EditorTextContext';
import Markdown from 'marked-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/preview.css';

const renderer = {
  code: (snippet, lang) => {
    return (
      <SyntaxHighlighter language={lang} style={a11yDark}>
        {snippet}
      </SyntaxHighlighter>
    );
  },
};

function Preview(props) {
  const context = useContext(EditorTextContext);
  return (
    <div id="preview">
      <Markdown
        breaks={true}
        value={context.text}
        renderer={renderer}
      ></Markdown>
    </div>
  );
}

export default Preview;
