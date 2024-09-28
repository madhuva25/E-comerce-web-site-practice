import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const db = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        default: new Date(),
    }


});


db.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 6);
    }
    next();
});


export default mongoose.model('Employee',db);