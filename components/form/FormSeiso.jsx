import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputRadio from "../InputRadio";

import uploadToGitHub from "../../pages/api/_upload";

import style from "../../style/style.module.css";

function FormSeiso({ handleValue, handleScore, nextStep, previousStep }) {
	const [equipment, setEquipment] = useState('');
	const [virtualEnvironment, setVirtualEnvironment] = useState('');
	const [files, setFiles] = useState(null);
	const [imageUrls, setImagesUrls] = useState([]);

	const sumScore = () => {
		let value = 0;
		if (equipment === "Sim") {
			value += 10;
		}
		if (virtualEnvironment === "Sim") {
			value += 10;
		}
		return value;
	};

	const handleImagesUpload = async () => {
		if (!files) {
			return;
		}

		const urls = [];

		for (let index = 0; index < files.length; index++) {
			try {
				const responseUrl = await uploadToGitHub(files[index], files[index].name);
				const rawUrl = responseUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
				urls.push(rawUrl);
			} catch (error) {
				console.log(error);
			}
		}

		setImagesUrls(urls);
	};

	const handleEventScore = () => {
		const value = sumScore();
		handleScore(value);
		handleScoreSeiso(value);
		handleImageSeiso();
		nextStep();
	};

	const handleImageSeiso = () => {
		handleValue((prevState) => ({
			...prevState,
			['seiso']: {
				...prevState['seiso'],
				['evidence']: imageUrls
			}
		}));
	};

	const handleScoreSeiso = (value) => {
		handleValue((prevState) => ({
			...prevState,
			['seiso']: {
				...prevState['seiso'],
				['score']: value
			}
		}));
	};

	const handleEquipment = (e) => {
		setEquipment(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiso']: {
				...prevState['seiso'],
				['equipment']: e.target.value
			}
		}));
	};

	const handleVirtualEnvironment = (e) => {
		setVirtualEnvironment(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiso']: {
				...prevState['seiso'],
				['virtualEnvironment']: e.target.value
			}
		}));
	};

	const handleObservation = (section, field, element) => {
		handleValue((prevState) => ({
			...prevState,
			[section]: {
				...prevState[section],
				[field]: element
			}
		}));
	};

	return (
		<div className={style.container}>
			<label className={style.label_container}>
				<div className={style.label_content}>
					<div>
						<h4>Aplicação do Seiso - Senso de Limpeza</h4>
					</div>
					<p>
						Seiso é o terceiro passo da metodologia 5S e é traduzido como "limpeza" ou "higienização".
						Ele se concentra em realizar uma limpeza completa e profunda do ambiente de trabalho físico
						e virtual, incluindo as áreas que são normalmente ignoradas.
					</p>
					<p>
						O objetivo é remover toda a sujeira, acúmulos, para garantir que o ambiente de trabalho seja
						limpo e saudável para os trabalhadores e para aumentar a eficiência e organização. Além disso,
						é uma oportunidade para identificar problemas ocultos.
					</p>
				</div>
			</label>
			<label className={style.label_container}>
				Os instrumentos necessários para a realização das tarefas estão higienizados e em pleno estado de
				conservação? (Equipamentos)
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"equipment"}
						value={"Sim"}
						checked={equipment === "Sim"}
						handleChangeValue={handleEquipment}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"equipment"}
						value={"Não"}
						checked={equipment === "Não"}
						handleChangeValue={handleEquipment}
					/>
					Não
				</div>
			</label>
			<label className={style.label_container}>
				Os instrumentos necessários para a realização das tarefas estão em pleno estado de conservação?
				(Ambiente Virtual)
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"virtualEnvironment"}
						value={"Sim"}
						checked={virtualEnvironment === "Sim"}
						handleChangeValue={handleVirtualEnvironment}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"virtualEnvironment"}
						value={"Não"}
						checked={virtualEnvironment === "Não"}
						handleChangeValue={handleVirtualEnvironment}
					/>
					Não
				</div>
			</label>
			<label className={style.label_container}>
				Observações:
				<Input
					type={"text"}
					name={"observation"}
					section={"seiso"}
					handleChangeValue={handleObservation}
				/>
			</label>
			<label className={style.label_container}>
				Checklist de evidências
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"workstation"}
						value={"Limpeza da estação de trabalho"}
						section={"seiso"}
					/>
					Limpeza dos equipamentos
				</div>
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"machine"}
						value={"Elementos do ambiente virtual"}
						section={"seiso"}
					/>
					Captura da lixeira no ambiente virtual (e-mail corporativo, área de trabalho e
					pasta de download)
				</div>
			</label>
			<label className={style.label_container}>
				Evidências:
				<div className={style.upload}>
					<input
						type="file"
						name="evidence"
						multiple
						onChange={(e) => setFiles(e.target.files)}
					/>
					<button onClick={handleImagesUpload}>
						Salvar
					</button>
				</div>
			</label>
			<div className={style.container_button}>
				<Button
					label={"Anterior"}
					handleChange={previousStep}
				/>
				<Button
					label={"Próximo"}
					handleChange={handleEventScore}
				/>
			</div>
		</div>
	);
}

export default FormSeiso;