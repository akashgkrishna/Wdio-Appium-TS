import { Logger } from "../../customLogger/logger";
import { TouchActions } from "../../gestures/touchActions";
import { ElementActions } from "./elementActions";
const LOGGER = new Logger();
export class BaseScreen {


    protected async click(selector: string) {
        const element = $(selector);
        await ElementActions.click(await element);
    }

    protected async isDisplayed(selector: string): Promise<boolean>{
            const element = $(selector);
            return await ElementActions.isDisplayed(await element);
    }

    protected async setValue(selector: string, value: any){
            const element = $(selector);
            await ElementActions.setValue(await element, value);
    }

    protected async swipeUpTillElementFound(selector: string): Promise<void> {
        try {
            let element = $(selector);
            while (!(await element.isDisplayed())) {
                await TouchActions.swipeUpFromMiddle();
                element = $(selector);
            }
        } catch (error: any) {
            LOGGER.error('Error during swipeUpTillElementFound: \n', error);
        }
    }

    protected async getText(selector: string): Promise<string> {
            const element = $(selector);
            return ElementActions.getText(await element);
    }

    protected async getAttribute(selector: string, attributeName: string): Promise<string> {
            const element = $(selector);
            return await ElementActions.getAttribute(await element, attributeName);
    }

    //TODO add to ElementActions
    protected async doubleClick(selector: string): Promise<void> {
        try {
            const element = $(selector);
            // await element.waitForClickable({timeout: this.DEFAULT_TIMEOUT});
            await element.doubleClick();
        } catch (error: any) {
            LOGGER.error('Error duting doubleClick: \n', error);
        }
       
    }

    protected async getValue(selector: string): Promise<string> {
        try {
            const element = $(selector);
            // await element.waitForExist({timeout: this.DEFAULT_TIMEOUT});
            return element.getValue();
        } catch (error: any) {
            LOGGER.error('Error during fetching value: \n', error);
            return 'null';
        }
       
    }

    protected async isExisting(selector: string): Promise<boolean> {
        try {
            const element = $(selector)
            return await element.isExisting();
        } catch (error: any) {
            LOGGER.error('Error while checking if element exists: \n', error);
            return false;
        }
    }
}
