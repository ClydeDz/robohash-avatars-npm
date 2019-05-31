export declare enum CharacterSets {
    Robots = "set1",
    Monsters = "set2",
    DisembodiedHeads = "set3",
    Kittens = "set4"
}
export declare enum BackgroundSets {
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
/**
 *
 * @param settings
 * @example https://robohash.org/set_set4/bgset_bg1/3.14159?size=500x500
 */
export declare function generateAvatar(settings: RobohashAvatarSettings): string;
