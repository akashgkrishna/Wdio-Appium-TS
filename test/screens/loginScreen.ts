import {LeftPanel } from './common/LeftPanel';

export class LoginScreen {
    private selectors = {
        loginCred: '//android.widget.TextView[@text="bob@example.com"]',
        loginButton: '~Login button',
        goShoppingButton: '//android.widget.TextView[@text="Go Shopping"]'
    };

    private leftPanel: LeftPanel;

    constructor() {
        this.leftPanel = new LeftPanel();
    }

    async enterLoginCredentials() {
        const loginCred = $(this.selectors.loginCred);
        await loginCred.click();
    }

    async clickSubmitLogin() {
        const loginButton = $(this.selectors.loginButton);
        await loginButton.click();
    }

    async performLogin() {
        await this.leftPanel.clickMenuButton();
        await this.leftPanel.clickLoginMenuButton();
        await this.enterLoginCredentials();
        await this.clickSubmitLogin();
    }

    async clickGoShoppingButton() {
        const goShoppingButton = $(this.selectors.goShoppingButton);
        await goShoppingButton.click();
    }

    async isGoShoppingButtonDisplayed() {
        const goShoppingButton = $(this.selectors.goShoppingButton);
        return await goShoppingButton.isDisplayed();
    }
}