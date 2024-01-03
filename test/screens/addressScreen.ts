import { AddressDetails } from "../customTypes/addressDetails";
import { BaseScreen } from "./base/baseScreen";

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

    async enterAddressDetails(addressDetails: AddressDetails){
        await this.setValue(this.selectors.nameTextField, addressDetails.fullName);
        await this.setValue(this.selectors.address1TextField, addressDetails.address1);

        const windowSize = await driver.getWindowRect();
        const startSwipeX = windowSize.width / 2;
        const startSwipeY = windowSize.height * 0.4;
        const endSwipeY = windowSize.height * 0.2;

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', x: startSwipeX, y: startSwipeY, duration: 500 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 500 }, // 1000 milliseconds pause, adjust as needed
                    { type: 'pointerMove', x: startSwipeX, y: endSwipeY, duration: 500 },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);

        await this.setValue(this.selectors.cityTextField, addressDetails.cityName);
        await this.setValue(this.selectors.stateTextField, addressDetails.stateName);
        await this.setValue(this.selectors.zipCodeTextField, addressDetails.zipCode);
        await this.setValue(this.selectors.countryTextField, addressDetails.countryName);

        await this.click(this.selectors.toPaymentButton);



    }

}