import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import InputRadio from "../InputRadio";

import style from "../../style/style.module.css";

function FormSeiri({ handleValue, handleScore, nextStep, previousStep }) {
	const [selected, setSelected] = useState('');

	const handleEventScore = () => {
		const value = (selected === "Sim") ? 20 : (selected === "Não") ? 0 : 10;
		handleScore(value);
		handleScoreSeiri(value);
		nextStep();
	};

	const handleScoreSeiri = (value) => {
		handleValue((prevState) => ({
			...prevState,
			['seiri']: {
				...prevState['seiri'],
				['score']: value
			}
		}));
	};

	const handleEvent = (e) => {
		setSelected(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiri']: {
				...prevState['seiri'],
				['meetsTheRequirement']: e.target.value
			}
		}));
	};

	const handleEventValue = (section, field, element) => {
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
						<h4>Aplicação do Seiri - Senso de Utilização</h4>
					</div>
					<p>
						O senso de utilização é o primeiro passo da metodologia 5S, que se concentra em 
						identificar e separar itens necessários dos não necessários em um ambiente de trabalho. 
					</p>
					<p>
						O objetivo é remover itens não necessários para liberar espaço e melhorar a eficiência e 
						organização do ambiente de trabalho.
					</p>
				</div>
			</label>
			<label className={style.label_container}>
				<ul>
					<li>Foi separado os itens de acordo com a sua utilidade?</li> 
					<li>Os itens expostos no ambiente são necessários para a execução da tarefa? (pontua)</li>
				</ul>
			</label>
			<label className={style.label_container}>
				Obedece ao requisito?
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"meetsTheRequirement"}
						value={"Sim"}
						checked={selected === "Sim"}
						handleChangeValue={handleEvent}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"meetsTheRequirement"}
						value={"Não"}
						checked={selected === "Não"}
						handleChangeValue={handleEvent}
					/>
					Não
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"meetsTheRequirement"}
						value={"Em partes"}
						checked={selected === "Em partes"}
						handleChangeValue={handleEvent}
					/>
					Em partes
				</div>
			</label>
			<label className={style.label_container}>
				Item não permitido:
				<Input
					type={"text"}
					name={"itemNotAllowed"}
					section={"seiri"}
					handleChangeValue={handleEventValue}
				/>
			</label>
			<label className={style.label_container}>
				Observações:
				<Input
					type={"text"}
					name={"observation"}
					section={"seiri"}
					handleChangeValue={handleEventValue}
				/>
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

export default FormSeiri;