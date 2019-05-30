"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://robohash.org/";
var CharacterSets;
(function (CharacterSets) {
    CharacterSets["Robots"] = "set1";
    CharacterSets["Monsters"] = "set2";
    CharacterSets["DisembodiedHeads"] = "set3";
    CharacterSets["Kittens"] = "set4";
})(CharacterSets || (CharacterSets = {}));
var BackgroundSets;
(function (BackgroundSets) {
    BackgroundSets["RandomBackground1"] = "bg1";
    BackgroundSets["RandomBackground2"] = "bg2";
})(BackgroundSets || (BackgroundSets = {}));
/**
 * Checks if supplied setting exists and valid and constructs the query string part
 * of the API URL accordingly.
 * @param key The key part of the query string.
 * @param setting The setting that needs to be supplied as the value for that key.
 */
function resolveSettings(key, setting) {
    if (!setting) {
        return "";
    }
    return `${key}=${setting}&`;
}
function getDimensions(width, height) {
    if (!width || !height) {
        return undefined;
    }
    return `${width}x${height}`;
}
/**
 *
 * @param settings
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
function generateAvatar(username, characters, background, height, width) {
    let apiURL = baseURL;
    if (!username) {
        username = "XYZ"; //TODO: generate random hash
    }
    apiURL += `${username}?`;
    apiURL += resolveSettings("set", characters);
    apiURL += resolveSettings("bgset", background);
    apiURL += resolveSettings("size", getDimensions(width, height));
    return apiURL;
}
exports.generateAvatar = generateAvatar;
