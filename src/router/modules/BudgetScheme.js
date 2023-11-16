import mongoose from 'mongoose'

const budgetScheme = new mongoose.Schema({
    
    desc: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    flow: {
        type: String,
        default: "income",
    }
})

export default mongoose.model("Budget", budgetScheme);