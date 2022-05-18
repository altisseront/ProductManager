const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
	title: {
		type:String,
		required:[true, "Title is required"],
		minlength:[2, "Title must be at least 2 character"]
	},
	price: {
		type:Number,
		required:[true, "Price is required"],
		min:[0.01, "Price must be above $0"]
	},
    description: {
		type:String,
		required:[true, "Description is required"],
		minlength:[6, "Description must be at least 6 character"]
    }
},{timestamps:true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;