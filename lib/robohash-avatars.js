"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseURL = "https://robohash.org/";
const defaultUsername = "RobohashAvatarNPM";
const stringStartIndex = 0;
const stringTrimIndexFromEnd = 1;
var CharacterSets;
(function (CharacterSets) {
    CharacterSets["Robots"] = "set1";
    CharacterSets["Monsters"] = "set2";
    CharacterSets["DisembodiedHeads"] = "set3";
    CharacterSets["Kittens"] = "set4";
})(CharacterSets = exports.CharacterSets || (exports.CharacterSets = {}));
var BackgroundSets;
(function (BackgroundSets) {
    BackgroundSets["RandomBackground1"] = "bg1";
    BackgroundSets["RandomBackground2"] = "bg2";
})(BackgroundSets = exports.BackgroundSets || (exports.BackgroundSets = {}));
/***
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
        return "";
    }
    return `${width}x${height}`;
}
/**
 * Remove the & character from the end of the URL if it exists.
 * @param apiURL The API URL being constructed
 */
function trimAmpersandIfExists(apiURL) {
    const doesURLEndWithAmpersand = apiURL.substr(apiURL.length - 1) === "&";
    if (!doesURLEndWithAmpersand) {
        return apiURL;
    }
    return apiURL.substring(stringStartIndex, apiURL.length - stringTrimIndexFromEnd);
}
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
    apiURL += resolveSettings("set", settings.characters);
    apiURL += resolveSettings("bgset", settings.background);
    apiURL += resolveSettings("size", getDimensions(settings.width, settings.height));
    apiURL = trimAmpersandIfExists(apiURL);
    return apiURL;
}
exports.generateAvatar = generateAvatar;
