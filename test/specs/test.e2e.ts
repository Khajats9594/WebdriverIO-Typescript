import { expect } from '@wdio/globals'
import { ExploreProductScreen } from '../screen/ExploreProductScreen';
import { HomeScreen} from '../screen/HomeScreen'

let homeScreen: HomeScreen;
let exploreProductScreen: ExploreProductScreen;
describe('My Login application', () => {

    before(async () => {
        homeScreen = new HomeScreen();
        exploreProductScreen = new ExploreProductScreen();
    })

    it('should login with valid credentials', async () => {
        //Arrange
        const categoryId:string = "Clothing";
        const productName:string = "Elegant Suite";

        //Act
        await homeScreen.clickOnCategory(categoryId);
        await exploreProductScreen.clickOnProduct(productName);

        //Assert

    })
})

