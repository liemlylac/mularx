import {browser, by, element} from "protractor";

export class AppPageObject {
  navigateTo() {
    return browser.get('/');
  }

  getCurrentYear() {
    return element(by.css('.signature .year')).getText();
  }

  getAllMenus() {
    return element.all(by.css('mat-toolbar button.nav-menu-button'))
      .map((elm) => elm?.getText());
  }
}
