import Link from "next/link";

import Element from "../components/Element";
import Sidebar from "../components/Sidebar";

import style from "../style/style.module.css";

function Home() {
	return (
		<div className={style.home_container}>
			<div className={style.side_area}>
				<Sidebar className={style.sidebar}>
					<div className={style.option}>
						<Link href="/formAudit" className={style.text_link}>
							Auditoria
						</Link>
					</div>
					<div className={style.option}>
						<Link href="/export" className={style.text_link}>
							Exportar
						</Link>
					</div>
				</Sidebar>
			</div>
			<div className={style.main_area}>
				<div className={style.program_description}>
					<h3>Programa 5s</h3>
					<p>
						É um programa que visa aumentar e melhorar a qualidade de vida de todas pessoas na organização.
					</p>
				</div>
				<div className={style.program_5s}>
					<div className={style.row1}>
						<Element
							nameElement={"Seiri"}
							numberElement={"01"}
							typeElement={"Operacional"}
						/>
					</div>
					<div className={style.row2}>
						<Element
							nameElement={"Shitsuke"}
							numberElement={"05"}
							typeElement={"Psicológica"}
						/>
						<div>
							<h1>5S</h1>
						</div>
						<Element
							nameElement={"Seiton"}
							numberElement={"02"}
							typeElement={"Operacional"}
						/>
					</div>
					<div className={style.row3}> 
						<Element
							nameElement={"Seiketsu"}
							numberElement={"04"}
							typeElement={"Psicológica"}
						/>
						<Element
							nameElement={"Seiso"}
							numberElement={"03"}
							typeElement={"Operacional"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;