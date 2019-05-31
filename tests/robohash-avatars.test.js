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
    
});