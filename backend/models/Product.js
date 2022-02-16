const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const mongoose_fuzzy_searching = require("mongoose-fuzzy-searching");
// Create Schema
const ProductSchema = new Schema({
	ItemName: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
    email: {
        type: String,
        required: true
    },
	tag: [{
        type: String
    }],
    addOnNames: [{
        type: String
    }],
    addOnPrices: [{
        type: Number
    }],
	// image: {
	// 	data: Buffer,
	// 	type: String
	// },
	// vendorating: {
	// 	type: Number,
	// 	required: true,
	// 	default: 0
	// },
	// ratecount: {
	// 	type: Number,
	// 	required: true,
	// 	default: 0
	// },
	// status: {
	// 	type: String,
	// 	required: true,
	// 	default: "Waiting"
	// }
});

// ProductSchema.plugin(mongoose_fuzzy_searching, { fields: ["name"] });
module.exports = products = mongoose.model("product", ProductSchema);
