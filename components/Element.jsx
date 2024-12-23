import style from "../style/style.module.css";

function Element({ nameElement, numberElement, typeElement }) {
	return (
		<div className={style.element}>
			<span>{nameElement}</span>
			<p>{numberElement}</p>
			<span>{typeElement}</span>
		</div>
	);
}

export default Element;