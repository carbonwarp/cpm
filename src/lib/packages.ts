import { readFile } from 'node:fs/promises';
import { parse, type Pkg } from './parse';

export type { Pkg };

// URL or local path of the .compactful file. Read at build time.
const SOURCE: string = './cpm-core.compactful';

async function load(): Promise<Pkg[]> {
  if (/^https?:\/\//.test(SOURCE)) {
    const res = await fetch(SOURCE);
    if (!res.ok) throw new Error(`Could not fetch ${SOURCE}: ${res.status}`);
    return parse(await res.text());
  }
  return parse(await readFile(SOURCE, 'utf8'));
}

let cache: Promise<Pkg[]> | undefined;
export const getPackages = () => (cache ??= load());
