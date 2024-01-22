import { AddressDetails } from "../../customTypes/addressDetails";
import { CardDetails } from "../../customTypes/cardDetails";
import { AddressScreen } from "../../screens/addressScreen";
import { CartScreen } from "../../screens/cartScreen";
import { CatalogScreen } from "../../screens/catalogScreen";
import { CheckoutScreen } from "../../screens/checkoutScreen";
import { LoginScreen } from "../../screens/loginScreen"
import { LogoutScreen } from "../../screens/logoutScreen";
import { OrderReviewScreen } from "../../screens/orderReviewScreen";
import { ProductScreen } from "../../screens/productScreen";

import jsonAddressDetails from '../../../test/resources/testData/addressDetails.json'
import jsonCardDetails from '../../../test/resources/testData/cardDetails.json'
import { Logger } from "../../customLogger/logger";

let loginScreen = new LoginScreen;
let catalogScreen =  new CatalogScreen;
let productScreen = new ProductScreen;
let cartScreen = new CartScreen;
let addressScreen =  new AddressScreen;
let checkoutScreen = new CheckoutScreen;
let logoutScreen: LogoutScreen;
let orderReviewScreen = new OrderReviewScreen;
const LOGGER = new Logger();
let specName = 'E2E Purchase Flow for the App'

describe(specName, function(){

    before(async function () {
        loginScreen = new LoginScreen();
        logoutScreen = new LogoutScreen();
        LOGGER.info(`Spec Name: ${specName}`);
    });

    this.beforeEach(async function () {
        LOGGER.info(`Test Name: ${this.currentTest?.title}`);
    })

    this.afterEach(async function(){
        await logoutScreen.logout();
    })
    
    it('E2E Purchase Flow', async function (){

        // Arrange
        const addressDetails: AddressDetails = jsonAddressDetails;
        const cardDetails: CardDetails = jsonCardDetails;

        // Act
        await loginScreen.performLogin();
        await catalogScreen.selectProduct();
        await productScreen.addProductToCart();
        await catalogScreen.clickOnCart();
        await cartScreen.clickOnProceedToCheckoutButton();
        await addressScreen.enterAddressDetails(addressDetails);
        await checkoutScreen.enterCardDetails(cardDetails);
        await orderReviewScreen.clickOnPlaceOrderButton();

        // Assert

        
    })
})