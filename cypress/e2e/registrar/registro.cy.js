/// <reference types="cypress" />
import mapiamento from "../../mapping/register.json";
import gerarUsuario from "../../support/funcoesGerais.js";


describe('Registros validos ', () => {
  
  context('Utilizando o sexo masculino', () => {

    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com')
    })

    it('Todos os campos preenchidos', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem data de nascimento', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem ano', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem mês', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem dia', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem nome empresa', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem informativo', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Somente campos obrigatorios', () => {
      let usuario = gerarUsuario("M", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.Masculino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })
  
  })

  context('Utilizando o sexo feminino', () => {

    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com')
    })

    it('Todos os campos preenchidos', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "12")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem data de nascimento', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem ano', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem mês', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem dia', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem nome empresa', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem informativo', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Somente campos obrigatorios', () => {
      let usuario = gerarUsuario("F", true)

      cy.link("Register");

      cy.get(mapiamento.sexo.feminino).check();
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })
  
  })

  context('Sem utilizar sexo', () => {

    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com')
    })

    it('Todos os campos preenchidos', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "12")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem data de nascimento', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem ano', () => {
     let usuario = gerarUsuario("", true)

      cy.link("Register");
      
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem mês', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");
      
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem dia', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");
      
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem nome empresa', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");
      
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.boletim).check()
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Sem informativo', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");
      
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.nascimento(mapiamento.dtNascimento.dia, "21")
      cy.nascimento(mapiamento.dtNascimento.mes, "8")
      cy.nascimento(mapiamento.dtNascimento.ano, "2000")
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.get(mapiamento.nomeEmpresa).type(usuario.nomeEmpresa)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })

    it('Somente campos obrigatorios', () => {
      let usuario = gerarUsuario("", true)

      cy.link("Register");
      
      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.link("Continue")

      cy.login(usuario.email,usuario.senha)
    })
  
  })
})
