import { BaseScreen } from "../base/baseScreen";
export class LeftPanel extends BaseScreen{
    private selectors = {
        loginMenuButton: '~menu item log in',
        logoutMenuButton: '~menu item log out',
        catalogMenuButton: '//android.widget.TextView[@text="Catalog"]',
        popupLogoutButton: '//android.widget.Button[@resource-id="android:id/button1"]'

    };

    async clickLoginMenuButton() {
        await this.click(this.selectors.loginMenuButton);
    }

    async clickLogoutMenuButton() {
        await this.click(this.selectors.logoutMenuButton);
    }

    async clickOnCatalogueButton(){
        await this.click(this.selectors.catalogMenuButton);
    }

    async clickOnPopupLogoutButton(){
        await this.click(this.selectors.popupLogoutButton);
    }
}