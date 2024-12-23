import mongoose from "mongoose";

const AuditSchema = new mongoose.Schema({
	auditInfo: {
		date: {
			type: Date,
			required: true,
		},
		nameAuditor: {
			type: String,
			required: true,
		},
		nameAudited: {
			type: String,
			required: true,
		},
		sector: {
			type: String,
			required: true,
		},
	},
	seiri: {
		meetsTheRequirement: {
			type: String,
			required: true
		},
		itemNotAllowed: {
			type: String,
		}, 
		observation: {
			type: String,
		},
		score: {
			type: Number,
			required: true
		},
	},
	seiton: {
		objectLocal: {
			type: String,
			required: true
		},
		observation: {
			type: String,
		},
		score: {
			type: Number,
			required: true
		},
	},
	seiso: {
		equipment: {
			type: String,
			required: true
		},
		virtualEnvironment: {
			type: String,
			required: true
		},
		observation: {
			type: String,
		},
		score: {
			type: Number,
			required: true
		},
	},
	seiketsu: {
		employeeConduct: {
			type: String,
			required: true
		},
		workingDay: {
			type: String,
			required: true
		},
		generalScheduleRequests: {
			type: String,
			required: true
		},
		observation: {
			type: String,
		},
		score: {
			type: Number,
			required: true
		},
	},
	shitsuke: {
		prioritizationMatrix: {
			type: String,
			required: true
		},
		observation: {
			type: String,
		},
		score: {
			type: Number,
			required: true
		},
	},
	result: {
		score: {
			type: Number,
			required: true
		}
	}
});

export default mongoose.models.Audit || mongoose.model("Audit", AuditSchema);