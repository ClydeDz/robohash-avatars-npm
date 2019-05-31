import { RobohashAvatarSettings } from "./models";
export { CharacterSets, BackgroundSets, RobohashAvatarSettings } from "./models";
/**
 *
 * @param settings
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
export declare function generateAvatar(settings: RobohashAvatarSettings): string;
