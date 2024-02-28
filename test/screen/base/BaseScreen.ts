export class BaseClass{

    protected async getELement(locator:string):Promise<WebdriverIO.Element>{
        return await $(locator);
    }

    protected async click(locator : string){
       const element =  await this.getELement(locator);
       await element.waitForDisplayed({timeoutMsg:'Element not displayed'})
       await element.click();
    }

    protected async setValue(locator:string,value:string){
        const element = await this.getELement(locator);
        await element.waitForDisplayed({timeoutMsg:'Element not displayed'})
        await element.setValue(value);
    }
    protected async getText(locator: string): Promise<string> {
        const element = await this.getELement(locator);
        await element.waitForDisplayed({timeoutMsg: 'Element not displayed' });
        return element.getText();
    }

    protected async waitForElementDisplayed(locator: string){
        const element = await this.getELement(locator);
        await element.waitForDisplayed({timeoutMsg: 'Element not displayed' });
    }

    protected async waitForElementEnabled(locator: string){
        const element = await this.getELement(locator);
        await element.waitForEnabled({timeoutMsg: 'Element not enabled' });
    }

    protected async waitForElementClickable(locator: string){
        const element = await this.getELement(locator);
        await element.waitForClickable({ timeoutMsg: 'Element not clickable' });
    }
}
