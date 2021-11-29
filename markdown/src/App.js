import React from 'react';
import Window from './Components/Window';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import EditorTextContextProvider from './Context/EditorTextContext.js';

function App() {
  return (
    <EditorTextContextProvider>
      <div className="App">
        <Window name="Editor" content={<Editor />} />
        <Window name="Preview" content={<Preview />} />
      </div>
    </EditorTextContextProvider>
  );
}

export default App;
