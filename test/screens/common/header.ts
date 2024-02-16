import { BaseScreen } from "../base/baseScreen";

export class Header extends BaseScreen{
    private selectors = {
        cartButton: `//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView`,
        hamburgerMenu: `//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView`
    }

    async clickOnCartButton() {
        await this.click(this.selectors.cartButton);
    }

    async clickOnHamburgerMenu() {
        await this.click(this.selectors.hamburgerMenu);
    }
}