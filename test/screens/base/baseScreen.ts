export class BaseScreen {

    protected async click(selector: string) {
        const element = $(selector);
        await element.click();
    }

    protected async isDisplayed(selector: string): Promise<boolean>{
        const element = $(selector);
        return await element.isDisplayed();
    }

    protected async setValue(selector: string, value: any){
        const element = $(selector);
        await element.click();
        await element.setValue(value);
    }
}
