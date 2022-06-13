// testnew.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe('My First Test', function() 
{
    it('Does not do much!', function()
     {
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

     cy.get('.search-keyword').type('ca')
     cy.wait(2000)
     //parent child chaining
     cy.get('.products').as('productLocator')
     cy.get('.product:visible').should('have.length',4)
     cy.get('@productLocator').find('.product').should('have.length',4)
     cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

     console.log('test the text')

     cy.get('@productLocator').find('.product').each(($el,index,$list) => {
       const vartext = $el.find('h4.product-name').text()
       if(vartext.includes('Cashews'))
       {
        // $el.find('button').click()
        cy.wrap($el).find('button').click

       }
     })
     cy.get('.brand').should('have.text','GREENKART')
     cy.get('.brand').then(function(logelement)
     {
      cy.log(logelement.text())
     })


    })
  })
