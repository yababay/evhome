"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_typescript_1 = __importDefault(require("@rollup/plugin-typescript"));
const rollup_plugin_esbuild_1 = __importDefault(require("rollup-plugin-esbuild"));
//import terser from '@rollup/plugin-terser'
exports.default = {
    input: 'src/tests/index.ts',
    output: {
        file: 'public/assets/js/unit-tests.js',
        format: 'cjs',
    },
    plugins: [
        (0, plugin_typescript_1.default)({ tsconfig: 'src/tests/tsconfig.json' }),
        (0, rollup_plugin_esbuild_1.default)(),
        //terser()
    ]
};
