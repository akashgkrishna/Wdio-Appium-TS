import { Logger } from '../../customLogger/logger';
import { LoginUserFlow } from '../../userflows/loginUserFlow';
import { LoginCredentials } from '../../resources/customTypes/loginCredentials';
import jsonLoginCredentials from '../../resources/testData/loginCredentials.json';
import { LoginScreen } from '../../screens/loginScreen';
import { expect } from 'chai';
import errorMessage  from '../../resources/testData/errorMessages.json';
import { LogoutUserFlow } from '../../userflows/logoutUserFlow';

const loginScreen = new LoginScreen();
const loginUserFlow = new LoginUserFlow();
const logoutUserFlow = new LogoutUserFlow();
const LOGGER = new Logger();
const specName = 'Login Flow';

describe(specName, function () {
    before(async function () {
        LOGGER.info(`Spec Name: ${specName}`);
    });

    beforeEach(async function () {
        LOGGER.info(`Test Name: ${this.currentTest?.title}`);
    })

    afterEach(async function(){
        await logoutUserFlow.performLogout();
    })

    it('Login with valid credentials', async function () {

        const validLogin : LoginCredentials = jsonLoginCredentials.credentialsSets["validCredentials"];
        const noItemsMessage = errorMessage.noItems;
        
        await loginUserFlow.navigateToLoginScreen();
        await loginUserFlow.performLogin(validLogin);

        const isErrorMessageDisplayed = await loginScreen.isErrorMessageDisplayed(noItemsMessage);
        expect(isErrorMessageDisplayed).to.be.true;
        const isGoShoppingButtonDisplayed = loginScreen.isGoShoppingButtonDisplayed;
        expect(isGoShoppingButtonDisplayed).to.be.true;

    });

});

