import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email': 'mat-card-content input[name="email"]',
    'password': 'mat-card-content input[name="password"]',
    'checkbox': '',
    'selectGroup': 'mat-card-content mat-select[name="group"]',
    'loginButton': 'mat-card-actions .mat-primary]',
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(text) {
      element(by.css(this.selectors['email'])).sendKeys(text);
   }

  setPassword(text) {
    element(by.css(this.selectors['password'])).sendKeys(text);
  }

  selectGroupOptionLastValue() {
      return element(by.css(this.selectors['selectGroup'])).click()
      .then(() => element.all(by.css('mat-option')).last().click());
  }

  logIn(){
      element(by.css(this.selectors['form'])).submit();
  }
}
