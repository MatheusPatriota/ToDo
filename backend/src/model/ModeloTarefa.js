const  mongoose = require('../config/database');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true}, 
    tipo: {type: Number, required: true},
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    quando: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Tarefa', TaskSchema);