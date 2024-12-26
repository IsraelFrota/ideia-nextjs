import { useEffect, useState } from "react";

import style from "../../style/style.module.css";

function Result({ data }) {
	const { score } = data.result;
	const [result, setResult] = useState('');

	useEffect(() => {
		const resultMap = {
			100: "Excelente!",
			80: "Bom mas pode melhorar.",
			default: "Não está nada bom."
		};
	
		setResult(score === 100 ? resultMap[100] : score >= 80 ? resultMap[80] : resultMap.default);
	}, [score]);

	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Resultado</h3>
			</div>
			<div className={style.report_row}>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>Status:</span>
						<span className={style.item_second}>{result}</span>
					</p>
					<p className={style.report_item}>
						<span className={style.item_first}>Pontuação total:</span>
						<span className={style.item_second}>{score}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Result;