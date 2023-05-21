import mongoose, { Schema } from 'mongoose';

const Nonprofit = new Schema({
    name: String,
    profileUrl: String,
    logoUrl: String,
    lat_long: String,
    servings: Number,
    days_open: {
        monday: Boolean,
        tuesday: Boolean,
        wednesday: Boolean,
        thursday: Boolean,
        friday: Boolean,
        saturday: Boolean,
        sunday: Boolean,
    }
})

export default mongoose.models.Nonprofit || mongoose.model('Nonprofit', Nonprofit);