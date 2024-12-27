import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "../Button";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputRadio from "../InputRadio";

import style from "../../style/style.module.css";

function FormShitsuke({ handleValue, handleScore, onAddForm, previousStep }) {
	const [prioritizationMatrix, setPrioritizationMatrix] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [modal, setModal] = useState(false);
	const [styleConditional, setStyleConditional] = useState(false);
	const [larguraProgresso, setLarguraProgresso] = useState(0);

	const router = useRouter();

	const handleEventScore = () => {
		const value = (prioritizationMatrix === "Sim") ? 20 : 0;
		handleScore(value);
		handleScoreShitsuke(value);
		setDisabled(!disabled);
	};

	const handleScoreShitsuke = (value) => {
		handleValue((prevState) => ({
			...prevState,
			['shitsuke']: {
				...prevState['shitsuke'],
				['score']: value
			}
		}));
	};

	const handlePrioritizationMatrix = (e) => {
		setPrioritizationMatrix(e.target.value);
		handleValue((prevState) => ({
			...prevState,
			['shitsuke']: {
				...prevState['shitsuke'],
				['prioritizationMatrix']: e.target.value
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

	const handleAddForm = () => {
		setModal(true);
		setStyleConditional(true);
		onAddForm();
	};

	useEffect(() => {
		if (modal) {
			const interval = setInterval(() => {
				setLarguraProgresso(prev => {
					if (prev == 100) {
						clearInterval(interval);
						return prev;
					}
					return prev + 5;
				});
			}, 100);

			const time = setTimeout(() => {
				setModal(false)
				setStyleConditional(false);
				router.push('/');
			}, 2000);
			return () => {
				clearInterval(interval);
				clearTimeout(time);
			}
		}
	}, [modal]);

	return (
		<div className={style.container}>
			<label className={style.label_container}>
				<div className={style.label_content}>
					<div>
						<h4>Aplicação do Shitsuke - Senso de Autodisciplina</h4>
					</div>
					<p>
						Shitsuke é o quinto passo da metodologia 5S e é traduzido como “disciplina” ou “manutenção”.
						Ele se concentra em tornar os procedimentos e rotinas estabelecidos no passo anterior (Seiketsu)
						parte da rotina diária e incorporando-os na cultura organizacional.
					</p>
				</div>
			</label>
			<label className={style.label_container}>
				Existe algum tipo de monitoramento e avaliação contínuos para garantir que os procedimentos e
				rotinas estejam sendo seguidos corretamente?
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"prioritizationMatrix"}
						value={"Sim"}
						checked={prioritizationMatrix === "Sim"}
						handleChangeValue={handlePrioritizationMatrix}
					/>
					Sim
				</div>
				<div className={style.input_radio_content_style}>
					<InputRadio
						name={"prioritizationMatrix"}
						value={"Não"}
						checked={prioritizationMatrix === "Não"}
						handleChangeValue={handlePrioritizationMatrix}
					/>
					Não
				</div>
			</label>
			<label className={style.label_container}>
				Observações:
				<Input
					type={"text"}
					name={"observation"}
					section={"shitsuke"}
					handleChangeValue={handleObservation}
				/>
			</label>
			<label className={style.label_container}>
				Checklist de evidências
				<div className={style.input_checkbox_style}>
					<InputCheckbox
						name={"prioritization matrix"}
						value={"Ferramenta de controle"}
						section={"shitsuke"}
					/>
					Captura da Matriz de Priorização do Colaborador ou Instrumento que Evidencie
					Planejamento, seja e grupo ou individual
				</div>
			</label>
			<div className={style.container_button}>
				<Button
					label={"Anterior"}
					handleChange={previousStep}
				/>
				{disabled ?
					<Button 
						label={"Salvar"}
						handleChange={handleEventScore}
					/> :
					<Button
						label={"Enviar"}
						handleChange={handleAddForm}
					/>
				}
			</div>
			<div>
				{styleConditional && (
					<div>
						<div className={style.modal}>Formulário salvo com sucesso!</div>
						<div className={style.progress}
						>
							<div
								style={{
									height: '100%',
									width: `${larguraProgresso}%`,
									backgroundColor: '#4caf50',
									transition: 'width 0.1s ease-in-out',
									borderRadius: '3px',
								}}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default FormShitsuke