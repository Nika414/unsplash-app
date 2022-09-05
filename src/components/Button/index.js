import './Button.css';

function Button(props) {
  return (
    <div >
      <button className="Button" onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}

export default Button;