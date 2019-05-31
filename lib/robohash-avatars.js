"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
const baseURL = "https://robohash.org/";
const defaultUsername = "RobohashAvatarNPM";
const util = new utility_1.Utility();
var models_1 = require("./models");
exports.CharacterSets = models_1.CharacterSets;
exports.BackgroundSets = models_1.BackgroundSets;
/**
 *
 * @param settings
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
function generateAvatar(settings) {
    let apiURL = baseURL;
    if (!settings) {
        return apiURL;
    }
    if (!settings.username) {
        settings.username = defaultUsername;
    }
    apiURL += `${settings.username}?`;
    apiURL += util.resolveSettings("set", settings.characters);
    apiURL += util.resolveSettings("bgset", settings.background);
    apiURL += util.resolveSettings("size", util.getDimensions(settings.width, settings.height));
    apiURL = util.trimInvalidCharactersIfExists(apiURL);
    return apiURL;
}
exports.generateAvatar = generateAvatar;
