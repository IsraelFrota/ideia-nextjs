import style from "../style/style.module.css";

function InputCheckbox({ name, value, section, checked, handleChangeValue }) {

	const handle = () => {
		handleChangeValue(section, name, value);
	};

	return (
		<input 
			className={style.input_checkbox}
			type="checkbox"
			name={name}
			value={value}
			section={section}
			checked={checked}
			onChange={handle}
			required 
		/>
	);
}

export default InputCheckbox;