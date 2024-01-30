import { Logger } from "../customLogger/logger";
import { BaseScreen } from "../screens/base/baseScreen";
import { LeftPanel } from "../screens/common/LeftPanel";
import { Header } from "../screens/common/header";

const header = new Header();
const leftPanel = new LeftPanel();
const LOGGER =  new Logger();

export class LogoutUserFlow extends BaseScreen{

    async performLogout(){
        LOGGER.info('Loging out from app');
        await header.clickOnHamburgerMenu();
        await leftPanel.clickLogoutMenuButton();
        await leftPanel.clickOnPopupLogoutButton();
        await leftPanel.clickOnPopupLogoutButton();
        LOGGER.info('Logged out from app successfully');
    }
    
}