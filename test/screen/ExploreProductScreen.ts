import { DynamicXpath } from "../utilis/DynamicXpath";
import { BaseClass } from "./base/BaseScreen";

export class ExploreProductScreen extends BaseClass{

    private selectors = {
       product: '//android.widget.TextView[@resource-id="com.ultralesson.ulshopify:id/txt-product-title" and @text="%replaceable%"]'
    }

    async clickOnProduct(productName:string){
        const element = await DynamicXpath.getXpath(this.selectors.product,productName);
        await this.click(element);
    }
}