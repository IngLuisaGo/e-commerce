const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComprasSchema = new Schema({
    id_cliente:{type:String, required:true, max:60},
    subtotal:{type:Number, required:true, max:10000, min: 0},
    id_productos:{type:[String], required:true, max:10}
});

module.exports = mongoose.model("compras", ComprasSchema);