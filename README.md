# Art Gallery App (Next.js + React)

Interactive art gallery built as a group project during the **neue fische Web Development Bootcamp**.

## What it does

- Fetches artworks from a public API and displays them in a clean gallery UI
- **Spotlight page:** shows a randomly selected artwork
- **Gallery page:** lists all artworks with a detail view per piece
- **Favorites page:** lets users save/unsave artworks via a heart toggle
- **Detail page:** shows additional metadata and allows users to leave comments

## Tech highlights

- **Next.js + React** (multi-page app with dynamic routes)
- **Data fetching with SWR** (loading/error states)
- **Local persistence with localStorage** (favorites + comments)
- **Component-based UI** with reusable cards and navigation

## API

Artworks are loaded from:

```bash
https://example-apis.vercel.app/api/art
```

## Team project

This repository is a fork/continuation of a group project. I use it to document my contribution, learnings, and potential improvements.

![wireframes](./docs/wireframes.excalidraw.png)
