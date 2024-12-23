import style from "../style/style.module.css";

function Button({ label, handleChange, disabled }) {
	return (
		<button
			className={style.button_style}
			type="button"
			onClick={handleChange}
			disabled={disabled}
		>
			{label}
		</button>
	);
}

export default Button;