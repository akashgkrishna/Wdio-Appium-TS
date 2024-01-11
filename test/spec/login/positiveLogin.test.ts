import { LoginScreen }from '../../screens/loginScreen';
import { LeftPanel }from '../../screens/common/LeftPanel';
import { LogoutScreen } from '../../screens/logoutScreen';

let loginScreen: LoginScreen;
let leftPanel: LeftPanel;
let logoutScreen: LogoutScreen;

describe('Login to app', function () {
    this.beforeEach(async function () {
        loginScreen = new LoginScreen();
        leftPanel = new LeftPanel();
        logoutScreen = new LogoutScreen();
    });

    this.afterEach(async function(){
        logoutScreen.logout();
    })

    it('Login with valid credentials', async function () {
        await loginScreen.performLogin();

        await driver.pause(3000);

        await leftPanel.clickMenuButton();
        
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(true);

    });

    it('Login with valid credentials making it fail', async function () {
        await leftPanel.clickMenuButton();

        await loginScreen.performLogin();

        await driver.pause(3000);

        await leftPanel.clickMenuButton();
        
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(false);
    });

});

