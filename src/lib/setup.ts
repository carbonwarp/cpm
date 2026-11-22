import { getCollection } from 'astro:content';
import { setupUrl } from '../config';

export type Os = { id: string; name: string; icon?: string; url: string };

// Every .mdx file in src/content/setup/ is one distribution.
export async function getSetupPages(): Promise<Os[]> {
  const entries = await getCollection('setup');
  return entries
    .map((e) => ({ id: e.id, name: e.data.title, icon: e.data.icon, url: setupUrl(e.id) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
