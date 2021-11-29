import '../styles/window.css';

function Window(props) {
  return (
    <div className="window">
      <div className="window-header">{props.name}</div>
      {props.content}
    </div>
  );
}

export default Window;
