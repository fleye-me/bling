import { BlingClient } from './bling';

const API_KEY = '';

async function main() {
  const client = new BlingClient(API_KEY);
  try {
    const nfs = await client.listarNotasFiscais({ tipo: 'E' });
    nfs.forEach((nf) => console.log(JSON.stringify(nf, null, 2)));
  } catch (err) {
    console.log(err);
  }
}

main();
