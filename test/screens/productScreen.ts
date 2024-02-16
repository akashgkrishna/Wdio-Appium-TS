import { BaseScreen } from "./base/baseScreen"

export class ProductScreen extends BaseScreen{
    private selectors = {
        addToCartButton : `//android.widget.TextView[@text="Add To Cart"]`,
        quantityPlusButton: `//android.view.ViewGroup[@content-desc="counter plus button"]`
    }

    async addProductToCart(){
        await this.click(this.selectors.addToCartButton);
    }

    async clickOnQuantityPlusButton(){
        await this.click(this.selectors.quantityPlusButton);
    }
}