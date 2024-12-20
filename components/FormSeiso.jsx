import { useState } from "react";

import Button from "./Button";
import Input from "./Input";
import InputCheckbox from "./InputCheckbox";	
import InputRadio from "./InputRadio";

import style from "../style/style.module.css";

function FormSeiso({ handleValue, nextStep, previousStep }) {
	const [equipment, setEquipment] = useState('');
	const [virtualEnvironment, setVirtualEnvironment] = useState('');

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
}

export default FormSeiso;