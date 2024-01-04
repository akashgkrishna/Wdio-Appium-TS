import { LogoutScreen } from "../../screens/logoutScreen";
let logoutScreen: LogoutScreen;

describe('Logout test', function(){
    before(async function() {
        logoutScreen = new LogoutScreen();
    })

    this.afterEach(async function(){
        logoutScreen.logout();
    })

    it('Logout positive flow', async function(){

        await logoutScreen.logout();

    })
})