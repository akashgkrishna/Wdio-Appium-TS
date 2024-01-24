import { Logger } from "../../customLogger/logger";

const LOGGER = new Logger();
export module XpathUtil {
    /**
     * This method will replace ##PLACEHOLDER## with the value passed
     */
    export function getPlaceholderReplaced(xpath: string, replacement: string): string {
        try {
            return xpath.replace(/##PLACEHOLDER##/g, replacement);
        } catch (error: any) {
            LOGGER.error('Error occurred while replacing placeholder in XPath: \n', error);
            return xpath;
        }
    }
}
