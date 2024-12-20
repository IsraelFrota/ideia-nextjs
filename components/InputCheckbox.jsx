import style from "../style/style.module.css";

function InputCheckbox({ name, value, section, checked }) {

	return (
		<input 
			className={style.input_checkbox}
			type="checkbox"
			name={name}
			value={value}
			section={section}
			checked={checked}
			required 
		/>
	);
}

export default InputCheckbox;