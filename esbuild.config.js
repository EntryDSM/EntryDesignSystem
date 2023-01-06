import { build as esbuild } from 'esbuild';
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';

esbuild({
    entryPoints: ['./src/index.ts'],
    target: 'ES6',
    format: 'esm',
    platform: 'node',
    outdir: './build',
    treeShaking: true,
    bundle: true,
    plugins: [pnpPlugin()],
}).catch(() => process.exit(1));
