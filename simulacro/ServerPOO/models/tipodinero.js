import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    symbol: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
}
)

const crypto = mongoose.model('cryptos', cryptoSchema);

export default crypto;
