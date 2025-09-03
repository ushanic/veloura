const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "employees", required: true },
  perfumeId: { type: mongoose.Schema.Types.ObjectId, ref: "perfumes", required: true },
  name: String,
  price: Number,
  size: String,
  quantity: { type: Number, default: 1 },
  imageUrl: String,
});

const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
