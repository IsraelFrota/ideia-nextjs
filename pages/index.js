import Link from "next/link";
import Sidebar from "../components/Sidebar";

import style from "../style/style.module.css";

function Home() {
	return (
		<div className={style.home_container}>
			<div className={style.side_area}>
				<Sidebar>
					<div className={style.option}>
						<Link href="/formAudit" className={style.text_link}>
							Auditoria
						</Link>
					</div>
					<div className={style.option}>
						<Link href="/" className={style.text_link}>
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
						<div className={style.element}>
							<span>Seiri	</span>
							<p>01</p>
							<span>Operacional</span>
						</div>
					</div>
					<div className={style.row2}>
						<div className={style.element}>
							<span>Shitsuke</span>
							<p>05</p>
							<span>Psicológica</span>
						</div>
						<div>
							<h1>5S</h1>
						</div>
						<div className={style.element}>
						<span>Seiton</span>
							<p>02</p>
							<span>Operacional</span>
						</div>
					</div>
					<div className={style.row3}> 
						<div className={style.element}>
							<span>Seiketsu</span>
							<p>04</p>
							<span>Psicológica</span>
						</div>
						<div className={style.element}>
							<span>Seiso</span>
							<p>03</p>
							<span>Operacional</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;