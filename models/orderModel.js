const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: ObjectId,
            ref: " UserData "
        },
        cartId: {
            type: ObjectId,
            ref: "CartData"
        },
        cancellable: {
            type: Boolean,
            default: false
        },
        orderStatus: {
            type: String,
            default: "pending",
            enum: ["pending", "completed", "cancelled"]
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("OrderData", orderSchema);