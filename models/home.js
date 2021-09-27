const mongoose = require('mongoose');

var Schema= mongoose.Schema;

var home = new Schema({

    nomeproduto: {
        type: String
    },
    valor: {
        type: String
    },
    tipo: {
        type: String
    },

},
{ 
    timestamps: true,

}
);

mongoose.model('Home', home);