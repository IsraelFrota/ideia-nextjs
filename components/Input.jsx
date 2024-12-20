import { useState } from "react";

import style from "../style/style.module.css";

function Input({ type, name, section, handleChangeValue }) {
	const [element, setElement] = useState('');

	const handleChange = (e) => {
		setElement(e.target.value);

		handleChangeValue(section, name, e.target.value);
	};

	return (
		<input 
			className={style.input_style}
			type={type}
			name={name}
			value={element}
			onChange={handleChange} 
			required 
		/>
	);
}

export default Input