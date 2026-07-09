import { mkdir, copyFile, rm, stat } from 'node:fs/promises';

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];

for (const file of requiredFiles) {
  const info = await stat(file).catch(() => null);
  if (!info?.isFile()) {
    throw new Error(`Missing required site asset: ${file}`);
  }
}

await rm('dist', { recursive: true, force: true });
await mkdir('dist/src', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await copyFile('src/main.js', 'dist/src/main.js');
await copyFile('src/styles.css', 'dist/src/styles.css');
console.log('Static portfolio site built to dist/.');
