import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  integrations: [expressiveCode(), mdx()],
  markdown: { remarkPlugins: [remarkBreaks] },
  vite: { plugins: [tailwindcss()] },
});   
