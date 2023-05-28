class ChatsPage {

    constructor() {
        this._authUsername = username => cy.get(`span:contains('${username}')`);
        this._uri = '/chats';
    }

    authorizedUsername(username) {
        return this._authUsername(username);
    }

    get url() {
        return Cypress.config('baseUrl') + this._uri;
    }
}

export default ChatsPage;