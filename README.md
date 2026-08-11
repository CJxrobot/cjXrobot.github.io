# Yu Jen Chen — portfolio + daily log (Jekyll)

Rebuilt from your existing single-page portfolio (same look — Tailwind,
Inter, zinc/white, click-to-expand images) as a Jekyll site so you get
a real "Work" section backed by individual project pages, plus a "Log"
section for daily learning entries — without losing anything from the
original page.

## What's here

- `_layouts/` — page templates (home, project detail, log entry, shell)
- `_projects/` — your 8 projects, ported over exactly as they were,
  each now also has its own page at `/work/<slug>/`
- `_posts/` — log entries, one per day, filename `YYYY-MM-DD-title.md`
- `assets/css/extra.css` — the lightbox/modal styles from your original
  page (everything else is Tailwind CDN, same as before)
- `index.md` — homepage body (your profile bio)
- `log.md` — full log listing page

## Deploying

This matches the repo your original images already point to
(`CJxrobot/cjXrobot.github.io`), so it should be safe to push straight
into that repo, replacing the old single `index.html`:

1. Unzip and copy these files into your `cjXrobot.github.io` repo
   (replace the old `index.html` — Jekyll builds `index.md` into
   `index.html` automatically).
2. Add your real email in `about`/contact — currently
   `your.email@example.com` is a placeholder, same as it was in your
   original file. Set it via `_config.yml` (`email:` — not currently
   set) or edit the mailto link directly in `_layouts/home.html`.
3. Commit and push to `main`. GitHub Pages rebuilds automatically —
   check the **Actions** tab if it doesn't update within a minute or two.

## Adding a project

Add a file to `_projects/`:

```yaml
---
order: 9                 # controls display order on the homepage
title: My New Robot
tags: [Robotics, Control]
summary: One sentence, shown under the title on the homepage.
image: https://your-image-url
repo: https://github.com/CJxrobot/your-repo   # optional
---

Full write-up in Markdown — as much detail as you want. Only the
`summary` field shows on the homepage; this body only shows on the
project's own page.
```

## Adding a log entry

Add a file to `_posts/`, filename **must** start with the date:

```
_posts/2026-08-12-motor-controller-tuning.md
```

```yaml
---
title: "Tuning the FOC motor controller"
tags: [robotics, embedded]
---

What you looked at, what you learned, what's next.
```

## Local preview (optional)

Needs Ruby installed.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.
