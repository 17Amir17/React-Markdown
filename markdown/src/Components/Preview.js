import { useContext } from 'react';
import { EditorTextContext } from '../Context/EditorTextContext';
import Markdown from 'marked-react';

function Preview(props) {
  const context = useContext(EditorTextContext);
  return (
    <div id="preview">
      <Markdown breaks={true}>{context.text}</Markdown>
    </div>
  );
}

export default Preview;
