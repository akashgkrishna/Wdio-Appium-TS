import { Logger } from "../../customLogger/logger";
import { LoginUserFlow } from "../../userflows/loginUserFlow";
import { LoginCredentials } from '../../resources/customTypes/loginCredentials';
import jsonLoginCredentials from '../../resources/testData/loginCredentials.json';
import jsonProductDetails from '../../resources/testData/productDetails.json';
import { ProductDetails } from "../../resources/customTypes/productDetails";
import { Header } from "../../screens/common/header";
import { CartScreen } from "../../screens/cartScreen";
import { LogoutUserFlow } from "../../userflows/logoutUserFlow";
import { expect } from 'chai';
import { ProductFlow } from "../../userflows/productFlow";

const LOGGER = new Logger();
let specName = 'Cart flow';
const loginUserFlow = new LoginUserFlow();
const logoutUserFlow = new LogoutUserFlow();
const productFlow = new ProductFlow();
const cartScreen = new CartScreen();
const header = new Header();

describe(specName, function () {

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

    it('Should add multiple products to the cart', async function () {
        const products: ProductDetails[] = jsonProductDetails;

        await productFlow.addProductsToCart(products);
        await header.clickOnCartButton();
        const cartProductDetails = await cartScreen.getAllProductDetails();

        const numberOfProductsInCart = await cartScreen.getNumberOfProductsInCart();
        expect(numberOfProductsInCart, 'Number of products in the cart does not match').to.equal(products.length);

        const isAllProductsInCart = await cartScreen.verifyCartProductDetails(products, cartProductDetails);
        expect(isAllProductsInCart, 'Product details in the cart are not as expected').to.be.true;
     });

});
