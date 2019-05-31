/**
 * Characters sets available for the RoboHash avatar.
 */
export declare enum CharacterSets {
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
export declare enum BackgroundSets {
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
 *
 * @param settings
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
export declare function generateAvatar(settings: RobohashAvatarSettings): string;
