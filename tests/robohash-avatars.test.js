/* eslint-disable @typescript-eslint/no-var-requires */
var avatars = require("./../lib/robohash-avatars");
var assert = require("assert");

describe("generateAvatar()", function () {
    console.log("[test suite]", this.title);

    it("null input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar(null); 
        assert.equal(actual, "https://robohash.org/");
    }); 

    it("undefined input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar(undefined); 
        assert.equal(actual, "https://robohash.org/");
    }); 

    it("empty string input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar(""); 
        assert.equal(actual, "https://robohash.org/");
    }); 

    it("empty username input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: ""
        }); 
        assert.equal(actual, "https://robohash.org/RobohashAvatarNPM");
    }); 

    it("undefined username input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: undefined
        }); 
        assert.equal(actual, "https://robohash.org/RobohashAvatarNPM");
    }); 

    it("null username input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: null
        }); 
        assert.equal(actual, "https://robohash.org/RobohashAvatarNPM");
    }); 

    it("valid username input supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "tonystark"
        }); 
        assert.equal(actual, "https://robohash.org/tonystark");
    }); 

    it("all inputs supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "tonystark",
            background: avatars.BackgroundSets.RandomBackground1,
            characters: avatars.CharacterSets.Kittens,
            height: 400,
            width: 400
        }); 
        assert.equal(actual, "https://robohash.org/tonystark?set=set4&bgset=bg1&size=400x400");
    }); 

    it("valid username but other undefined inputs supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "tonystark",
            background: undefined,
            characters: undefined,
            height: undefined,
            width: undefined
        }); 
        assert.equal(actual, "https://robohash.org/tonystark");
    }); 

    it("all undefined inputs supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: undefined,
            background: undefined,
            characters: undefined,
            height: undefined,
            width: undefined
        }); 
        assert.equal(actual, "https://robohash.org/RobohashAvatarNPM");
    }); 

    it("username and character set supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker",
            characters: avatars.CharacterSets.Monsters,
        }); 
        assert.equal(actual, "https://robohash.org/peterparker?set=set2");
    }); 

    it("username and background set supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker",
            background: avatars.BackgroundSets.RandomBackground1,
        }); 
        assert.equal(actual, "https://robohash.org/peterparker?bgset=bg1");
    }); 

    it("width but no height supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker", 
            width: 400
        }); 
        assert.equal(actual, "https://robohash.org/peterparker");
    }); 

    it("height but no width supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker", 
            height: 400
        }); 
        assert.equal(actual, "https://robohash.org/peterparker");
    }); 

    it("height and width supplied as string", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker", 
            height: "400",
            width: "600"
        }); 
        assert.equal(actual, "https://robohash.org/peterparker?size=600x400");
    }); 

    it("height and width supplied as string alphabets", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker", 
            height: "abc",
            width: "ghi"
        }); 
        assert.equal(actual, "https://robohash.org/peterparker");
    }); 

    it("username and human character set supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar({
            username: "peterparker",
            characters: avatars.CharacterSets.Humans,
        }); 
        assert.equal(actual, "https://robohash.org/peterparker?set=set5");
    }); 
    
});