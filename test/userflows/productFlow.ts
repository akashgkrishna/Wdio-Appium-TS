import { Logger } from "../customLogger/logger";
import { ProductDetails } from "../resources/customTypes/productDetails";
import { BaseScreen } from "../screens/base/baseScreen";
import { CatalogScreen } from "../screens/catalogScreen";
import { LeftPanel } from "../screens/common/LeftPanel";
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
}