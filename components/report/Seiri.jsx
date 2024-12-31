import style from "../../style/style.module.css";

function Seiri({ data }) {
	const { 
		meetsTheRequirement, 
		itemNotAllowed, 
		observation, 
		evidence, 
		score 
	} = data.seiri;

	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Seiri</h3>
				<p>
					O senso de utilização é o primeiro passo da metodologia 5S, que se concentra em identificar e
					separar itens necessários dos não necessários em um ambiente de trabalho. O objetivo é remover
					itens não necessários para liberar espaço e melhorar a eficiência e organização do ambiente de
					trabalho.
				</p>
			</div>
			<div className={style.report_row}>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>De acordo?</span>
						<span className={style.item_second}>{meetsTheRequirement}</span>
					</p>
					<p className={style.report_item}>
						<span className={style.item_first}>Pontuação:</span>
						<span className={style.item_second}>{score}</span>
					</p>
				</div>
				{observation !== "" || itemNotAllowed !== "" ?
					<div className={style.report_cell}>
						<p className={style.report_item}>
							<span className={style.item_first}>Observação:</span>
							<span className={style.item_second}>{observation}</span>
						</p>
						<p className={style.report_item}>
							<span className={style.item_first}>Item não permitido:</span>
							<span className={style.item_second}>{itemNotAllowed}</span>
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

export default Seiri;