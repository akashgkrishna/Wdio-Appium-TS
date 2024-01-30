import { ProductDetails } from "../resources/customTypes/productDetails";
import { BaseScreen } from "./base/baseScreen"

export class CartScreen extends BaseScreen{
    private selectors = {

        proceedToCheckoutButton: `//android.widget.TextView[@text="Proceed To Checkout"]`,
        productRows: `//android.view.ViewGroup[@content-desc="product row"]`,
        productName: `//android.view.ViewGroup[@content-desc="product row"]//android.widget.TextView[@content-desc="product label"]`,
        productPrice: `//android.view.ViewGroup[@content-desc="product row"]//android.widget.TextView[@content-desc="product price"]`
      
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
}