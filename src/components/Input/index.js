import './Input.css';

function Input({placeholder, handleChange}) {
  return (
    <div >
      <input type="text" className="Input" placeholder={placeholder} onChange={handleChange}></input>
    </div>
  );
}

export default Input;