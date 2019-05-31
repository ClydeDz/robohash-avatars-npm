const baseURL = "https://robohash.org/";
const defaultUsername = "RobohashAvatarNPM";
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;

export enum CharacterSets{
    Robots = "set1",
    Monsters = "set2",
    DisembodiedHeads = "set3",
    Kittens = "set4"
}

export enum BackgroundSets{
    RandomBackground1 = "bg1",
    RandomBackground2 = "bg2"
}

export interface RobohashAvatarSettings {
    username: string;
    characters?: CharacterSets;
    background?: BackgroundSets;
    height?: number;
    width?: number;
}

/***
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