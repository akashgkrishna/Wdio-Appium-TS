import { BaseScreen } from "./base/baseScreen";
import { XpathUtil } from "./common/xpathUtil";

export class CatalogScreen extends BaseScreen{
    private selectors = {
        productItem : '//android.widget.TextView[@content-desc="store item text" and @text="##PLACEHOLDER##"]',
        cart : '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView',
        
    }

    async getProductItem(selector: string, value: string): Promise<string>{
        return XpathUtil.getPlaceholderReplaced(selector, value);
    }

    async selectProduct(){
        await this.click(this.selectors.productItem);
    }

    async clickOnCart(){
        await this.click(this.selectors.cart);
    }

    async clickOnProduct(value: string): Promise<void>{
        const element = await this.getProductItem(this.selectors.productItem, value);
        if (element) {
            await this.click(element);
        } else {
            throw new Error(`Product element not found for value: ${value}`);
        }
    }

}