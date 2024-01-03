import { LoginScreen }from '../../screens/loginScreen';
import { LeftPanel }from '../../screens/common/LeftPanel';

let loginScreen: LoginScreen;
let leftPanel: LeftPanel;

describe('Login to app', function () {
    before(async function () {
        loginScreen = new LoginScreen();
        leftPanel = new LeftPanel();
    });

    it('Login with valid credentials', async function () {
        await loginScreen.performLogin();

        await driver.pause(3000);

        await leftPanel.clickMenuButton();
        
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(true);
    });

});

