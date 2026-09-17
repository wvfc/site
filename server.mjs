/**
 * Servidor estático mínimo para conferir o build localmente.
 * Reproduz o roteamento do Cloudflare Pages: /rota/ -> /rota/index.html,
 * e 404.html para o que não existir.
 *
 *   node server.mjs [porta]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const porta = Number(process.argv[2]) || 4321;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
};

createServer(async (req, res) => {
  let alvo = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (alvo.endsWith('/')) alvo += 'index.html';

  let arquivo = path.join(raiz, alvo);
  if (!arquivo.startsWith(raiz)) {
    res.writeHead(403).end('Proibido');
    return;
  }

  try {
    const info = await stat(arquivo);
    if (info.isDirectory()) arquivo = path.join(arquivo, 'index.html');
    const corpo = await readFile(arquivo);
    res.writeHead(200, { 'content-type': TIPOS[path.extname(arquivo)] || 'application/octet-stream' });
    res.end(corpo);
  } catch {
    try {
      const corpo = await readFile(path.join(raiz, '404.html'));
      res.writeHead(404, { 'content-type': TIPOS['.html'] }).end(corpo);
    } catch {
      res.writeHead(404).end('Não encontrado');
    }
  }
}).listen(porta, () => console.log(`http://localhost:${porta}`));
