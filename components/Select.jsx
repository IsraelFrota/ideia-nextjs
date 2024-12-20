import { useState } from "react";

import style from "../style/style.module.css";

function Select({ name, options, section, handleChangeValue }) {
	const [element, setElement] = useState('');
	
	const handleChange = (e) => {
		setElement(e.target.value);
		
		handleChangeValue(section, name, e.target.value);
	};
	
	return (
		<select 
			className={style.select_style}
			name={name}
			value={element}
			onChange={handleChange}	
		>
			{options.map((option, index) => (
				<option key={index}	value={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default Select;