/* eslint-disable @typescript-eslint/no-var-requires */
var utility = require("./../lib/utility");
var assert = require("assert");

describe("Utility()", function () {
    console.log("[test suite]", this.title);
    const util = new utility.Utility();

    it("URL without invalid characters at the end supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = util.trimInvalidCharactersIfExists("https://robohash.org/"); 
        assert.equal(actual, "https://robohash.org/");
    });
    
    it("null input URL with invalid characters at the end supplied", function () {
        console.log("\t", "[test]", this.test.title);
        var actual = util.trimInvalidCharactersIfExists("https://robohash.org/?"); 
        assert.equal(actual, "https://robohash.org/");
        actual = util.trimInvalidCharactersIfExists("https://robohash.org/&"); 
        assert.equal(actual, "https://robohash.org/");
    });  
});