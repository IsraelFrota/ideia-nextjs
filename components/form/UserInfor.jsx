import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

import style from "../../style/style.module.css";

function UserInfor({ handleValue, nextStep }) {
	
	const handleEventValue = (section, field, element) => {
		handleValue((prevState) => ({
			...prevState,
			[section]: {
				...prevState[section],
				[field]: element
			}
		}));
	};

	const options = ["Selecione um setor", "Administrativo", "Contábil", "Fiscal", "Pessoal"];

	return (
		<div className={style.container}>
			<label className={style.label_container}>
				<div className={style.label_content}>
					<div>
						<h4>Formulário de Auditória 5S</h4>
					</div>
					<p>
						Formulário para avaliação da metodologia 5S na empresa Israel Frota.
					</p>
				</div>
			</label>
			<label className={style.label_container}>
				Data da auditoria:
				<Input 
					type={"date"}
					name={"date"}
					section={"auditInfo"}
					handleChangeValue={handleEventValue}
				/>
			</label>
			<label className={style.label_container}>
				Nome do auditor:
				<Input 
					type={"text"}
					name={"nameAuditor"}
					section={"auditInfo"}
					handleChangeValue={handleEventValue}
				/>
			</label>
			<label className={style.label_container}>
				Setor:
				<Select 
					name={"sector"} 
					options={options}
					section={"auditInfo"}
					handleChangeValue={handleEventValue} 
				/>
			</label>
			<label className={style.label_container}>
				Profissional auditado:
				<Input 
					type={"text"}
					name={"nameAudited"}
					section={"auditInfo"}
					handleChangeValue={handleEventValue}
				/>
			</label>
			<div className={style.container}>
				<Button 
					label={"Próximo"} 
					handleChange={nextStep}
				/>
			</div>
		</div>
	);
}

export default UserInfor;