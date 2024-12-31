import { useEffect, useState } from "react";

import style from "../../style/style.module.css";

function Seiso({ data }) {
	const { 
		equipment, 
		virtualEnvironment, 
		observation, 
		evidence, 
		score 
	} = data.seiso;
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
				<p>
					Seiso é o terceiro passo da metodologia 5S e é traduzido como "limpeza" ou "higienização". Ele se
					concentra em realizar uma limpeza completa e profunda do ambiente de trabalho, incluindo as
					áreas que são normalmente ignoradas ou difíceis de limpar. O objetivo é remover toda a sujeira,
					suor, e sujidade acumulada, para garantir que o ambiente de trabalho seja limpo e saudável para os
					trabalhadores e para aumentar a eficiência e organização. Além disso, é uma oportunidade para
					identificar problemas ocultos, como vazamentos, problemas elétricos, e problemas mecânicos.
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
			<div className={style.report_row}>
					{evidence.map((url, index) => (
						/*<span
							key={index}
						>
							Evidência {index+1}: {url}
						</span>*/
						<img 
							className={style.report_image}
							key={index} 
							src={url} 
							alt={`Evidência ${index+1}`} 
						/>
					))}
			</div>
		</div>
	);
};

export default Seiso;