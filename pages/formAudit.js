import { useState } from "react";

import StepWizard from "react-step-wizard";

import UserInfor from "../components/form/UserInfor";
import Seiri from "../components/form/FormSeiri";       // 1°
import Seiton from "../components/form/FormSeiton";     // 2°
import Seiso from "../components/form/FormSeiso";       // 3°
import Seiketsu from "../components/form/FormSeiketsu"; // 4°
import Shitsuke from "../components/form/FormShitsuke"; // 5°

import style from "../style/style.module.css";

function App() {
	const [formData, setFormData] = useState({
		auditInfo: {
			date: '', 
			nameAuditor: '', 
			nameAudited: '', 
			sector: '',
		},
		seiri: {
			meetsTheRequirement: '',
			itemNotAllowed: '',
			observation: '',
			score: 0,
			evidence: [],
		},
		seiton: {
			objectLocal: '',
			observation: '',
			score: 0,
			evidence: [],
		},
		seiso: {
			equipment: '',
			virtualEnvironment: '',
			observation: '',
			score: 0,
			evidence: [],
		},
		seiketsu: {
			employeeConduct: '',
			workingDay: '',
			generalScheduleRequests: '',
			observation: '',
			score: 0,
			evidence: [],
		},
		shitsuke: {
			prioritizationMatrix: '',
			observation: '',
			score: 0,
			evidence: [],
		},
		result: {
			score: 0
		}
	});

	const handleScore = (value) => {
		setFormData((prevState) => ({
			...prevState,
			result: {
				...prevState.result,
				score: formData.result.score + value
			}
		}));
	};

	const addAudit = async () => {
		const { 
			auditInfo, 
			seiri,  
			seiton,
			seiso,
			seiketsu,
			shitsuke,
			result
		} = formData;

		console.log(formData);

		try {
			const response = fetch('/api/_api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ 
					auditInfo,
					seiri,
					seiton,
					seiso,
					seiketsu,
					shitsuke,
					result
				}),
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<StepWizard className={style.wizard}>
				<UserInfor 
					handleValue={setFormData} 
				/>
				<Seiri 
					handleValue={setFormData} 
					handleScore={handleScore} 
				/>
				<Seiton 
					handleValue={setFormData} 
					handleScore={handleScore} 
				/>
				<Seiso 
					handleValue={setFormData} 
					handleScore={handleScore} 
				/>
				<Seiketsu 
					handleValue={setFormData} 
					handleScore={handleScore} 
				/>
				<Shitsuke 
					handleValue={setFormData} 
					handleScore={handleScore} 
					onAddForm={addAudit} 
				/>
			</StepWizard>
		</div>
	);
}

export default App;