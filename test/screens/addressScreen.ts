import { AddressDetails } from "../customTypes/addressDetails";
import { Logger } from "../customLogger/logger";
import { BaseScreen } from "./base/baseScreen";

const LOGGER = new Logger();
export class AddressScreen extends BaseScreen{
    private selectors = {
        nameTextField : '~Full Name* input field',
        address1TextField: '~Address Line 1* input field',
        cityTextField: '~City* input field',
        stateTextField: '~State/Region input field',
        zipCodeTextField: '~Zip Code* input field',
        countryTextField: '~Country* input field',
        toPaymentButton: '//android.widget.TextView[@text="To Payment"]',
    }
    
    async navigateToPayment() {
        await this.click(this.selectors.toPaymentButton);
    }

    async enterAddressDetails(addressDetails: AddressDetails){
        LOGGER.info('Entering Address');
        await this.fillMandatoryAddressDetails(addressDetails);
        await this.navigateToPayment();
    }

    async fillMandatoryAddressDetails(addressDetails: AddressDetails) {

        await this.setValue(this.selectors.nameTextField, addressDetails.fullName);
        await this.setValue(this.selectors.address1TextField, addressDetails.address1);
        await this.swipeUpTillElementFound(this.selectors.cityTextField);
        await this.setValue(this.selectors.cityTextField, addressDetails.cityName);
        await this.setValue(this.selectors.stateTextField, addressDetails.stateName);
        await this.swipeUpTillElementFound(this.selectors.zipCodeTextField);
        await this.setValue(this.selectors.zipCodeTextField, addressDetails.zipCode);
        await this.setValue(this.selectors.countryTextField, addressDetails.countryName);

    }

}