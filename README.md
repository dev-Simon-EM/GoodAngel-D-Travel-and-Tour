# GoodAngel D Travel and Tour

GoodAngel D Travel and Tour is a responsive, multi-page static website for a travel, tour, and study-abroad service business. It brings together company and service information, destination-specific visa guidance, programme descriptions, and inquiry paths.

## Purpose

The site provides a digital presentation for travel and education-related services, including:

- travel tours and destination information
- hotel and accommodation information
- visa guidance pages for several destinations
- study-abroad programme information
- company, services, and contact pages

## Implementation status and scope

This repository is a static front-end implemented with HTML, CSS, and vanilla JavaScript. Some account dialogs, booking/search interactions, dashboards, and inquiry controls are interface-level or placeholder experiences. There is no verified production authentication, booking engine, payment processing, database, or connected content-management system.

The destination and visa content is presented as website copy; users should check current official sources for travel and immigration rules.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons via CDN

Shared behavior is in `script.js`. Styles are divided among CSS files, including `front.css`, `travels.css`, `hotels.css`, `dashboard.css`, and `contries.css`.

## Pages

- `index.html` — homepage
- `about.html`, `services.html`, and `contact.html` — company information and contact paths
- `travel-tours.html` and `hotels.html` — tours and accommodation information
- `front.html`, `study-programs.html`, and programme-specific pages — study-abroad information
- `visa.html` and destination-specific pages — visa guidance
- `admin.html`, `dashboard.html`, and `user-dashboard.html` — dashboard-style interface pages

Some listed routes are unfinished placeholders (including `autralia-visa.html`,
`ba-program.html`, and `canada-visa.html`). The corresponding completed
destination or programme pages should be checked before treating every link as
ready for visitors.

## Interactions and data

The shared `script.js` provides client-side interface behavior such as
navigation, tabs, category/package filters, and modal interactions. These
controls run in the browser. The repository does not include a server,
database, API, payment processor, or verified booking workflow, so interface
forms and dashboards should not be used to submit sensitive information.

Visa and destination pages are informational website content, not legal or
immigration advice. Confirm current requirements with official government or
consular sources before making travel decisions.

## Run locally

From the repository directory, start a local static server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/>.

## Live site

<https://dev-simon-em.github.io/GoodAngel-D-Travel-and-Tour/>

## Notes

This project demonstrates multi-page front-end organization and business
website presentation. It should be described as a static website, not a
complete travel booking or management platform.
