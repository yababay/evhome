"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../lib/settings");
test("proxyPort should be number", () => {
    expect(typeof settings_1.proxyPort).toBe('number');
});
