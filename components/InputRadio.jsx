import style from "../style/style.module.css";

function InputRadio({ name, value, checked, handleChangeValue }) {

	return (
		<input 
			className={style.input_radio}
			type="radio"
			name={name}
			value={value}
			checked={checked}
			onChange={handleChangeValue}
			required 
		/>
	);
}

export default InputRadio;