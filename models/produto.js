const mongoose = require('mongoose');

var Schema= mongoose.Schema;

var produto = new Schema({

    nomeproduto: {
        type: String
    },
    valor: {
        type: String
    },
    tipo: {
        type: String
    },
    quantidade: {
        type: Number
    },
    telefone: {
        type: String
    },
    endereco: {
        type: String
    },
    dia: {
        type: String
    },
    status: {
        type: String
    },


},
{ 
    timestamps: true,

}
);

mongoose.model('Produto', produto);