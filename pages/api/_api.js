import connectDatabase from "../../lib/mongodb";
import Audit from "../../models/Audit";

export default async function handler(request, response) {
	await connectDatabase();

	if (request.method === "GET") {
		try {
			const audit = await Audit.find();
			return response.status(200).json(audit);
		}
		catch (error) {
			return response.status(500).json({ error: "Error fetching audit" });
		}
	}

	if (request.method === "POST") {
		try {
			const { 
				auditInfo,
				seiri,
				seiton,
				seiso,
				seiketsu,
				shitsuke
			} = request.body;
			const newAudit = new Audit({ 
				auditInfo, 
				seiri,
				seiton,
				seiso,
				seiketsu,
				shitsuke 
			});
			await newAudit.save();
			response.status(201).json(newAudit);
		}
		catch (error) {
			response.status(500).json({ error: "Error creating audit" });
		}
	}

	if (request.method === "DELETE") {
		try {
			const { id } = request.body;
			await Audit.findByIdAndDelete(id);
			return response.status(200).json({ message: 'Audit deleted' });
		}
		catch (error) {
			return response.status(500).json({ error: 'Error deleting audit' });
		}
	}

	response.status(405).json({ error: 'Method Not Allowed' });
}