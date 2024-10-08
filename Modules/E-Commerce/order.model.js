const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderprice: {
      type: Number,
      required: ture,
    },
    customer: {
      type: mongoose.Schema.type.ObjectId,
      ref: "User",
    },
    OrderItems: {
      type: [OrderItems],
    }, 
    addresh: { type: [Addresh] },

    status: {
      type: String,
      enum: ["Panding", "Cancle", "Deliverd"],
      default: "Panding",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
