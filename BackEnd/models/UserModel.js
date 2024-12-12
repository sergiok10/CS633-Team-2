import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName:{ 
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    fridge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fridge',
        required: true
    },
    pantry: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pantry',
        required: true
    },
    days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day',
        required: true
    }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;