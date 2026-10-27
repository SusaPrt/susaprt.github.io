# Susanna Peretti — personal website

Static HTML, CSS and JavaScript. No build step or package installation required.

## Local preview

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000 in your browser. Stop the server with `Ctrl+C`.

## Editing

- `index.html`: biography, projects, experience, publications, education and links.
- `css/style.css`: colours, typography and responsive layouts.
- `js/main.js`: current year and active navigation section.
- `img/pic2.jpeg`: main portrait; `img/pic.JPG` appears in the introduction.

Fonts load from Google Fonts, with system fallbacks when offline. The page and navigation work without JavaScript. Legacy assets in `lib/` and unused skill icons are retained but are no longer loaded.

Local preview does not publish changes. GitHub Pages updates only after you explicitly commit and push the source to the configured publishing branch.

The CV PDF is a local content reference only. It is not linked from the page and is excluded from Git via `.gitignore`.
