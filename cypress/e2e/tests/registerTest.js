import { registerPage } from "../../pages/registerPage";

import registerData from "../../fixtures/registerData.json";

const registerObj = new registerPage();
describe("test automation", () => {
  it("register flow", () => {
    registerObj.openUrl();
    registerObj.enterFirstName(registerData.firstName);
    registerObj.enterLastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    regiclssterObj.enterPassword(registerData.password);
    registerObj.selectCheckBox();
    registerObj.clickOnContinue();
  });
});
