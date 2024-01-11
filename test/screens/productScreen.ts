import { Logger } from "../reporting/logger";
import { BaseScreen } from "./base/baseScreen"
const LOGGER =  new Logger();
export class ProductScreen extends BaseScreen{
    private selectors = {
        addToCartButton : '//android.widget.TextView[@text="Add To Cart"]',
    }

    async addProductToCart(){
        LOGGER.info('Adding to cart');
        await this.click(this.selectors.addToCartButton);
    }
}