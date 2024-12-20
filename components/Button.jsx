import style from "../style/style.module.css";

function Button({ label, handleChange }) {
	return (
		<button
			className={style.button_style}
			type="button"
			onClick={handleChange}
		>
			{label}
		</button>
	);
}

export default Button;