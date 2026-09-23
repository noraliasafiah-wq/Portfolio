# Portfolio

## Structure

```
index.html      all the content
css/style.css   all the styling
js/main.js      the work-section filter buttons
images/         your photos
```

## Editing

Open `index.html` and search for `EDIT` — there are six marked spots:

1. Hero: name, role, intro line, social links
2. Who am I: bio and the three stat pills
3. Qualifications: education, certificates, tools
4. Experience: jobs
5. Work: project cards
6. Contact: email, phone, location

## Adding a project

Copy any `<article class="card">` block inside `#grid` and change `data-cat`
to one of: `fyp`, `video`, `web`, `event`, `photobooth`.
The filter buttons pick it up automatically — no JS changes needed.

## Adding a photo

Drop the file into `images/`, then replace the placeholder:

```html
<!-- before -->
<div class="ph">cover image</div>

<!-- after -->
<img src="images/project-one.jpg" alt="Project one cover">
```

Keep the surrounding `<div class="shot">` / `<div class="hero-photo">` — those
control the crop and the rounded corners.

## Viewing it locally

Double-click `index.html`, or from this folder run:

```
python3 -m http.server
```

then open http://localhost:8000

## Colours

All colours live at the top of `css/style.css` as variables, so changing the
wine red in one place changes it everywhere.
