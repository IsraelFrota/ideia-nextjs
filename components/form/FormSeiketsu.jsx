import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputRadio from "../InputRadio";

import style from "../../style/style.module.css";

function FormSeiketsu({ handleValue, nextStep, previousStep }) {
	const [employeeConduct, setEmployeeConduct] = useState('');
	const [workingDay, setWorkingDay] = useState('');
	const [generalScheduleRequests, setGeneralScheduleRequests] = useState('');

	const handleEmployeeConduct = (e) => {
		setEmployeeConduct(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiketsu']: {
				...prevState['seiketsu'],
				['employeeConduct']: e.target.value
			}
		}));
	};

	const handleWorkingDay = (e) => {
		setWorkingDay(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiketsu']: {
				...prevState['seiketsu'],
				['workingDay']: e.target.value
			}
		}));
	};

	const handleGeneralScheduleRequestes = (e) => {
		setGeneralScheduleRequests(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['seiketsu']: {
				...prevState['seiketsu'],
				['generalScheduleRequests']: e.target.value
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
						<h4>Aplicação do Seiketsu - Senso de Padronização e Saúde</h4>
					</div>
					<p>
						O Seiketsu é conhecido como senso de padronização e saúde. Nele está inserida a implementação 
						de ideias que aumentem a qualidade em geral, relacionando-se com o conhecimento e planejamento 
						das atividades operacionais diárias e cumprimento de horários estabelecidos. 
					</p>
					<p>
						Para a padronização, também é importante observar o cuidado com a saúde e bem estar dos 
						colaboradores.
					</p>
				</div>
			</label>
			<label className={style.label_container}>
				A imagem e atitudes do colaborador é coerente ao ambiente de trabalho?
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"employeeConduct"}
						value={"Sim"}
						checked={employeeConduct === "Sim"}
						handleChangeValue={handleEmployeeConduct}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"employeeConduct"}
						value={"Não"}
						checked={employeeConduct === "Não"}
						handleChangeValue={handleEmployeeConduct}
					/>
					Não
				</div>
			</label>
			<label className={style.label_container}>
				Os horários definidos estão sendo assiduamente cumpridos?
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"workingDay"}
						value={"Sim"}
						checked={workingDay === "Sim"}
						handleChangeValue={handleWorkingDay}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"workingDay"}
						value={"Não"}
						checked={workingDay === "Não"}
						handleChangeValue={handleWorkingDay}
					/>
					Não
				</div>
			</label>
			<label className={style.label_container}>
				O colaborador está em dias com as solicitações dos cronogramas gerais (Gesta)?
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"generalScheduleRequests"}
						value={"Sim"}
						checked={generalScheduleRequests === "Sim"}
						handleChangeValue={handleGeneralScheduleRequestes}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"generalScheduleRequests"}
						value={"Não"}
						checked={generalScheduleRequests === "Não"}
						handleChangeValue={handleGeneralScheduleRequestes}
					/>
					Não
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio 
						name={"generalScheduleRequests"}
						value={"Em partes"}
						checked={generalScheduleRequests === "Em partes"}
						handleChangeValue={handleGeneralScheduleRequestes}
					/>
					Em partes
				</div>
			</label>
			<label className={style.label_container}>
				Observações:
				<Input 
					type={"text"}
					name={"observation"}
					section={"seiketsu"}
					handleChangeValue={handleObservation}
				/>
			</label>
			<label className={style.label_container}>
				Checklist de evidências
				<div className={style.input_checkbox_style}>
					<InputCheckbox 
						name={"dashboard"}
						value={"Dashboard individual das operações no Gestta"}
						section={"seiketsu"}
					/>
					Captura do dashboard individual das operações no Gestta
				</div>
				<div className={style.input_checkbox_style}>
					<InputCheckbox 
						name={"dashboard"}
						value={"Postura corporal do colaborador"}
						section={"seiketsu"}
					/>
					Captura da postura corporal do colaborador
				</div>
				<div className={style.input_checkbox_style}>
					<InputCheckbox 
						name={"dashboard"}
						value={"Assiduidade do colaborador (Pontomais ou frequência)"}
						section={"seiketsu"}
					/>
					Captura da assiduidade do colaborador (Pontomais ou frequência)
				</div>
			</label>
			<div className={style.container_button}>
				<Button 
					label={"Anterior"}
					handleChange={previousStep}	 
				/>
				<Button 
					label={"Próximo"}
					handleChange={nextStep}	 
				/>
			</div>
		</div>
	);
};

export default FormSeiketsu;