import { RobohashAvatarSettings } from "./models";
export { CharacterSets, BackgroundSets, RobohashAvatarSettings } from "./models";
/**
 * Generates a RoboHast Avatar image URL that you can supply to your `<img/>` tag.
 * @param settings {RobohashAvatarSettings} A settings object with any custom values.
 * @example Returns a URL for your image like: https://robohash.org/RobohashAvatarNPM?bgset=bg1&size=200x200
 */
export declare function generateAvatar(settings: RobohashAvatarSettings): string;
