# GoodAngel D Travel and Tour

A responsive, multi-page website for GoodAngel D Travel & Tour Ltd. The site brings together travel services, tours, hotel information, study-abroad programmes, visa guidance, and contact paths.

## Live Website

<https://dev-simon-em.github.io/GoodAngel-D-Travel-and-Tour/>

## Pages

- `index.html` — homepage with travel and hotel search forms, service links, and account dialogs.
- `about.html`, `services.html`, and `contact.html` — company information, service descriptions, and contact form.
- `travel-tours.html` and `hotels.html` — tour packages and accommodation information.
- `front.html` and `study-programs.html` — study-abroad landing and programme overview.
- `ba-program.html`, `mba-program.html`, and `msc-program.html` — undergraduate, MBA, and MSc programme information.
- `visa.html`, `uk-visa.html`, `usa-visa.html`, `canada-visa.html`, and `australia-visa.html` — visa guidance by service and destination.
- `admin.html`, `dashboard.html`, and `user-dashboard.html` — dashboard interface pages.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome icons via CDN

Shared front-end behavior is in `script.js`; styles are split across `front.css`, `travels.css`, `hotels.css`, `dashboard.css`, and `contries.css`.

## Important Scope Note

This repository contains a static front-end. The login and registration dialogs and the booking search currently show placeholder responses; there is no production authentication, booking engine, or server-side form processing in this codebase.

## Run Locally

Serve this directory with a local static web server and open `index.html`. For example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.