"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
const avatars = require("./../src/robohash-avatars");
const assert = require("assert");
describe("generateAvatar()", function () {
    console.log("[test suite]", this.title);
    it("basic input supplied", function () {
        //console.log("\t", "[test]", this.test.title);
        var actual = avatars.generateAvatar("abc");
        assert.equal(actual, "https://robohash.org/abc?");
    });
});
