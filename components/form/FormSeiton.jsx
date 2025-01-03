import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputRadio from "../InputRadio";

import uploadToGitHub from "../../pages/api/_upload";

import style from "../../style/style.module.css";

function FormSeiton({ handleValue, handleScore, nextStep, previousStep }) {
	const [objectLocal, setObjectLocal] = useState('');
	const [files, setFiles] = useState(null);
	const [imageUrls, setImagesUrls] = useState([]);

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
		const value = (objectLocal === "Sim") ? 20 : 0;
		handleScore(value);
		handleScoreSeiton(value);
		handleImageSeiton();
		nextStep();
	};

	const handleImageSeiton = () => {
		handleValue((prevState) => ({
			...prevState,
			['seiton']: {
				...prevState['seiton'],
				['evidence']: imageUrls
			}
		}));
	};

	const handleScoreSeiton = (value) => {
		handleValue((prevState) => ({
			...prevState,
			['seiton']: {
				...prevState['seiton'],
				['score']: value
			}
		}));
	};

	const handleObjectLocal = (e) => {
		setObjectLocal(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiton']: {
				...prevState['seiton'],
				['objectLocal']: e.target.value
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
						<h4>Aplicação do Seiton - Senso de Organização</h4>
					</div>
					<p>
						O Seiton é o segundo senso da metodologia 5s, sendo este o senso de
						organização. Sua principal característica é a redução do tempo do
						processo produtivo, devido às atividades implementadas através dele,
						que seriam a organização do espaço, de forma a priorizar e estabelecer
						o local em que cada material ou ferramenta deve estar.
					</p>
				</div>
			</label>
			<label className={style.label_container}>
				Há um local determinado para cada tipo de objeto?
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"objectLocal"}
						value={"Sim"}
						checked={objectLocal === "Sim"}
						handleChangeValue={handleObjectLocal}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"objectLocal"}
						value={"Não"}
						checked={objectLocal === "Não"}
						handleChangeValue={handleObjectLocal}
					/>
					Não
				</div>
			</label>
			<label className={style.label_container}>
				Observações:
				<Input
					type={"text"}
					name={"observation"}
					section={"seiton"}
					handleChangeValue={handleObservation}
				/>
			</label>
			<label className={style.label_container}>
				Checklist de evidências
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"desktop"}
						value={"Área de trabalho da máquina"}
						section={"seiton"}
					/>
					Captura da Área de Trabalho do Colaborador
				</div>
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"inbox"}
						value={"Caixa de entrada do e-mail"}
						section={"seiton"}
					/>
					Captura da caixa de entrada do e-mail corporativo
				</div>
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"directory"}
						value={"Pasta mais utilizada"}
						section={"seiton"}
					/>
					Captura das pastas, se estão identificadas ou que critério o colaborador utiliza
				</div>
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"download"}
						value={"Pasta de download da máquina"}
						section={"seiton"}
					/>
					Pasta downloads
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

export default FormSeiton;