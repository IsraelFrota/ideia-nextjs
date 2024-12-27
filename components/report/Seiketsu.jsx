import { useEffect, useState } from "react";

import style from "../../style/style.module.css";

function Seiketsu({ data }) {
	const { employeeConduct, workingDay, generalScheduleRequests, observation, score } = data.seiketsu;
	const [result, setResult] = useState("");

	useEffect(() => {
		const resultMap = {
			"SimSimSim": "Sim",
			"SimSimNão": "Em partes",
			"SimSimEm partes": "Em partes",
			"SimNãoSim": "Em partes",
			"SimNãoNão": "Não",
			"SimNãoEm partes": "Não",
			"NãoSimSim": "Em partes",
			"NãoSimNão": "Não",
			"NãoSimEm partes": "Não",
			"NãoNãoSim": "Não",
			"NãoNãoNão": "Não",
			"NãoNãoEm partes": "Não"
		};

		const resultKey = `${employeeConduct}${workingDay}${generalScheduleRequests}`;
		setResult(resultMap[resultKey] || "Não");
	}, [employeeConduct, workingDay, generalScheduleRequests]);

	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Seiketsu</h3>
				<p>
					Seiketsu é o quarto passo da metodologia 5S, que se concentra em estabelecer e manter a ordem e
					limpeza através da criação de procedimentos e rotinas, treinamento de funcionários e inspeções
					regulares, visando manter a limpeza e organização a longo prazo.
				</p>
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

export default Seiketsu;