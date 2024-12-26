import style from "../../style/style.module.css";

function Seiri({ data }) {
	const { meetsTheRequirement, itemNotAllowed, observation, score } = data.seiri;

	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Seiri</h3>
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
		</div>
	);
};

export default Seiri;