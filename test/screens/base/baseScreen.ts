import { TouchActions } from "../../gestures/touchActions";

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

    protected async swipeUpTillElementFound(selector: string): Promise<void> {
        let element = $(selector);
        while (!(await element.isDisplayed())) {
          await TouchActions.swipeUpFromMiddle();
          element = $(selector);
      }
    }

    protected async getText(selector: string): Promise<string> {
        const element = $(selector);
        return element.getText();
    }

    protected async getAttribute(selector: string, attributeName: string): Promise<void> {
        const element = $(selector);
        await element.getAttribute(attributeName);
    }

    protected async doubleClick(selector: string): Promise<void> {
        const element = $(selector);
        (await element).doubleClick();
    }

    protected async getValue(selector: string): Promise<string> {
        const element = $(selector);
        return element.getValue();
    }
}
