const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true,
        }
    )
)

app.get('/', (req, res) => {
    res.send(`form action="/" method="POST">
        Nome de cliente: <input type="text" name="nome"
        <button>Hello World</button>
        </form>
        `);
});

app.get('/testes/:idUsuarios?', (req, res) => { //a interrogação indica que o parametro é opcional
    console.log(req.params.idUsuarios);
    res("Hi!");
});

app.post('/', (res, req) => {{
    res.send(`Dados enviados ${req.body.nome}`);
}});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
})