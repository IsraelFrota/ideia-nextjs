import { useState } from "react";

import StepWizard from "react-step-wizard";

import UserInfor from "../components/UserInfor";
import Seiri from "../components/FormSeiri";       // 1°
import Seiton from "../components/FormSeiton";     // 2°
import Seiso from "../components/FormSeiso";       // 3°
import Seiketsu from "../components/FormSeiketsu"; // 4°
import Shitsuke from "../components/FormShitsuke"; // 5°


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
		},
		seiton: {
			objectLocal: '',
			observation: '',
		},
		seiso: {
			equipment: '',
			virtualEnvironment: '',
			observation: '',
		},
		seiketsu: {
			employeeConduct: '',
			workingDay: '',
			generalScheduleRequests: '',
			observation: '',
		},
		shitsuke: {
			prioritizationMatrix: '',
			observation: '',
		}
	});

	const addAudit = async () => {
		const { 
			auditInfo, 
			seiri,  
			seiton,
			seiso,
			seiketsu,
			shitsuke,
		} = formData;

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
				shitsuke
			}),
		});
	};

	return (
		<div>
			<StepWizard>
				<UserInfor handleValue={setFormData} />
				<Seiri handleValue={setFormData} />
				<Seiton handleValue={setFormData} />
				<Seiso handleValue={setFormData} />
				<Seiketsu handleValue={setFormData} />
				<Shitsuke handleValue={setFormData} onAddForm={addAudit} />
			</StepWizard>
		</div>
	);
}

export default App;