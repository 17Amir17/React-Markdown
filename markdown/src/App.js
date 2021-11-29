import Window from './Components/Window';
import Editor from './Components/Editor';
import Preview from './Components/Preview';

function App() {
  return (
    <div className="App">
      <Window name="Editor" content={<Editor />} />
      <Window name="Preview" content={<Preview />} />
    </div>
  );
}

export default App;
