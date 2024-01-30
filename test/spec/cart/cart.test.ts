import { Logger } from "../../customLogger/logger";
import { LoginUserFlow } from "../../userflows/loginUserFlow";
import { LoginCredentials } from '../../resources/customTypes/loginCredentials';
import jsonLoginCredentials from '../../resources/testData/loginCredentials.json';
import jsonProductDetails from '../../resources/testData/productDetails.json';
import { ProductDetails } from "../../resources/customTypes/productDetails";
import { CartScreen } from "../../screens/cartScreen";
import { LogoutUserFlow } from "../../userflows/logoutUserFlow";
import { expect } from 'chai';
import { CartFlow } from "../../userflows/cartFlow";

const LOGGER = new Logger();
let specName = 'Cart flow';
const loginUserFlow = new LoginUserFlow();
const logoutUserFlow = new LogoutUserFlow();
const cartFlow = new CartFlow()
const cartScreen = new CartScreen();

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

        await cartFlow.addProductsAndNavigateToCart(products);
        const cartProductDetails = await cartScreen.getAllProductDetails();

        const numberOfProductsInCart = await cartScreen.getNumberOfProductsInCart();
        expect(numberOfProductsInCart, 'Number of products in the cart does not match').to.equal(products.length);

        const isAllProductsInCart = await cartScreen.verifyCartProductDetails(products, cartProductDetails);
        expect(isAllProductsInCart, 'Product details in the cart are not as expected').to.be.true;
     });

     it('Should Be Able to Empty Cart by Removing Products Individually', async function() {
        const products: ProductDetails[] = jsonProductDetails;

        await cartFlow.addProductsAndNavigateToCart(products);
        await cartScreen.removeProductsFromCartIndividually();

        const isCartEmpty = await cartScreen.isCartEmpty();
        expect(isCartEmpty, 'Cart is not empty after removing all products').to.be.true;
     });

     it('Should be able to empty cart by reducing product quantity to zero', async function() {
        const products: ProductDetails[] = jsonProductDetails;

        await cartFlow.addProductsAndNavigateToCart(products);
        await cartScreen.removeProductsFromCartByReducingQuantity();

        const isCartEmpty = await cartScreen.isCartEmpty();
        expect(isCartEmpty, 'Cart is not empty after removing all products').to.be.true;
     })
});
