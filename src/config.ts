// Everything site-specific lives here, so the rest of the code stays reusable.
export const site = {
  name: 'CPM',
  fullName: 'Compactful Package Manager',
  tagline: 'Get your favorite software on any Linux distribution.',
  nav: [
    { label: 'Setup', href: '/setup' },
    { label: 'Publish', href: '/publish' },
    { label: 'About', href: '/about' },
  ],
};

export const installCommand = (pkg: string) => `cpm install ${pkg}`;
export const packageUrl = (pkg: string) => `/apps/${pkg}`;
export const setupUrl = (id: string) => `/setup/${id}`;
export const iconUrl = (slug?: string) =>
  slug ? `https://cdn.simpleicons.org/${slug}` : undefined;
