import { useEffect, useState } from "react";

import style from "../../style/style.module.css";

function Seiso({ data }) {
	const { equipment, virtualEnvironment, observation, score } = data.seiso;
	const [result, setResult] = useState("");

	useEffect(() => {
		const resultMap = {
			"SimSim": "Sim",
			"SimNão": "Em partes",
			"NãoSim": "Em partes",
			"NãoNão": "Não"
		};

		const resultKey = `${equipment}${virtualEnvironment}`;
		setResult(resultMap[resultKey] || "Não");
	}, [equipment, virtualEnvironment]);

	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Seiso</h3>
			</div>
			<div className={style.report_row}>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>De acordo?</span>
						<span className={style.item_second}>{result}</span>
					</p>
					<p className={style.report_item}>
						<span className={style.item_first}>Pontuação:</span>
						<span className={style.item_second}>{score}</span>
					</p>
				</div>
				{observation !== "" ?
					<div className={style.report_cell}>
						<p className={style.report_item}>
							<span className={style.item_first}>Observação:</span>
							<span className={style.item_second}>{observation}</span>
						</p>
						<p className={style.report_item}>
							<span className={style.item_first}></span>
							<span className={style.item_second}></span>
						</p>
					</div> :
					<></>
				}
			</div>
		</div>
	);
};

export default Seiso;