import { BaseScreen } from "./base/baseScreen"

export class CartScreen extends BaseScreen{
    private selectors = {
        proceedToCheckoutButton: '//android.widget.TextView[@text="Proceed To Checkout"]',
    }

    async clickOnProceedToCheckoutButton(){
        await this.click(this.selectors.proceedToCheckoutButton);
    }
}