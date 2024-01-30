import { Logger } from "../customLogger/logger";
import { LoginCredentials } from "../resources/customTypes/loginCredentials";
import { BaseScreen } from "../screens/base/baseScreen";
import { LeftPanel } from "../screens/common/leftPanel";
import { Header } from "../screens/common/header";
import { LoginScreen } from "../screens/loginScreen";

const header = new Header();
const leftPanel = new LeftPanel();
const loginScreen = new LoginScreen();
const LOGGER = new Logger();

export class LoginUserFlow extends BaseScreen{
    async navigateToLoginScreen() {
        LOGGER.info('Logging in to the app');
        await header.clickOnHamburgerMenu();
        await leftPanel.clickLoginMenuButton();
    }

    async performLogin(loginCredentials: LoginCredentials) {
        await loginScreen.enterUserName(loginCredentials.username);
        await loginScreen.enterPassword(loginCredentials.password);
        await loginScreen.clickOnLoginButton();
    }

    async navigateAndLogin(loginCredentials: LoginCredentials) {
        await this.navigateToLoginScreen();
        await this.performLogin(loginCredentials);
        LOGGER.info('Logged in Successfully');
    }


}