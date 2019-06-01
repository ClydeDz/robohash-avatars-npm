import { CharacterSets, BackgroundSets } from "./models";

const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;

export class Utility {

    /**
     * Checks if supplied setting exists and valid and constructs the query string part
     * of the API URL accordingly.
     * @param key The key part of the query string.
     * @param setting The setting that needs to be supplied as the value for that key.
     */
    public resolveSettings(key: string, setting: string | CharacterSets | BackgroundSets | undefined): string {
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
    public containsOnlyNumbers(width: number, height: number): boolean {
        // Replaced RegEx because of https://rules.sonarsource.com/javascript/type/Security%20Hotspot/RSPEC-4784
        const onlyNumbers = (input: string): boolean => {
            for (let inputIndex = input.length - 1; inputIndex >= 0; inputIndex--) {
                const d = input.charCodeAt(inputIndex);
                if (d < 48 || d > 57) return false;
            }
            return true;
        }
        return onlyNumbers(width.toString()) && onlyNumbers(height.toString());
    }

    /**
     * Validates dimensions and returns dimension is correct format.
     * @param width Width of the image
     * @param height Height of the image
     */
    public getDimensions(width?: number, height?: number): string {
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
    public trimInvalidCharactersIfExists(apiURL: string): string {
        const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
        const doesURLEndWithQuestion = apiURL.substr(apiURL.length - 1) === "?";
        if (!doesURLEndWithAmpersand && !doesURLEndWithQuestion) {
            return apiURL;
        }
        return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
    }
}

