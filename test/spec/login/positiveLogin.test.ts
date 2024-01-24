import { LoginScreen }from '../../screens/loginScreen';
import { LeftPanel }from '../../screens/common/LeftPanel';
import { LogoutScreen } from '../../screens/logoutScreen';
import { Logger } from '../../customLogger/logger';

let loginScreen: LoginScreen;
let leftPanel: LeftPanel;
let logoutScreen: LogoutScreen;
const LOGGER = new Logger();
let specName = 'Login Flow';

describe(specName, function () {
    before(async function () {
        loginScreen = new LoginScreen();
        leftPanel = new LeftPanel();
        logoutScreen = new LogoutScreen();
        LOGGER.info(`Spec Name: ${specName}`);
    });

    this.beforeEach(async function () {
        LOGGER.info(`Test Name: ${this.currentTest?.title}`);
    })

    this.afterEach(async function(){
        await logoutScreen.logout();
    })

    it('Login with valid credentials', async function () {

        await loginScreen.performLogin();
        await leftPanel.clickMenuButton();
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(true);

    });

    it('Login with valid credentials making it fail', async function () {

        await leftPanel.clickMenuButton();
        await loginScreen.performLogin();
        await leftPanel.clickMenuButton();
        await leftPanel.clickLoginMenuButton();

        const isButtonDisplayed = await loginScreen.isGoShoppingButtonDisplayed();
        expect(isButtonDisplayed).toBe(false);
    });

});

