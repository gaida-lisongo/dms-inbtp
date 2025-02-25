import mongoose from 'mongoose';

const mongodbSchema = new mongoose.Schema({
    // Define your MongoDB schema fields here
    // Example:
    // name: { type: String, required: true },
    // age: { type: Number, required: true },
}, { timestamps: true });

const MongoDBModel = mongoose.model('YourModelName', mongodbSchema);

export default MongoDBModel;