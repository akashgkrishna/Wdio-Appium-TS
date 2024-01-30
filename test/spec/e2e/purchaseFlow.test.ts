import { AddressDetails } from "../../resources/customTypes/addressDetails";
import { CardDetails } from "../../resources/customTypes/cardDetails";
import { AddressScreen } from "../../screens/addressScreen";
import { CartScreen } from "../../screens/cartScreen";
import { CatalogScreen } from "../../screens/catalogScreen";
import { CheckoutScreen } from "../../screens/checkoutScreen";
import { OrderReviewScreen } from "../../screens/orderReviewScreen";
import { ProductScreen } from "../../screens/productScreen";
import { LoginCredentials } from '../../resources/customTypes/loginCredentials';
import jsonLoginCredentials from '../../resources/testData/loginCredentials.json';

import jsonAddressDetails from '../../resources/testData/addressDetails.json'
import jsonCardDetails from '../../resources/testData/cardDetails.json'
import { Logger } from "../../customLogger/logger";
import { LogoutUserFlow } from "../../userflows/logoutUserFlow";
import { LoginUserFlow } from "../../userflows/loginUserFlow";

const catalogScreen =  new CatalogScreen();
const productScreen = new ProductScreen();
const cartScreen = new CartScreen();
const addressScreen =  new AddressScreen();
const checkoutScreen = new CheckoutScreen();
const orderReviewScreen = new OrderReviewScreen();
const loginUserFlow = new LoginUserFlow();
const logoutUserFlow = new LogoutUserFlow();
const LOGGER = new Logger();
const specName = 'E2E Purchase Flow for the App'

describe(specName, function(){

    before(async function () {
        LOGGER.info(`Spec Name: ${specName}`);
    });

    beforeEach(async function () {
        LOGGER.info(`Test Name: ${this.currentTest?.title}`);
        const validLogin : LoginCredentials = jsonLoginCredentials.credentialsSets["validCredentials"];
        await loginUserFlow.navigateAndLogin(validLogin);
    })

    afterEach(async function(){
        await logoutUserFlow.performLogout();
    })
    
    it.skip('E2E Purchase Flow', async function (){

        const addressDetails: AddressDetails = jsonAddressDetails;
        const cardDetails: CardDetails = jsonCardDetails;

        await catalogScreen.selectProduct();
        await productScreen.addProductToCart();
        await catalogScreen.clickOnCart();
        await cartScreen.clickOnProceedToCheckoutButton();
        await addressScreen.enterAddressDetails(addressDetails);
        await checkoutScreen.enterCardDetails(cardDetails);
        await orderReviewScreen.clickOnPlaceOrderButton();

    })
})