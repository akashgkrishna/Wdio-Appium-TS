import { LoginScreen } from "../../screens/loginScreen";
import { LogoutScreen } from "../../screens/logoutScreen";
let logoutScreen: LogoutScreen;
let loginScreen: LoginScreen;

describe('Logout test', function(){
    before(async function() {
        logoutScreen = new LogoutScreen();
        loginScreen = new LoginScreen();
        await loginScreen.performLogin();

    })

    it('Logout positive flow', async function(){

        await logoutScreen.logout();

    })
})