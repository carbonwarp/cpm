export type Pkg = { name: string; description: string };

/**
 * .compactful format:
 *   lines 1-2 are ignored, then every 4th line (4, 8, 12, ...) is
 *   `name : "description"`. The two lines after each package are ignored.
 */
export function parse(text: string): Pkg[] {
  const pkgs: Pkg[] = [];
  text.split(/\r?\n/).forEach((line, i) => {
    if (i % 4 !== 3) return;
    const colon = line.indexOf(':');
    if (colon === -1) return;
    const name = line.slice(0, colon).trim();
    const description = line.slice(colon + 1).trim().replace(/^"|"$/g, '');
    if (name) pkgs.push({ name, description });
  });
  return pkgs;
}
