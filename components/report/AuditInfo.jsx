import style from "../../style/style.module.css";

function AuditInfo({ data }) {
	const { date, nameAuditor, nameAudited, sector } = data.auditInfo;

	const dateFormated = new Date(date).toLocaleDateString('pt-br');
	
	return (
		<div className={style.report_data}>
			<div className={style.report_title}>
				<h3>Informações da Auditoria</h3>
			</div>
			<div className={style.report_row}>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>Auditor:</span>
						<span className={style.item_second}>{nameAuditor}</span>
					</p>
					<p className={style.report_item}>
						<span className={style.item_first}>Auditado:</span>
						<span className={style.item_second}>{nameAudited}</span>
					</p>
				</div>
				<div className={style.report_cell}>
					<p className={style.report_item}>
						<span className={style.item_first}>Data:</span>
						<span className={style.item_second}>{dateFormated}</span>
					</p>
					<p className={style.report_item}>
						<span className={style.item_first}>Setor:</span>
						<span className={style.item_second}>{sector}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuditInfo;