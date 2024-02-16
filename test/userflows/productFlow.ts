import { Logger } from "../customLogger/logger";
import { ProductDetails } from "../resources/customTypes/productDetails";
import { BaseScreen } from "../screens/base/baseScreen";
import { CatalogScreen } from "../screens/catalogScreen";
import { LeftPanel } from "../screens/common/leftPanel";
import { Header } from "../screens/common/header";
import { ProductScreen } from "../screens/productScreen";

const header = new Header();
const leftPanel = new LeftPanel();
const catalogScreen = new CatalogScreen();
const productScreen = new ProductScreen();
const LOGGER = new Logger();

export class ProductFlow extends BaseScreen{

    async navigateToCatalogueScreen() {
        await header.clickOnHamburgerMenu();
        await leftPanel.clickOnCatalogueButton();
    }

    async addProductsToCart(products: ProductDetails[]) {
        for (const product of products) {
            LOGGER.info(`Adding product ${product.productName} to the cart`);
            await catalogScreen.clickOnProduct(product.productName);
            await productScreen.addProductToCart();
            await this.navigateToCatalogueScreen();
        }
    }

    async addProductsToCartWithQuantity(products: ProductDetails[]): Promise<{ productName: string; quantity: number }[]> {
        const addedProducts = [];
    
        for (const product of products) {
            const randomQuantity = Math.floor(Math.random() * 4) + 2;
    
            LOGGER.info(`Adding ${randomQuantity} of product ${product.productName} to the cart`);
            await catalogScreen.clickOnProduct(product.productName);
    
            if (randomQuantity > 1) {
                for (let i = 1; i < randomQuantity; i++) {
                    await productScreen.clickOnQuantityPlusButton();
                }
            }
            await productScreen.addProductToCart();
            await this.navigateToCatalogueScreen();
    
            // Store the product name and quantity in the array
            addedProducts.push({ productName: product.productName, quantity: randomQuantity });
        }
        LOGGER.info('All Products added to cart successfully');
        return addedProducts;
    }
    
}