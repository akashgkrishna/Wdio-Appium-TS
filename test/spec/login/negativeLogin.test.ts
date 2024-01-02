import { LoginScreen }from '../../screens/loginScreen';

let loginScreen: LoginScreen;

describe('Login to app', function () {
    before(async function () {
        loginScreen = new LoginScreen();
    });

    it('Login with invalid credentials', async function () {
        let errorMsg = "Provided credentials do not match any user in this service.";
        await loginScreen.enterInvalidCredentials('abc', 'abc');

        await driver.pause(3000);

        const isErrorMessageDisplayed = await loginScreen.isErrorMessageDisplayed(errorMsg)
        expect(isErrorMessageDisplayed).toBe(true);
    });
});

