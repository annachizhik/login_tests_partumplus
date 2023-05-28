class LoginPage {

    constructor() {
        this._emailInput = () => cy.get('[name="email"]');
        this._passInput = () => cy.get('[name="password"]');
        this._loginButton = () => cy.get('button:contains("Log in")');
        this._wrongEmailOrPassError = () => cy.get("div:contains('Wrong Email or password')");
        this._uri = '/login';
    }

    get emailInput() {
        return this._emailInput()
    }

    get passwordInput() {
        return this._passInput()
    }

    get loginButton() {
        return this._loginButton()
    }

    get wrongEmailOrPassError() {
        return this._wrongEmailOrPassError()
    }

    get url() {
        return Cypress.config('baseUrl') + this._uri
    }

    get uri() {
        return this._uri
    }

    visit() {
        cy.visit(this._uri)
    }
}

export default LoginPage;