# Next.js Headless CMS Microsite

An interactive, story-style marketing microsite about **Revenue Growth Management (RGM)**, built with Next.js and powered by **ButterCMS** as a headless CMS. Each step of the story ("Introduction", "Revenue leakage", "Which lever wins the RGM jackpot?", "Conclusion", …) is its own page whose text, images, videos and PDFs are managed in ButterCMS, so the content can be edited without touching code.

## Features

- Content pulled from ButterCMS at build time with `getStaticProps`
- Preview mode — draft content can be shown by setting `PREVIEW=true` (the default)
- Story pages with a tiled menu, industry and capability headers/footers
- Pop-ups for extra information, embedded videos and PDF documents
- Carousels using `react-slick`
- Shared footer data in a Redux store
- Optional local HTTPS server (`server.js`)

## Tech stack

- Next.js 12, React 18
- ButterCMS JS SDK
- Redux Toolkit
- CSS Modules
- Font Awesome, react-slick

## Project structure

```
pages/        One page per story step, plus index and menus
components/   Headers, footers, tiled layout, info/video/PDF pop-ups
lib/api.js    ButterCMS client and page-fetching helpers
store/        Redux store (footer data)
styles/       CSS Modules per page/component
server.js     HTTPS dev server using certificates/localhost.*
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### ButterCMS

The ButterCMS API token is configured in [`lib/api.js`](lib/api.js). Use your own read token (ideally from an environment variable) and create matching pages in ButterCMS for each story slug.

Set `PREVIEW=false` to show only published content.

### Local HTTPS (optional)

Generate a self-signed certificate (the files are git-ignored):

```bash
cd certificates
openssl req -x509 -out localhost.crt -keyout localhost.key -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost'
cd ..
node server.js   # https://localhost:3000
```

### Production

```bash
npm run build
npm start
```
