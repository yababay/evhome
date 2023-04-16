"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PROXY_PORT, } = process.env;
function getProxyPort() {
    const usual = 3000;
    if (typeof PROXY_PORT !== 'string')
        return usual;
    const port = parseInt(PROXY_PORT);
    return isNaN(port) || port < 1024 ? usual : port;
}
exports.proxyPort = getProxyPort();
