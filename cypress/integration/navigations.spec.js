/// <reference types="cypress" />

context('Navigations tests', () => {

    beforeEach(() => {
        cy.visit('https://www.its.uz.ua');
        cy.viewport(1980, 1024);
    })


    it('As user i can navigate to about us page', () => {
        cy
            .get('.navbar-custom a[href="/about/"]')
            .should('have.text', 'Про Нас')
            .click();
        cy.title().should('eq', "Про нас | its.uz.ua");
        cy
            .get('.container>h2')
            .should('have.text', 'УЖГОРОДСЬКА ШКОЛА ТЕСТУВАННЯ ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ')
    })

    it('As user I can find link by text and navigate to page', () => {
        cy.contains('Про Нас').click()
        cy.title().should('eq', "Про нас | its.uz.ua");
    })

    it('As user when I go to contact and fill form I can click send and my message will sended', () => {
        cy
            .contains('Контакти')
            .click()

        cy.get('.contact h2').should('have.text', "Залиште нам повідомлення!");
        cy.get("#name").type('Andriy').should('have.value', 'Andriy')
        cy.get("#telephone").type('923578769823').should('have.value', '923578769823')
        cy.get("#email").type('test@example.com').should('have.value', 'test@example.com')
        cy.get('#message').type('text').should('have.value', "text");
        cy.get('#button').click();
    })


    it('As user i can navigate to courses page', () => {
        cy.contains('Курси').click()
        cy.title().should('eq', "Курси | its.uz.ua");
        cy.get('.container>h2').should('have.text', "ОБЕРТЬ КУРС ЯКИЙ ВИ ХОЧЕТЕ ПРОЙТИ");
        cy.get('.srvice-text a[href="/services/base_qa/"]').should('have.text', 'РУЧНЕ ТЕСТУВАННЯ');
        cy.get('.srvice-text a[href="/services/automation_testing/"]').should('have.text', 'АВТОМАТИЗОВАНЕ ТЕСТУВАННЯ');
        cy.get('.srvice-text a[href="/services/music_it/"]').should('have.text', 'МУЗИЧНА ГРАМОТА ДЛЯ ІТ');
        cy.get('.srvice-text a[href="/services/pjm/"]').should('have.text', 'Практичний IT проект менеджмент');
    })
})
