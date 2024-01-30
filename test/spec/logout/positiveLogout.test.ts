import { Logger } from "../../customLogger/logger";
import { LogoutUserFlow } from "../../userflows/logoutUserFlow";

const logoutUserFlow = new LogoutUserFlow();
const specName = 'Logout flow'
const LOGGER = new Logger();

describe(specName, function(){

    before(async function() {
        LOGGER.info(`Spec Name: ${specName}`);
    })

    beforeEach(async function () {
        LOGGER.info(`Test Name: ${this.currentTest?.title}`);
    })

    it('Logout positive flow', async function(){
        await logoutUserFlow.performLogout();
    })
})