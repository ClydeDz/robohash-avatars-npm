import { RobohashAvatarSettings } from "./models";
import { Utility } from "./utility";

const baseURL = "https://robohash.org/";
const defaultUsername = "RobohashAvatarNPM";
const util = new Utility();

export { CharacterSets, BackgroundSets, RobohashAvatarSettings } from "./models";

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
    apiURL += util.resolveSettings("set", settings.characters);
    apiURL += util.resolveSettings("bgset", settings.background);
    apiURL += util.resolveSettings("size", util.getDimensions(settings.width, settings.height));

    apiURL = util.trimInvalidCharactersIfExists(apiURL);

    return apiURL;
}