const express = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const app = express();


require('./models/home');
const Home = mongoose.model('Home')

//recebe o json e envia pro banco
app.use(express.json ());

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, POST , PUT , DELETE ');
    res.header("Access-Control-Allow-Headers", 'Content-Type , Authorization ');
    app.use(cors());
    next();
});


//conectando e criando o banco de dados
mongoose.connect('mongodb://localhost/myapp', {
    useNewUrlParser: true
}).then(() => {
    console.log("Conexão ao banco MongoDB realizado com sucesso");
}).catch((erro) => {
    console.log("ERRO:Conexão ao banco MongoDB não realizada" + erro);
});


//acessar uma pagaina 
app.get( "/home" , ( req , res) => {

    Home.find({}).then((home) => {
        return res.json({
            home
        })
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Erro: Nenhum registro encontrado"
        })
    })


});


//cadastrar produto
app.post("/home", (req, res) => {
    Home.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Conteudo da pagina home não cadastrado com sucesso"
        })
    })

    return res.json({
        error: false,
        message: " Conteudo da pagina home  cadastrado com sucesso"
    })
})

app.listen(8080, () => {
    console.log("servido iniciado na porta 8080: http://localhost:8080")
});


