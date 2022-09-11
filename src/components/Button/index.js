import './Button.css';

function Button({handleClick, text}) {
  return (
    <div >
      <button className="Button" onClick={handleClick}>{text}</button>
    </div>
  );
}

export default Button;