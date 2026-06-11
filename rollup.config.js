import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const external = Object.keys(pkg.dependencies ?? {});

export default [
    {
        input: "src/index.ts",
        external,
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["node_modules", "dist", "**/*.test.ts"],
            }),
            babel({
                presets: [["@babel/preset-typescript", { allowDeclareFields: true }]],
                babelHelpers: "bundled",
                exclude: "node_modules/**",
                extensions: [".js", ".ts"],
            })
        ],
        output: [
            {
                format: "cjs",
                file: pkg.main,
                esModule: false,
                sourcemap: true,
            },
            {
                format: "es",
                file: pkg.module,
                sourcemap: true,
            },
        ],
    },
    {
        input: "src/index.ts",
        plugins: [
            resolve({ browser: true }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["node_modules", "dist", "**/*.test.ts"],
            }),
            babel({
                presets: [["@babel/preset-typescript", { allowDeclareFields: true }]],
                babelHelpers: "bundled",
                exclude: "node_modules/**",
                extensions: [".js", ".ts"],
            })
        ],
        output: [
            {
                format: "iife",
                file: pkg.jsdelivr,
                name: "Revenexx",
                extend: true,
            },
        ],
    }
];
