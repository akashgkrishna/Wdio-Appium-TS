import { BaseScreen } from './base/baseScreen';
import { XpathUtil } from './common/xpathUtil';
export class LoginScreen extends BaseScreen{
    private selectors = {
        loginCred: '//android.widget.TextView[@text="bob@example.com"]',
        loginButton: '~Login button',
        userNameTextField: '~Username input field',
        passwordTextField: '~Password input field',
        errorMessageText: '//android.widget.TextView[@text="##PLACEHOLDER##"]',
        goShoppingButton: '~Go Shopping button'
    };

    async getErrorMessageText(selector: string, value: string): Promise<string>{
        return XpathUtil.getPlaceholderReplaced(selector,value );
    }

    async clickOnLoginButton() {
        await this.click(this.selectors.loginButton);
    }

    async enterUserName(userName: string) {
        await this.setValue(this.selectors.userNameTextField, userName);
    }

    async enterPassword(password: string) {
        await this.setValue(this.selectors.passwordTextField, password);
    }

    async isErrorMessageDisplayed(value: string): Promise<boolean>{
        const element = this.getErrorMessageText(this.selectors.errorMessageText, value);
        return await this.isDisplayed(await element);
    }

    async isGoShoppingButtonDisplayed(): Promise<boolean>{
        return await this.isDisplayed(this.selectors.goShoppingButton);
    }
}