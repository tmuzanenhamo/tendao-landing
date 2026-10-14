# tendao-landing

The public landing page for Tendao, school management for Zimbabwean primary
and secondary schools. Next.js 15 (App Router), Tailwind CSS 3 and TypeScript.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

Before pushing:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

## Before going live

`src/site.config.ts` holds the WhatsApp number and email behind every
"Book a walkthrough" button. **They are placeholders** and must be replaced
with real contact details.

## Where things are

| Path                        | What                                                          |
| --------------------------- | ------------------------------------------------------------- |
| `src/app/page.tsx`          | The page, section by section                                  |
| `src/components/`           | One component per section                                     |
| `src/components/fragments/` | Pieces of the real app's interface, drawn with its own styles |
| `src/content/pupils.tsx`    | The line-up: each pupil and what Tendao keeps for them        |
| `public/people/`            | Cut-out photos of pupils, staff and parents                   |
| `public/hero-classroom.jpg` | The hero photograph                                           |

## Images

The photos are AI-generated: no real pupils, staff or schools appear, and
the uniforms are made up. They came from `generate_pupils.py` and the hero
prompt in the separate `mannequin-generator` project. Backgrounds were
removed locally.

## Copy

Every claim on the page describes something the Tendao app does today. Before
adding a feature claim, check it exists on `main` of `tendao-lms`.
