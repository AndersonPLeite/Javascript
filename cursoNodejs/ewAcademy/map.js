const service = require('./service')

async function main(){  //manipula promisses por isso async
    try{
      /* 1-  const results = await service.obterPessoas('a')
        const names = []
        results.results.forEach(function (item){
            names.push(item.name)
        }) 

        2- const names = results.results.map(function(pessoa){
            return pessoa.name
        }) */

        const names = results.results.map((pessoa) => pessoa.name)
        console.log('names', names)
    }catch(error){
        console.error('Deu ruim', error)
    }
}   

main()

