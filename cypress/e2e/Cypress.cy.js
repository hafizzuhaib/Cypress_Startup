/// <reference types = "cypress" />




var userInput = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
var passwordInput = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
var websiteLink = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

var userName = "Admin"
var password = "admin123"

// it('Login to Website', ()=>{
//     cy.visit('/')
//     cy.get(userInput).type(userName)
//     cy.get(passwordInput).type(password)
//     cy.get('.oxd-button').click()
//     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
//     cy.get('Invalid credentials').should('not.exist')
//     cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// })

// it('Login to Website', ()=>{
//     cy.visit('/')
//     cy.get(userInput).type("Admin")
//     cy.get(passwordInput).type("admin")
//     cy.get('.oxd-button').click()
//    // cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
//     cy.contains('Invalid credentials').should('exist')
//     cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// })


describe("Login Test Functionality",()=>{

    beforeEach(()=>{
        cy.visit('/')
    })
    it("Login Test",()=>{
        cy.fixture('example').then(function(data){
            this.data = data
            cy.get(userInput)
            .type(this.data.userName)
            cy.get(passwordInput)
            .type(this.data.password)
            cy.get('.oxd-button').click()
          //  cy.login(this.data.userName, this.data.password)
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
            cy.get('Invalid credentials').should('not.exist')
            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        })


    })

    it.skip("Login Failed",()=>{
    
        cy.get(userInput)
            .type("Admin")
            cy.get(passwordInput)
            .type("admin")
            cy.get('.oxd-button').click()
       // cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
        cy.contains('Invalid credentials').should('exist')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    })
    // afterEach(()=>{
    //     cy.logout()
    // })

})



