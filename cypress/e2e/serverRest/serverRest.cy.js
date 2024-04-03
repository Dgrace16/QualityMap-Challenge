describe('Testando a API', () => {

    let userId;

    it('Metodo POST usuarios', () => {
        cy.request('POST', 'https://serverest.dev/usuarios', {
            "nome": "Douglas Centeno",
            "email": "Douglas.centeno@mazzafc.tech",
            "password": "teste123",
            "administrador": "true"
        }).then((response) => {
            expect(response.status).to.eq(201)

            cy.log(JSON.stringify(response.body, null, 2))
            userId = response.body._id;
            cy.log(`ID do usuário criado: ${userId}`)

        })
    })

    it('Metodo Get todos usuarios', () => {
        cy.request('GET', 'https://serverest.dev/usuarios')
            .then((response) => {
                // Verifica se a resposta está OK (status code 200)
                expect(response.status).to.eq(200)

                // Exibe o corpo da resposta em um elemento na interface do Cypress
                cy.log('text', JSON.stringify(response.body, null, 2))
            })
    })

    it('Metodo Get unico usuario', () => {

        cy.request('GET', `https://serverest.dev/usuarios/${userId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                userId
                cy.log(JSON.stringify(response.body, null, 2));
            });
    });

    it('Metodo PUT usuario', () => {

        cy.request('PUT', `https://serverest.dev/usuarios/${userId}`, {
            "nome": "Douglas Grace",
            "email": "Douglas.Grace@mazzafc.tech",
            "password": "teste123",
            "administrador": "true"
        })
            .then((response) => {
                expect(response.status).to.eq(200);


                cy.log(JSON.stringify(response.body, null, 2));
            });
    });

    it('Metodo DELETE usuario', () => {

        cy.request('DELETE', `https://serverest.dev/usuarios/${userId}`)
            .then((response) => {
                expect(response.status).to.eq(200);

                cy.log(JSON.stringify(response.body, null, 2));
            });
    });
})

