import { Logger } from "../customLogger/logger";
import { ProductDetails } from "../resources/customTypes/productDetails";
import { BaseScreen } from "./base/baseScreen"
const LOGGER = new Logger();
export class CartScreen extends BaseScreen{
    private selectors = {

        proceedToCheckoutButton: `//android.widget.TextView[@text="Proceed To Checkout"]`,
        productRows: `//android.view.ViewGroup[@content-desc="product row"]`,
        productName: `//android.widget.TextView[@content-desc="product label"]`,
        productPrice: `//android.widget.TextView[@content-desc="product price"]`,
        quantityNumber: `//android.view.ViewGroup[@content-desc="counter amount"]//android.widget.TextView`,
        removeIndividualProductButton: `(//android.view.ViewGroup[@content-desc="remove item"])[1]`,
        noItems: `//android.widget.TextView[@text="Oh no! Your cart is empty. Fill it up with swag to complete your purchase."]`,
        quantityMinus: `(//android.view.ViewGroup[@content-desc="counter minus button"])[1]/android.widget.ImageView`,
        quanityPlus: `(//android.view.ViewGroup[@content-desc="counter plus button"])[##PLACEHOLDER##]/android.widget.ImageView`,
        totalItems: `~total number`
      
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
            
            const labelXPath = `(${this.selectors.productRows}${this.selectors.productName})[${i}]`;
            const priceXPath = `(${this.selectors.productRows}${this.selectors.productPrice})[${i}]`;
            const quantityXPath = `(${this.selectors.productRows}[${i}]${this.selectors.quantityNumber})`; 

            const labelText = await this.getText(labelXPath);
            let priceText = await this.getText(priceXPath);

            await this.swipeUpTillElementFound(quantityXPath);

            const quantityText = await this.getText(quantityXPath); 
            priceText = priceText.replace('$', '');

            productDetails.push({ productName: labelText, productPrice: priceText, quantity: quantityText });
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

    async getTotalQuantity(): Promise<number>{
        const totalQuantity = (await this.getText(this.selectors.totalItems)).replace(' items', '');
        return parseInt(totalQuantity);
    }

    async verifyCartProductQuantityDetails(productsInCart: any[],fetchedCartDetails: any[]): Promise<boolean> {
        const result = fetchedCartDetails.every(product => {
            const matchFound = productsInCart.some(cartProduct => {
                // Convert quantity strings to numbers for comparison
                const productQuantity = Number(product.quantity);
                const cartProductQuantity = cartProduct.quantity;
    
                const match =
                    cartProduct.productName === product.productName &&
                    cartProductQuantity === productQuantity;
                return match;
            });
            return matchFound;
        });
        return result;
    }
    
    async getTotalNoOfProductsInCart(productsInCart: any[]): Promise<number> {
        let total: number = 0;
        for (const product of productsInCart) {
            total += product.quantity;
        }
        return total;
    }
}