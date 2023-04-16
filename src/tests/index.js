"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = require("../../tests/browser");
(0, browser_1.it)('should hello', () => {
    let hi = document.querySelector('h1');
    (0, browser_1.assert)(hi.textContent === 'Hello, World!');
});
