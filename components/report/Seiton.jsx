import style from "../../style/style.module.css";

function Seiton({ data }) {
	const { objectLocal, observation, score } = data.seiton;
	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Seiton</h3>
				<p>
					O senso de ordenação preza pela identificação e otimização de fluxos de trabalho, áreas de
					trabalho, equipamentos e ferramentas, materiais, documentos, sinais, iluminação, limpeza,
					segurança e espaço.
				</p>
			</div>
			<div className={style.report_row}>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>De acordo?</span>
						<span className={style.item_second}>{objectLocal}</span>
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

export default Seiton;