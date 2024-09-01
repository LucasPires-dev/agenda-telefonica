let listaContatos = "";




document.getElementById('form-lista-contatos').addEventListener('submit', function (e){
    e.preventDefault();

    adicionaContato();
    limpaCamposAposCadastro()
    imprimeNaTelaAListaContatos()
})

const adicionaContato = () => {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value

    let contato = '<tr>'
    contato += `<td>${nome}</td>`
    contato += `<td>${sobrenome}</td>`
    contato += `<td>${telefone}</td>`
    contato += `</tr>`

    listaContatos += contato
}

const limpaCamposAposCadastro = () => {
    document.getElementById('nome').value = ''
    document.getElementById('sobrenome').value = ''
    document.getElementById('telefone').value = ''
}

const imprimeNaTelaAListaContatos = () => {
    document.getElementById('lista-contato').innerHTML = listaContatos;
    console.log( listaContatos);
}