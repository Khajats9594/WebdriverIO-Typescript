import { DynamicXpath } from "../utilis/DynamicXpath";
import { BaseClass } from "./base/BaseScreen";

export class HomeScreen extends BaseClass{

    private selectors = {
       categoryId : '#img-category-%replaceable%'
    }

    async clickOnCategory(categoryIdValue:string){
       const categoryId = await DynamicXpath.getXpath(this.selectors.categoryId,categoryIdValue);
       await this.click(categoryId);
    }
}