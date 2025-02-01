exports.paginaInicial = (req, res) => {
    res.send(`form action="/" method="POST">
        Nome de cliente: <input type="text" name="nome"
        <button>Hello World</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
}