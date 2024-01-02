export module XpathUtil {
    /**
     * This method will replace ##PLACEHOLDER## with the value passed
     */
    export function getPlaceholderReplaced(xpath: string, replacement: string): string {
        try {
            return xpath.replace(/##PLACEHOLDER##/g, replacement);
        } catch (error: any) {
            // Using 'any' for the error type in this case
            console.error(error.stack);
            console.error(`Error occurred while replacing placeholder in XPath: ${error}`);
            return xpath;
        }
    }
}
