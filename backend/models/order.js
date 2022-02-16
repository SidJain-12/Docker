const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const mongoose_fuzzy_searching = require("mongoose-fuzzy-searching");
// Create Schema
const OrderSchema = new Schema({
	PlacedTime: {
		type: String,
		required: true
	},
	VendorName: {
		type: String,
		required: true
	},
	ItemName: {
		type: String,
		required: true
	},
	Quantity: {
		type: Number,
		required: true,
	},
    Status: {
        type: String,
        required: true,
        default: "Pending"
    },
    Cost: {
        type: String
    },
    Rating: {
        type: String
    }
});

// ProductSchema.plugin(mongoose_fuzzy_searching, { fields: ["name"] });
module.exports = order = mongoose.model("product", OrderSchema);
