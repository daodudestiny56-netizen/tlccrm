# The Lord's Chosen — OAU Campus Fellowship

Website for the campus fellowship of The Lord's Chosen Charismatic Revival Ministries at Obafemi Awolowo University, Ile-Ife, Osun State.

Front-end only, built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and Bricolage Grotesque.

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, weekly gatherings, Matthew 6:33, beliefs, leadership preview, freshers welcome |
| `/about` | The ministry, the campus fellowship, the meaning of the TLC badge |
| `/gatherings` | Weekly schedule with times and venues, fellowship units |
| `/advisers` | Staff advisers: photo, name, position, department, unit, email, phone |
| `/executives` | Executive council: photo, name, position, department, faculty, level, email, phone. Search, faculty filter, card and table views |
| `/contact` | Contact form (front-end only), fellowship contacts, campus map |

## Editing content

All content lives in `src/data/`:

- `fellowship.ts`: name, venue, contacts, socials, weekly gatherings, units, beliefs
- `people.ts`: staff advisers and executives
- `nav.ts`: navigation links

Photographs are in `public/images/people/` and `public/images/scenes/`. To replace a demo profile, drop the new photo in `public/images/people/` and update its entry in `people.ts`.

> All names, photographs, emails and phone numbers for advisers and executives are **demo placeholders**, as are the meeting times and venues. Demo photography is from Unsplash.

## Brand

Colours are taken from The Lord's Chosen identity (tlccrm.org and the official logo):

| Token | Hex | Source |
| --- | --- | --- |
| `chosen-red` | `#E73023` | tlccrm.org primary, logo wordmark |
| `navy` | `#013280` | tlccrm.org secondary |
| `chosen-green` | `#0B7A3B` | logo wordmark |
| `sky` | `#E9EFF9` | tlccrm.org tint |

Headlines use the logo's red-over-green split (`.split-ink` in `globals.css`), and photographs sit in arch-topped frames (`.arch`).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
