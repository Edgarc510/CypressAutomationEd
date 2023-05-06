/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    before(() => {
        // runs once before all test cases in this describe block
    })
    beforeEach(() => {
        //run before each test case, compare it with before method in testNG
        cy.clearCookies();
    })
    after(() => {
        //similar to afterClass in testNG, runs once after all tests finished
    })
    afterEach(() => {
        // similar to afterMethod in testNG
    })

    it('Opening a web application', () => {
        cy.visit('/registration_form');
       
    })
})