import { BaseScreen } from "./base/baseScreen";

export class OrderReviewScreen extends BaseScreen{
    private selectors = {
        placeOrderButton: '//android.widget.TextView[@text="Place Order"]'
    }

    async clickOnPlaceOrderButton(){
        await this.click(this.selectors.placeOrderButton);
    }
}