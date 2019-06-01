"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;
class Utility {
    /**
     * Checks if supplied setting exists and valid and constructs the query string part
     * of the API URL accordingly.
     * @param key The key part of the query string.
     * @param setting The setting that needs to be supplied as the value for that key.
     */
    resolveSettings(key, setting) {
        if (!setting) {
            return "";
        }
        return `${key}=${setting}&`;
    }
    /**
     * Validates dimensions and returns dimension is correct format.
     * @param width Width of the image
     * @param height Height of the image
     */
    containsOnlyNumbers(width, height) {
        // Replaced RegEx because of https://rules.sonarsource.com/javascript/type/Security%20Hotspot/RSPEC-4784
        const onlyNumbers = (input) => {
            for (let inputIndex = input.length - 1; inputIndex >= 0; inputIndex--) {
                const d = input.charCodeAt(inputIndex);
                if (d < 48 || d > 57)
                    return false;
            }
            return true;
        };
        return onlyNumbers(width.toString()) && onlyNumbers(height.toString());
    }
    /**
     * Validates dimensions and returns dimension is correct format.
     * @param width Width of the image
     * @param height Height of the image
     */
    getDimensions(width, height) {
        if (!width || !height) {
            return "";
        }
        if (!this.containsOnlyNumbers(width, height)) {
            return "";
        }
        return `${width}x${height}`;
    }
    /**
     * Remove the `&` and `?` characters from the end of the URL if it exists.
     * @param apiURL The API URL being constructed
     */
    trimInvalidCharactersIfExists(apiURL) {
        const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
        const doesURLEndWithQuestion = apiURL.substr(apiURL.length - 1) === "?";
        if (!doesURLEndWithAmpersand && !doesURLEndWithQuestion) {
            return apiURL;
        }
        return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
    }
}
exports.Utility = Utility;
