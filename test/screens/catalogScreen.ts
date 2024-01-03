import { BaseScreen } from "./base/baseScreen";

export class CatalogScreen extends BaseScreen{
    private selectors = {
        productItem : 
            '(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView',
        cart : '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView',
    }

    async selectProduct(){
        await this.click(this.selectors.productItem);
    }

    async clickOnCart(){
        await this.click(this.selectors.cart);
    }
}