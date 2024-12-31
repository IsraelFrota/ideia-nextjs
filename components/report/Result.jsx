import { useEffect, useState } from "react";

import status from "../../lib/status.json";

import style from "../../style/style.module.css";

function Result({ data, option }) {
	const { score } = data.result;
	const [result, setResult] = useState('');

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	useEffect(() => {
		const resultMap = {
			100: (option === 1) ? 
				status.funny.excellent[getRandomIntInclusive(0, 2)] : 
				(option === 2) ? 
				status.neutral.excellent[getRandomIntInclusive(0, 2)] : 
				status.formal.excellent[getRandomIntInclusive(0, 2)],
			80: (option === 1) ? 
				status.funny.potentialToImprove[getRandomIntInclusive(0, 2)] : 
				(option === 2) ? 
				status.neutral.potentialToImprove[getRandomIntInclusive(0, 2)] : 
				status.formal.potentialToImprove[getRandomIntInclusive(0, 2)],
			default: (option === 1) ? 
				status.funny.notGood[getRandomIntInclusive(0, 2)] : 
				(option === 2) ? 
				status.neutral.notGood[getRandomIntInclusive(0, 2)] : 
				status.formal.notGood[getRandomIntInclusive(0, 2)]
		};
	
		setResult(
			score === 100 ? 
			resultMap[100] : 
			score >= 80 ? 
			resultMap[80] : 
			resultMap.default
		);
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