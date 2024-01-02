export class LeftPanel {
    private selectors = {
        menuButton: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
        loginMenuButton: '~menu item log in'
    };

    async clickMenuButton() {
        const menuButton = $(this.selectors.menuButton);
        await menuButton.click();
    }

    async clickLoginMenuButton() {
        const loginMenuButton = $(this.selectors.loginMenuButton);
        await loginMenuButton.click();
    }
}