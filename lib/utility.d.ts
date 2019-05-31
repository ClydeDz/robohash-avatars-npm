import { CharacterSets, BackgroundSets } from "./models";
export declare class Utility {
    /**
     * Checks if supplied setting exists and valid and constructs the query string part
     * of the API URL accordingly.
     * @param key The key part of the query string.
     * @param setting The setting that needs to be supplied as the value for that key.
     */
    resolveSettings(key: string, setting: string | CharacterSets | BackgroundSets | undefined): string;
    /**
     * Validates dimensions and returns dimension is correct format.
     * @param width Width of the image
     * @param height Height of the image
     */
    containsOnlyNumbers(width: number, height: number): boolean;
    /**
     * Validates dimensions and returns dimension is correct format.
     * @param width Width of the image
     * @param height Height of the image
     */
    getDimensions(width?: number, height?: number): string;
    /**
     * Remove the `&` and `?` characters from the end of the URL if it exists.
     * @param apiURL The API URL being constructed
     */
    trimInvalidCharactersIfExists(apiURL: string): string;
}
