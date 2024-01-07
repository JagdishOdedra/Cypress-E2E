export class registerPage {
  webLocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    passwordConfirmed: "#input-confirm",
    policyCheckbox: 'input[type="checkbox"]',
    continue: 'input[type="submit"]',
  };

  openUrl() {
    cy.visit(Cypress.env("URL"));
  }

  enterFirstName(fName) {
    cy.get(this.webLocators.firstName).type(fName);
  }

  enterLastName(lName) {
    cy.get(this.webLocators.lastName).type(lName);
  }

  enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }

  enterTelephone(phone) {
    cy.get(this.webLocators.telephone).type(phone);
  }

  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
    cy.get(this.webLocators.passwordConfirmed).type(password);
  }

  selectCheckBox() {
    cy.get(this.webLocators.policyCheckbox).check();
  }

  clickOnContinue() {
    cy.get(this.webLocators.continue).click();
  }
}
