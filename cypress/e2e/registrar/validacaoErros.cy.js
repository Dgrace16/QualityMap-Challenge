/// <reference types="cypress" />
import mapiamento from "../../mapping/register.json";
import erro from "../../mapping/errosRegister.json";
import gerarUsuario from "../../support/funcoesGerais.js";


describe('Validação de erros', () => {
  
  context('itens obrigatorios somente', () => {

    beforeEach(() => {
      cy.visit('https://demo.nopcommerce.com')
    })

    it('Sem preenchimento', () => {
      cy.link("Register");
      
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.nome.id,erro.nome.requer)
      cy.erro(erro.sobrenome.id,erro.sobrenome.requer)
      cy.erro(erro.email.id,erro.email.requer)
      cy.erro(erro.senha.id,erro.senha.requer)
      cy.erro(erro.confirmacaoSenha.id,erro.confirmacaoSenha.requer)

    })

    it('item obrigatorios menos nome', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.nome.id,erro.nome.requer)
    })

    it('item obrigatorios menos sobrenome', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.sobrenome.id,erro.sobrenome.requer)
    })

    it('item obrigatorios menos Email', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.email.id,erro.email.requer)
    })

    it('item obrigatorios Email ja cadastrado', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, "Pedro.Oliveira@email.com")
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.confirmacaoSenha.id,erro.email.erro3)
    })

    it('item obrigatorios Email sem @', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, "Pedro.Oliveiraemail.com")
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.email.id,erro.email.erro)
    })

    it('item obrigatorios Email sem .com', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, "Pedro.Oliveira@email")
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.confirmacaoSenha.id,erro.confirmacaoSenha.diferente)
    })

    it('item obrigatorios menos senha', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.senha.id,erro.senha.requer)
    })

    it('item obrigatorios e senha menor que 6 digitos', () => {
      let usuario = gerarUsuario(" ", false)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.senha.id,erro.senha.pequeno)
    })

    it('item obrigatorios menos confimação de senha', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.confirmacaoSenha.id,erro.confirmacaoSenha.requer)
    })

    it('item obrigatorios confimação de senha diferente', () => {
      let usuario = gerarUsuario(" ", true)

      cy.link("Register");

      cy.obrigatorio(mapiamento.nome, usuario.nome)
      cy.obrigatorio(mapiamento.sobrenome, usuario.sobrenome)
      cy.obrigatorio(mapiamento.email, usuario.email)
      cy.obrigatorio(mapiamento.senha, usuario.senha)
      cy.obrigatorio(mapiamento.confirmacaoSenha, 'Teste123')
      cy.get(mapiamento.btnRegistrar).click()

      cy.erro(erro.confirmacaoSenha.id,erro.confirmacaoSenha.diferente)
    })
  
  })
})
