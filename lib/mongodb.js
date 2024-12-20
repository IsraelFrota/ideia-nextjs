import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error('MongoDB URI is missing');
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { connection: null, promise: null };
}

async function connectDatabase() {
	if (cached.connection)
		return cached.connection;

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
			return mongooseInstance;
		});
	}

	cached.connection = await cached.promise;
	return cached.connection;
}

export default connectDatabase;