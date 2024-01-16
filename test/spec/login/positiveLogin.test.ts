import { LoginScreen }from '../../screens/loginScreen';
import { LeftPanel }from '../../screens/common/LeftPanel';
import { LogoutScreen } from '../../screens/logoutScreen';
import { Logger } from '../../customLogger/logger';

let loginScreen: LoginScreen;
let leftPanel: LeftPanel;
let logoutScreen: LogoutScreen;
const LOGGER = new Logger();

describe('Login to app', function () {
    this.beforeEach(async function () {
        loginScreen = new LoginScreen();
        leftPanel = new LeftPanel();
        logoutScreen = new LogoutScreen();
    });

    this.afterEach(async function(){
        await logoutScreen.logout();
    })

    it('Login with valid credentials', async function () {
        LOGGER.info('Logging with valid credentials');

        await loginScreen.performLogin();

        await driver.pause(3000);

        await leftPanel.clickMenuButton();
        
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(true);

    });

    it('Login with valid credentials making it fail', async function () {
        LOGGER.info('Logging with valid credentials making it fail');

        await leftPanel.clickMenuButton();

        await loginScreen.performLogin();

        await driver.pause(3000);

        await leftPanel.clickMenuButton();
        
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(false);
    });

});

