
# Naomi Hirako — Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Run locally

1. Open this folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and choose **Open with Live Server**.

You can also open `index.html` directly in a browser. Live Server is useful while editing because it refreshes the page when files change.

## Publish with GitHub Pages

This is a static site and needs no build command. The repository currently stores the website inside a `portfolio/` folder. GitHub Actions workflow files must be at the repository root under `.github/workflows/`, not inside that website folder.

1. Copy this project's `.github/workflows/deploy-pages.yml` to the repository root as `.github/workflows/deploy-pages.yml`. In the repository layout, the result should be:

   ```text
   .github/workflows/deploy-pages.yml
   portfolio/index.html
   portfolio/style.css
   portfolio/script.js
   portfolio/assets/
   ```

   The workflow is configured to publish `portfolio/`.
2. Commit and push that workflow file to the `main` branch using an account authorized for `naomhirako26/hirakoportfolio`. The local Git SSH/HTTPS connection must be authenticated; never put a GitHub password or token in the repository.
3. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. Open **Actions** and wait for **Deploy portfolio to GitHub Pages** to finish. GitHub displays the website URL under **Settings → Pages** and in the completed deployment.
5. After future edits, commit and push them to `main`; the workflow will redeploy automatically.

The repository is currently private. GitHub Pages publishing for private repositories requires an account/organization plan that supports it. If that is not available, either change the repository visibility to public (anyone can see its code and published site) or use another static hosting service that supports private source repositories.

The workflow file in this local project is nested because this project folder corresponds to the repository's `portfolio/` subfolder. It must be copied to the repository-root `.github/workflows/` location above before GitHub will recognize it.

## Personalize the portfolio

### Profile photo

The hero section uses `assets/profile.png`. Replace that file with another photo, or update its image `src` in `index.html` to point to a new image. Keep the `alt` text descriptive.

### Biztrack screenshot

The project card uses `assets/biztrack-placeholder.svg`. Replace it with a real screenshot and update the project image `src` in `index.html` (for example, `assets/biztrack.png`). Do not use a screenshot that contains private information.

### Colors and type

The main colors are CSS custom properties at the top of `style.css` under `:root`. Change `--accent`, `--paper`, `--ink`, or `--tint` to adjust the palette. The current theme uses maroon accents. The fonts load from Google Fonts; the page has generic sans-serif fallbacks if those fonts are unavailable.

### Projects and personal details

Edit the text and links directly in the clearly named sections of `index.html`. Duplicate the `<article class="project-card">` structure to add a project, then update its title, description, technology tags, image, and any real demo/source URLs. The Biztrack buttons are intentionally disabled until Naomi provides actual project links.

### Contact form

The form validates its fields and opens a prefilled draft to `hirakonaomi26@gmail.com` in the visitor’s default email application. It does not send or store submissions. To collect messages without requiring the visitor’s email app, connect the form to a trusted form service or implement a server endpoint (for example, a PHP endpoint with server-side validation and mail delivery), then replace the mailto logic in `script.js`. Add appropriate spam protection and never place email-service credentials in browser JavaScript.

## Project files

- `index.html` — semantic page content and sections
- `style.css` — responsive layout, colors, and component styles
- `script.js` — mobile navigation and email-draft form behavior
- `assets/` — replaceable image placeholders
