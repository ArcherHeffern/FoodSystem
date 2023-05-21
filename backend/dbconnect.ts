import mongoose from 'mongoose';

function dbConnect() {
const DB_URL = process.env.DB_URL || ''
console.log(`Database url: ${DB_URL}`)
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on('error', () => console.error.bind(console, 'connection error'))
db.on('open', () => console.log(`connected at ${DB_URL}`))
}

export default dbConnect;