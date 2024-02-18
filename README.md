# Devboards

A developer-focused project management application inspired by Trello. Track tasks, organize projects, and collaborate with your team.

## Try it out

Devboards has a live demo [here](https://devboards.vercel.app).

![Screenshot 2024-02-18 104945](https://github.com/sebastianpatrickk/devboards/assets/145474217/e356335c-782a-448b-971e-99c436ca1bbb)

## Introduction

Devboards is a web application inspired by Trello that is designed for developers. It allows you to:

- Create workspaces (organizations) for your team: Organize your work and share it with your colleagues.
- Add boards, lists, and cards: Just like in Trello, you can organize your tasks into boards, sheets, and cards.
- Track your team's activity with audit actions: See who did what and when.

## Inspiration

Devboards was created using [this tutorial](https://youtu.be/pRybm9lXW2c?si=_zkRXDfUQcooCCYa) in December, when I was learning Next.js 14. Now I'm trying to completely rework and improve the whole web application according to my own ideas.

## Tech Stack

- Framework: Next.js 14
- Styling: TailwindCSS
- UI Components: shadcn/ui
- Database: Serverless Postgres on neon.tech
- ORM: Prisma
- Data fetching on client components: TanStack Query
- Authentication: Clerk
- Images API: Unsplash API

## Compatibility

The web application is compatible with the latest versions of almost all browsers and is fully responsive. It also has the option to switch between dark and light modes, but some parts are not yet fully optimized for light mode.

## Features list

- [x] Authentication with Clerk
- [x] ORM using Prisma
- [x] Database on neon.tech
- [x] Validation with Zod
- [x] Adding and editing boards, lists, and tasks
- [x] Audit actios
- [x] Subscriptions using Stripe
- [x] Responsive styles
- [ ] Refactor some parts of the app from the tutorial.
- [ ] Rebuild drag & drop feature with dnd kit
- [ ] A better table for audit actions
- [ ] Dark and light mode optimization
- [ ] Refactor authentication middleware
- [ ] Build a better marketing page
