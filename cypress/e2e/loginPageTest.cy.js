import { positive_test_cases, negative_test_cases } from "../fixtures/loginPageFixtures.json"
import LoginPage from '../pageObjects/loginPage'
import ChatsPage from '../pageObjects/chatsPage'


describe('Login tests', () => {
    const loginPage = new LoginPage()
    const chatsPage = new ChatsPage()

    positive_test_cases.forEach(({ test_name, email, pass, username }) => {
        it(test_name, () => {
            // Given
            loginPage.visit()

            // When
            loginPage.emailInput.type(email)
            loginPage.passwordInput.type(pass)
            loginPage.loginButton.click()

            // Then
            cy.url().should('eq', chatsPage.url)
            chatsPage.authorizedUsername(username).should('be.visible')
        })
    })

    negative_test_cases.forEach(({ test_name, email, pass }) => {
        it(test_name, () => {
            // Given
            loginPage.visit()

            // When
            loginPage.emailInput.type(email)
            loginPage.passwordInput.type(pass)
            loginPage.loginButton.click()

            // Then
            cy.url().should('eq', loginPage.url)
            loginPage.wrongEmailOrPassError.should('be.visible')
        })

    })
});
