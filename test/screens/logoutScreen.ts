import { BaseScreen } from "./base/baseScreen"
import { LeftPanel } from "./common/LeftPanel";

export class LogoutScreen extends BaseScreen{
    private selectors = {
        popupLogoutButton: '//android.widget.Button[@resource-id="android:id/button1"]'
    }

    private leftPanel: LeftPanel = new LeftPanel;

    async clickOnLogout(){
        await this.click(this.selectors.popupLogoutButton);
    }

    async logout(){
        await this.leftPanel.clickMenuButton();
        await this.leftPanel.clickLogoutMenuButton();

        await this.clickOnLogout();
        await this.clickOnLogout();
    }
}