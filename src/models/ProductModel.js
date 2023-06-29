const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        author: { type: String, required: true },
        sold: { type: Number, required: true },
        price: { type: Number, required: true },
        pricesale: { type: Number },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
        discount: { type: Number },
        chapter: { type: String },
    },
    {
        timestamps: true,
    },
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
