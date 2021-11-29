import { useContext, useEffect } from 'react';
import { EditorTextContext } from '../Context/EditorTextContext';
import initial from '../data/intial';
import '../styles/editor.css';

function Editor(props) {
  const context = useContext(EditorTextContext);
  const onTextChanges = (e) => {
    context.setText(e.target.value);
  };
  useEffect(() => {
    context.setText(initial);
  }, []);
  return (
    <textarea
      id="editor"
      onChange={onTextChanges}
      defaultValue={context.text}
    ></textarea>
  );
}

export default Editor;
