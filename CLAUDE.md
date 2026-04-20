# VisaRapid — Claude Instructions

## Sitemap maintenance

Whenever a new blog is added (i.e., a new folder under `visa-rapid/src/app/blogs/`), its URL **must** be added to `visa-rapid/public/sitemap.xml` in the same commit or PR.

- URL format: `https://www.visarapid.com/blogs/<slug>`
- Set `<lastmod>` to the date the blog was created (use git commit date if unsure)
- Use `<changefreq>monthly</changefreq>` and `<priority>0.7</priority>` for all blog entries

Same rule applies to any new top-level pages added under `visa-rapid/src/app/` — add them to the sitemap with an appropriate priority.
