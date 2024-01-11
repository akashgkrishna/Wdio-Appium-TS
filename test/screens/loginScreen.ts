import { Logger } from '../reporting/logger';
import { BaseScreen } from './base/baseScreen';
import {LeftPanel } from './common/LeftPanel';
import { XpathUtil } from './common/xpathUtil';

const LOGGER = new Logger();
export class LoginScreen extends BaseScreen{
    private selectors = {
        loginCred: '//android.widget.TextView[@text="bob@example.com"]',
        loginButton: '~Login button',
        goShoppingButton: '//android.widget.TextView[@text="Go Shopping"]',
        userNameTextField: '~Username input field',
        passwordTextField: '~Password input field',
        errorMessageText: '//android.widget.TextView[@text="##PLACEHOLDER##"]'
    };

    private leftPanel: LeftPanel = new LeftPanel;


    async getErrorMessageText(selector: string, value: string): Promise<string>{
        return XpathUtil.getPlaceholderReplaced(selector,value );
    }
    async enterLoginCredentials() {
        await this.click(this.selectors.loginCred);
    }

    async clickOnLoginButton() {
        await this.click(this.selectors.loginButton);
    }

    async performLogin() {
        LOGGER.info('Logging in to the application')
        await this.leftPanel.clickMenuButton();
        await this.leftPanel.clickLoginMenuButton();
        await this.enterLoginCredentials();
        await this.clickOnLoginButton();
    }

    async clickGoShoppingButton() {
        await this.click(this.selectors.goShoppingButton);
    }

    async isGoShoppingButtonDisplayed() {
        return await this.isDisplayed(this.selectors.goShoppingButton);
    }

    async enterUserName(userName: string) {
        await this.setValue(this.selectors.userNameTextField, userName);
    }

    async enterPassword(password: string) {
        await this.setValue(this.selectors.passwordTextField, password);
    }

    async enterInvalidCredentials(userName: string, password: string){
        await this.leftPanel.clickMenuButton();
        await this.leftPanel.clickLoginMenuButton();
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickOnLoginButton();
    }

    async isErrorMessageDisplayed(value: string): Promise<boolean>{
        const element = this.getErrorMessageText(this.selectors.errorMessageText, value);
        return await this.isDisplayed(await element);

    }
}