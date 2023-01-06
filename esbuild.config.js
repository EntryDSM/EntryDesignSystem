// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build: esbuild } = require('esbuild');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp');

esbuild({
    entryPoints: ['./src/index.ts'],
    target: 'ES6',
    format: 'cjs',
    platform: 'node',
    outdir: './build',
    treeShaking: true,
    bundle: true,
    plugins: [pnpPlugin()],
}).catch(() => process.exit(1));
