import { createContext, useState } from 'react';

export const EditorTextContext = createContext('');

function EditorTextContextProvider(props) {
  const [text, setText] = useState();
  return (
    <EditorTextContext.Provider value={{ text, setText }}>
      {props.children}
    </EditorTextContext.Provider>
  );
}
export default EditorTextContextProvider;
