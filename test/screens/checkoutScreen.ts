import { CardDetails } from "../customTypes/cardDetails";
import { TouchActions } from "../gestures/touchActions";
import { Logger } from "../customLogger/logger";
import { BaseScreen } from "./base/baseScreen";
const LOGGER = new Logger();
export class CheckoutScreen extends BaseScreen{
    private selectors = {
        fullNameTextField: '~Full Name* input field',
        cardNumberTextField: '~Card Number* input field',
        expirationDateField: '~Expiration Date* input field',
        securityCode: '~Security Code* input field',
        reviewOrderButton: '//android.widget.TextView[@text="Review Order"]',
    }

    async enterCardDetails(cardDetails: CardDetails){
        LOGGER.info('Entering Card details')
        await this.setValue(this.selectors.fullNameTextField, cardDetails.fullName);
        await this.setValue(this.selectors.cardNumberTextField, cardDetails.cardNumber);

        await TouchActions.swipeUpFromMiddle();

        await this.setValue(this.selectors.expirationDateField, cardDetails.expirationDate);
        await this.setValue(this.selectors.securityCode, cardDetails.securityCode);

        await this.doubleClick(this.selectors.reviewOrderButton);
        
    }
}