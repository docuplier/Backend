const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
	src: {
		type: String,
		required: true,
	},
	width: {
		type: Number,
		required: true,
		default: 0
	},
	height: {
		type: Number,
		required: true,
		default: 0
	},
}, {_id: false})
const fieldSchema = new mongoose.Schema({
	fieldName: {
		type: String,
		required: true,
	},
	fontFamily: {
		type: String,
		required: true,
		default: "",
	},
	width: {
		type: mongoose.Decimal128,
		required: true,
	},
	height: {
		type: mongoose.Decimal128,
		required: true,
	},
	top: {
		type: mongoose.Decimal128,
		required: true,
	},
	bottom: {
		type: mongoose.Decimal128,
		required: true,
	},
	left: {
		type: mongoose.Decimal128,
		required: true,
	},
	right: {
		type: mongoose.Decimal128,
		required: true,
	},
	x: {
		type: mongoose.Decimal128,
		required: true,
	},
	y: {
		type: mongoose.Decimal128,
		required: true,
	},
}, {_id: false})
const clientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	extras: {
		type: Object,
		required: false,
	},
})
const docSchema = new mongoose.Schema(
	{
		orgName: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: imageSchema,
		product: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'Product',
			required: true,
		},
		owner: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'User',
			required: true,
		},
		fields: [fieldSchema],
		clients: [clientSchema],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Document', docSchema)
