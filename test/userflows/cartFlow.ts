import { BaseScreen } from "../screens/base/baseScreen";
import { ProductDetails } from "../resources/customTypes/productDetails";
import { Header } from "../screens/common/header";
import { ProductFlow } from "./productFlow";

const productFlow = new ProductFlow();
const header = new Header();

export class CartFlow extends BaseScreen{
    async addProductsAndNavigateToCart(products: ProductDetails[]) {
        await productFlow.addProductsToCart(products);
        await header.clickOnCartButton();
    }
}