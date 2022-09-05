import './Input.css';

function Input(props) {
  return (
    <div >
      <input type="text" className="Input" placeholder={props.placeholder} onChange={props.handleChange}></input>
    </div>
  );
}

export default Input;