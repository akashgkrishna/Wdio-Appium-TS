import { BaseScreen } from "../base/baseScreen";
export class LeftPanel extends BaseScreen{
    private selectors = {
        menuButton: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
        loginMenuButton: '~menu item log in',
        logoutMenuButton: '~menu item log out'

    };

    async clickMenuButton() {
        await this.click(this.selectors.menuButton);
    }

    async clickLoginMenuButton() {
        await this.click(this.selectors.loginMenuButton);
    }

    async clickLogoutMenuButton() {
        await this.click(this.selectors.logoutMenuButton);
    }
}