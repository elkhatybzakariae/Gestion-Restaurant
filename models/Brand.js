const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    
    id_Brand: {
        type: String,
        unique: true,
        maxlength: 100
    },
    brandName: {
        type: String,
        required: [true, "brand must have a name"],
        maxlength: 100
    },

    brandPic: {
        type: String,
        required: [true, "brand must have an image."]
    },
    description: {
        type: String,
        required: [false, ""]
    },



}, {
    timestamps: true
})

const CategoryModel = mongoose.model("Category", BrandSchema);
module.exports = CategoryModel;
