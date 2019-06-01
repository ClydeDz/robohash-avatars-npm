/* eslint-disable @typescript-eslint/no-var-requires */
var utility = require("./../lib/utility");
var assert = require("assert");

describe("Utility()", function () {
    console.log("[test suite]", this.title);
    const util = new utility.Utility();

    describe("trimInvalidCharactersIfExists()", function () {
        console.log("[test sub-suite]", this.title);

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

    describe("containsOnlyNumbers()", function () {
        it("alphabets supplied", function () {
            console.log("\t", "[test]", this.test.title);
            var actual = util.containsOnlyNumbers("robohash", "robohash"); 
            assert.equal(actual, false); 
        }); 
        it("numbers supplied", function () {
            console.log("\t", "[test]", this.test.title);
            var actual = util.containsOnlyNumbers("123", "123"); 
            assert.equal(actual, true); 
        }); 
        it("symbols supplied", function () {
            console.log("\t", "[test]", this.test.title);
            var actual = util.containsOnlyNumbers("&%@#)(", "\"~!@`*/"); 
            assert.equal(actual, false); 
        }); 
        it("alphanumeric+symbols supplied", function () {
            console.log("\t", "[test]", this.test.title);
            var actual = util.containsOnlyNumbers("1a2y3", "12jo#&^k3"); 
            assert.equal(actual, false); 
        }); 
    });
   
});