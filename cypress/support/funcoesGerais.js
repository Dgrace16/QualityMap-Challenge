import { nomesFemininos, nomesMasculinos, sobrenomes, empresas } from "../fixtures/nomesSobrenomesEmpresas.js";


function gerarUsuario(sexo, valida) {

    let nome = sexo == "F" ? nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)] 
    : sexo == "M" ? nomesMasculinos[Math.floor(Math.random() * nomesMasculinos.length)]
    : (nomesMasculinos.concat(nomesFemininos))[Math.floor(Math.random()* nomesMasculinos.concat(nomesFemininos).length)];
    
    let sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    let nomeEmpresa = empresas[Math.floor(Math.random() * empresas.length)];
    let email = `${nome}.${sobrenome}@dominio.com.br`;
    email = email.toLowerCase().replace(/[^\w\s.@]/gi, '');
    let senha = GerarSenha(valida);


    return { nome, sobrenome, nomeEmpresa, email, senha }
}

function GerarSenha(valida) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];,./';
    let senha = '';
    let tamanho = valida ? 6 : 5;
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    return senha;
}

module.exports = gerarUsuario;