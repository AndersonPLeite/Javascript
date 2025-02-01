
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

let user = {
    id: 1,
    nome: "DaSwag Outlet",
    email: "daswagoutlet@contato.com.br",
    telefone: "(53)3734-7343"
}
app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) => {
    /*res.set("Content-Type", "text/html")
    res.type("json")
    res.send("<h1>Hello World from get</>")
    */

    function render(data, obj){
        for(let key in obj){
            data = data.replace(`{{{${key}}}}`, obj[key])
        }
        
        return data 
    }
   fs.readFile('./index.html', 'UTF8', (err, data) => {
        if(!err){


            res.send(render(data, user))
        }
   })
})

app.post("/", (req, res) => {
    res.send("<h1>Hello World from get</>")
})
const port = 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})