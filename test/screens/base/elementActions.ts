import { Logger } from "../../customLogger/logger";

const LOGGER = new Logger();

export class ElementActions {

    private static readonly DEFAULT_TIMEOUT: number = 5000;

    //TODO Extract common method
    public static async click(element: WebdriverIO.Element) {
        try {
            browser.waitUntil(
                function () {
                    return element.isClickable();
                },
                {
                    timeout: this.DEFAULT_TIMEOUT,
                }
            );
            await element.click();
        } catch (error: any) {
            LOGGER.error('Error while clicking element: \n', error);
        }
    }

    public static async isDisplayed(element: WebdriverIO.Element): Promise<boolean> {
        try {
            await browser.waitUntil(
                async () => {
                    try {
                        return await element.isDisplayed();
                    } catch (error) {
                        return false;
                    }
                },
                {
                    timeout: this.DEFAULT_TIMEOUT,
                    timeoutMsg: 'Element did not display in the specified time'
                }
            );
            return true;
        } catch (error: any) {
            LOGGER.error('Error while checking if element is displayed: \n', error);
            return false;
        }
    }

    public static async setValue(element: WebdriverIO.Element, value: string): Promise<void> {
        try {
            element.click();
            browser.waitUntil(
                function() {
                    return element.waitForClickable();
                },
                {
                    timeout: this.DEFAULT_TIMEOUT,
                }
            );
            await element.setValue(value);
        } catch (error: any)
        {
            LOGGER.error('Error during setting value: \n', error);
        }
    }

    public static async getText(element: WebdriverIO.Element): Promise<string> {
        try {
            browser.waitUntil(
                function() {
                    return element.waitForDisplayed();
                },
                {
                    timeout: this.DEFAULT_TIMEOUT,
                }
            );
            return await element.getText();
        } catch (error: any)
        {
            LOGGER.error('Error during fetching text: \n', error);
            return 'null';
        }
    }

    public static async getAttribute(element: WebdriverIO.Element, attributeName: string): Promise<string> {
        try {
            browser.waitUntil(
                function() {
                    return element.waitForExist();
                },
                {
                    timeout: this.DEFAULT_TIMEOUT,
                }
            );
            return await element.getAttribute(attributeName);
        } catch (error: any)
        {
            LOGGER.error('Error during getAttribute: \n', error);
            return 'null'
        }
    }
}