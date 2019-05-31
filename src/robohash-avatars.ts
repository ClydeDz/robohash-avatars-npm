const baseURL = "https://robohash.org/";
const defaultUsername = "RobohashAvatarNPM";
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;

/**
 * Characters sets available for the RoboHash avatar.
 */
export enum CharacterSets{
    /**
     * The default character.
     */
    Robots = "set1",
    /**
     * Weird monsters character.
     */
    Monsters = "set2",
    /**
     * Like robots but just heads.
     */
    DisembodiedHeads = "set3",
    /**
     * Purr-y characters.
     */
    Kittens = "set4"
}

/**
 * Backgrounds available for the RoboHash avatar.
 */
export enum BackgroundSets{
    RandomBackground1 = "bg1",
    RandomBackground2 = "bg2"
}

/**
 * Settings that you can supply to generate a RoboHash Avatar.
 */
export interface RobohashAvatarSettings {
    /**
     * The username that needs an avatar.
     */
    username: string;
    /**
     * The RoboHash avatar character.
     */
    characters?: CharacterSets;
    /**
     * The background applied for your avatar.
     */
    background?: BackgroundSets;
    /**
     * Height of the avatar image.
     */
    height?: number;
    /**
     * Width of the avatar image.
     */
    width?: number;
}

/**
 * Checks if supplied setting exists and valid and constructs the query string part
 * of the API URL accordingly.
 * @param key The key part of the query string.
 * @param setting The setting that needs to be supplied as the value for that key.
 */
function resolveSettings(key: string, setting: string | CharacterSets | BackgroundSets | undefined): string{
    if(!setting){
        return "";
    }
    return  `${key}=${setting}&`;
}

/**
 * Validates dimensions and returns dimension is correct format.
 * @param width Width of the image
 * @param height Height of the image
 */
function getDimensions(width?: number, height?: number): string{
    if(!width || !height){
        return "";
    }
    return `${width}x${height}`;
}

/**
 * Remove the `&` and `?` characters from the end of the URL if it exists.
 * @param apiURL The API URL being constructed
 */
function trimInvalidCharactersIfExists(apiURL: string): string{
    const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
    const doesURLEndWithQuestion = apiURL.substr(apiURL.length - 1) === "?";
    if(!doesURLEndWithAmpersand && !doesURLEndWithQuestion){
        return apiURL;
    }
    return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
}

/**
 * 
 * @param settings 
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
export function generateAvatar(settings: RobohashAvatarSettings): string {
    let apiURL = baseURL;

    if (!settings) {
        return apiURL;
    }

    if(!settings.username){
        settings.username = defaultUsername; 
    }
    
    apiURL += `${settings.username}?`;
    apiURL += resolveSettings("set", settings.characters);
    apiURL += resolveSettings("bgset", settings.background);
    apiURL += resolveSettings("size", getDimensions(settings.width, settings.height));

    apiURL = trimInvalidCharactersIfExists(apiURL);

    return apiURL;
}