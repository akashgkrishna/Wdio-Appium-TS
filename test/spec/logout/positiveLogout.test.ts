import { Logger } from "../../customLogger/logger";
import { LoginScreen } from "../../screens/loginScreen";
import { LogoutScreen } from "../../screens/logoutScreen";
let logoutScreen: LogoutScreen;
let loginScreen: LoginScreen;
let specName = 'Logout flow'
const LOGGER = new Logger();

describe(specName, function(){
    before(async function() {
        logoutScreen = new LogoutScreen();
        loginScreen = new LoginScreen();
        await loginScreen.performLogin();
        LOGGER.info(`Spec Name: ${specName}`);
    })

    this.beforeEach(async function () {
        LOGGER.info(`Test Name: ${this.currentTest?.title}`);
    })


    it('Logout positive flow', async function(){

        await logoutScreen.logout();
    })
})