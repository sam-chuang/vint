//import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/vint.js',
            format: 'umd',
            name: 'vint',
            extend: true,
            sourcemap: 'inline'
        },
        plugins: [ 
            buble({ 
                jsx: "h",
                objectAssign: "Object.assign",
            }),
            resolve(),
            /*json()*/ 
        ]
    }
]