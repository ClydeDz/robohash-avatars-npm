const baseURL = "https://robohash.org/";

enum CharacterSets{
    Robots = "set1",
    Monsters = "set2",
    DisembodiedHeads = "set3",
    Kittens = "set4"
}

enum BackgroundSets{
    RandomBackground1 = "bg1",
    RandomBackground2 = "bg2"
}

/**
 * Checks if supplied setting exists and valid and constructs the query string part
 * of the API URL accordingly.
 * @param key The key part of the query string.
 * @param setting The setting that needs to be supplied as the value for that key.
 */
function resolveSettings(key:string, setting: any) : string{
    if(!setting){
        return "";
    }
    return  `${key}=${setting}&`;
}

function getDimensions(width?: number, height?: number){
    if(!width || !height){
        return undefined;
    }
    return `${width}x${height}`;
}

/**
 * 
 * @param settings 
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
export function generateAvatar(username: string, characters?: CharacterSets, 
    background?: BackgroundSets, height?: number, width?: number): string {
    let apiURL = baseURL;

    if(!username){
        username = "XYZ"; //TODO: generate random hash
    }
    
    apiURL += `${username}?`;
    apiURL += resolveSettings("set", characters);
    apiURL += resolveSettings("bgset", background);
    apiURL += resolveSettings("size", getDimensions(width, height));

    return apiURL;
}