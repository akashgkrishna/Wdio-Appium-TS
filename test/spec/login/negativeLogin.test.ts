import { Logger } from '../../customLogger/logger';
import { LoginScreen }from '../../screens/loginScreen';
import { LogoutScreen } from '../../screens/logoutScreen';

let loginScreen: LoginScreen;
let logoutScreen: LogoutScreen;
const LOGGER = new Logger()

describe('Login to app negative', function () {
    before(async function () {
        loginScreen = new LoginScreen();
        logoutScreen = new LogoutScreen();
    });

    this.afterEach(async function(){
        await logoutScreen.logout();
    })

    it('Login with invalid credentials', async function () {
        LOGGER.info('Logging with invalid credentials');
        let userName = "Invalid Credentials";
        let password = "Invalid Credentials;"
        let errorMsg = "Provided credentials do not match any user in this service.";
        
        await loginScreen.enterInvalidCredentials(userName, password);

        const isErrorMessageDisplayed = await loginScreen.isErrorMessageDisplayed(errorMsg)
        if (!isErrorMessageDisplayed) {
            throw new Error('Error message not displayed for invalid login.');
        }
    });
});

