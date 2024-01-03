import { BaseScreen } from "./base/baseScreen"

export class ProductScreen extends BaseScreen{
    private selectors = {
        addToCartButton : '//android.widget.TextView[@text="Add To Cart"]',
    }

    async addProductToCart(){
        await this.click(this.selectors.addToCartButton);
    }
}