# Compactful Package Manager

_This branch holds the webpages of cpm store and its core repo_
```sh
pnpm install
pnpm dev
```

## Structure

```
src/
  config.ts          site name, tagline, nav, install command, URL helpers
  content.config.ts  content collections (setup = one .mdx per distribution)
  content/setup/     the setup docs: ubuntu.mdx, fedora.mdx, ...
  lib/
    parse.ts         .compactful text -> packages (pure, no I/O)
    packages.ts      loads CPM_SOURCE (URL or file) and caches it
    setup.ts         distro list from the setup collection
  components/        Button, Banner, Section, CardGrid, PackageCard, OsCard, SearchBox,
                     Header, Footer, Dialog, InstallDialog, CommandBox, Avatar,
                     Prose, Sidebar, Toc
  scripts/           search.ts (live filter), dialog.ts, copy.ts - driven by data-attributes
  layouts/           Base (page shell), Docs (sidebar + article + "on this page")
  pages/             index, setup/index, setup/[slug], apps/[id]
```

## Where .mdx files go

| Folder | URL | Layout |
| --- | --- | --- |
| `src/content/setup/<name>.mdx` | `/setup/<name>` (also a card on `/setup`) | Docs: sidebar + "on this page" |
| `src/content/pages/<name>.mdx` | `/<name>` (e.g. `about.mdx` -> `/about`) | Page: single column |

Frontmatter for `pages`: `title`, optional `description`. To link a page in the header, add it to `nav` in `src/config.ts`. Both layouts use `Prose.astro`, so all `.mdx` is styled the same way.

## Writing docs (.mdx)

Each file in `src/content/setup/` is one distribution page and one card on `/setup`.

```mdx
---
title: Ubuntu
icon: ubuntu
---

## Install

Write plain markdown here.
A single new line stays a line break.

A blank line starts a new paragraph, with a visible gap.
```

- Frontmatter: `title`, optional `icon` (a [simple-icons](https://simpleicons.org) slug).
- No classes or CSS are needed in `.mdx`. All markdown styling (headings, paragraph gaps, lists, links, inline code, code blocks, images, tables) lives in `src/components/Prose.astro`.
- `##` and `###` headings automatically appear in the "On this page" list.
- To add a distribution, add a file; the card and sidebar entry appear by themselves.

## Other notes

- **Colors**: edit the variables at the top of `src/styles/global.css`.
- **Reuse**: put a `SearchBox` with `filter="#id"` next to a `CardGrid id="id"` for live filtering; `<button data-open="id">` opens `<Dialog id="id">`; `data-copy="text"` buttons copy. `Docs.astro` takes any list of sidebar items, so a new docs section needs only a new collection and a page like `pages/setup/[slug].astro`.
