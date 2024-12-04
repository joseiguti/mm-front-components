import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
    input: "src/index.js", // Archivo de entrada principal
    output: [
        {
            file: "dist/index.cjs.js", // Archivo para CommonJS
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js", // Archivo para ES Modules
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(), // Resuelve dependencias de node_modules
        commonjs(), // Convierte CommonJS a ES Modules
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
        }),
    ],
    external: ["react", "react-dom"], // Evita incluir React en el bundle
};
