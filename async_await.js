const fs = require('fs')

const pessoas = [
    {nome: 'raphaeliarussi', mail: 'raphael.iarussi@btgpactual.com'},
    {nome: 'orlandosantos', mail: 'orlando.santos@btgpactual.com'},
    {nome: 'andrepires', mail: 'andre.pires@btgpactual.com'},    
]

function lerArquivo(nomeDaPessoa) {
    return new Promise( resolve => {
        fs.readFile( nomeDaPessoa + '.txt', 'utf-8', (er, dt) => {
            resolve(dt);
        });
    })
};

async function fetchFiles () {
    const promises = pessoas.map( async pessoa => {
        const file = await lerArquivo(pessoa.nome)
        return file
    })
    const results = await Promise.all(promises)
    console.log(promises);
    console.log(results)
}

fetchFiles()
