
Cypress.Commands.add('link',(rota)=>{
    cy.get('a').contains(rota).click();
})

Cypress.Commands.add('obrigatorio',(campo, valor)=>{
    cy.get(campo).type(valor);
})

Cypress.Commands.add('nascimento',(campo, valor)=>{
    cy.get(campo).select(valor);
})

Cypress.Commands.add('login',(email, senha)=>{
    cy.get('a').contains('Log in').click();
    cy.get('#Email').type(email);
    cy.get('#Password').type(senha);
    cy.get('button').contains('Log in').click();
})


Cypress.Commands.add('erro',(campo, mensagem)=>{
    cy.wait(1000);
    cy.get(campo).contains(mensagem);
})
