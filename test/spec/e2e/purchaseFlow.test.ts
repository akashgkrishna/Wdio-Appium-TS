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

let loginScreen = new LoginScreen;
let catalogScreen =  new CatalogScreen;
let productScreen = new ProductScreen;
let cartScreen = new CartScreen;
let addressScreen =  new AddressScreen;
let checkoutScreen = new CheckoutScreen;
let logoutScreen: LogoutScreen;
let orderReviewScreen = new OrderReviewScreen;

describe('E2E Purchase Flow for the App', function(){

    this.beforeEach(async function () {
        loginScreen = new LoginScreen();
        logoutScreen = new LogoutScreen();
    });

    this.afterEach(async function(){
        logoutScreen.logout();
    })
    it('E2E Purchase Flow', async function (){
        const addressDetails: AddressDetails = {
            fullName : "John",
            address1 : "Indranagar",
            cityName : "Bangalore",
            stateName: "Karnataka",
            zipCode: 560036,
            countryName: "India"

        }

        const cardDetails: CardDetails = {
            fullName : "John Carter",
            cardNumber : "8474 8383 9384 947",
            expirationDate : "02/27",
            securityCode : 744
        }

        await loginScreen.performLogin();

        await catalogScreen.selectProduct();

        await productScreen.addProductToCart();

        await catalogScreen.clickOnCart();
        
        await cartScreen.clickOnProceedToCheckoutButton();

        await addressScreen.enterAddressDetails(addressDetails);

        await checkoutScreen.enterCardDetails(cardDetails);

        await orderReviewScreen.clickOnPlaceOrderButton();
        
        await driver.pause(3000);

    })
})