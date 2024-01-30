import { Logger } from "../customLogger/logger";
import { ProductDetails } from "../resources/customTypes/productDetails";
import { BaseScreen } from "./base/baseScreen"
const LOGGER = new Logger();
export class CartScreen extends BaseScreen{
    private selectors = {

        proceedToCheckoutButton: `//android.widget.TextView[@text="Proceed To Checkout"]`,
        productRows: `//android.view.ViewGroup[@content-desc="product row"]`,
        productName: `//android.view.ViewGroup[@content-desc="product row"]//android.widget.TextView[@content-desc="product label"]`,
        productPrice: `//android.view.ViewGroup[@content-desc="product row"]//android.widget.TextView[@content-desc="product price"]`,
        removeIndividualProductButton: `(//android.view.ViewGroup[@content-desc="remove item"])[1]`,
        noItems: `//android.widget.TextView[@text="Oh no! Your cart is empty. Fill it up with swag to complete your purchase."]`,
        quantityMinus: `(//android.view.ViewGroup[@content-desc="counter minus button"])[1]/android.widget.ImageView`,
        quanityPlus: `(//android.view.ViewGroup[@content-desc="counter plus button"])[##PLACEHOLDER##]/android.widget.ImageView`
      
    }

    async clickOnProceedToCheckoutButton(){
        await this.click(this.selectors.proceedToCheckoutButton);
    }

    async getNumberOfProductsInCart() {
        const productRows = await $$(this.selectors.productRows);
        return productRows.length;
    }

    async getAllProductDetails() {
        const productRows = await $$(this.selectors.productRows);
        const productDetails = [];
        for (let i = 1; i <= productRows.length; i++) {
            const labelXPath = `(${this.selectors.productName})[${i}]`;
            const priceXPath = `(${this.selectors.productPrice})[${i}]`;
            const labelText = await this.getText(labelXPath);
            let priceText = await this.getText(priceXPath);
            priceText = priceText.replace('$', '');
            productDetails.push({ productName: labelText, productPrice: priceText });
        }
        return productDetails;
    }
    
    async isAllProductsInCart(products: ProductDetails[], cartProductDetails: any): Promise<boolean> {
        return products.every(product => cartProductDetails
            .some((cartProduct: { productName: string; }) => cartProduct.productName === product.productName)
        );
    }

    async verifyCartProductDetails(products: ProductDetails[], cartProductDetails: any[]): Promise<boolean> {
        return products.every(product => 
            cartProductDetails.some(cartProduct => 
                cartProduct.productName === product.productName && cartProduct.productPrice === product.productPrice
            )
        );
    }

    async removeProductsFromCartIndividually(){
        const numberOfProducts = await this.getNumberOfProductsInCart();
        if(numberOfProducts>0){
            for(let i = 0; i < numberOfProducts; i++)
            this.click(this.selectors.removeIndividualProductButton);
        }
        else{
            LOGGER.info('The cart is already empty. No products to remove.')
        }
    }

    async isCartEmpty():Promise<boolean>{
       return this.isDisplayed(this.selectors.noItems);
    }

    async removeProductsFromCartByReducingQuantity(){
        while(await this.isExisting(this.selectors.quantityMinus)){
            await this.click(this.selectors.quantityMinus);
        }
    }
}