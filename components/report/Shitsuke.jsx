import style from "../../style/style.module.css";

function Shitsuke({ data }) {
	const { 
		prioritizationMatrix, 
		observation,
		evidence, 
		score 
	} = data.shitsuke;

	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Shitsuke</h3>
				<p>
					Shitsuke é o quinto passo da metodologia 5S e é traduzido como “disciplina” ou “manutenção”. Ele
					se concentra em tornar os procedimentos e rotinas estabelecidos no passo anterior (Seiketsu)
					parte da rotina diária e incorporando-os na cultura organizacional.
				</p>
			</div>
			<div className={style.report_row}>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>De acordo?</span>
						<span className={style.item_second}>{prioritizationMatrix}</span>
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

export default Shitsuke;