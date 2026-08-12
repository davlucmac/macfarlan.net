# macfarlan.net

Source for [macfarlan.net](https://www.macfarlan.net), a lightweight personal landing page focused on product, operations, and applied AI in emerging health markets.

The site is intentionally dependency-free: it is plain HTML and CSS, requires no build step, and is served by Vercel.

## Technology

- Semantic HTML5
- Modern CSS with responsive styles
- [Geist](https://fonts.google.com/specimen/Geist), loaded from Google Fonts
- Vercel for hosting, TLS, CDN delivery, and deployments
- GitHub for source control

## Repository layout

```text
.
├── index.html   # Page structure, content, metadata, and links
├── styles.css   # Design tokens, layout, typography, and responsive rules
└── README.md    # Project and operations documentation
```

There are currently no application dependencies, environment variables, generated assets, server-side services, or persistent data stores.

## Local development

Clone the repository and start any static file server from its root:

```bash
git clone https://github.com/davlucmac/macfarlan.net.git
cd macfarlan.net
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Opening `index.html` directly also works, but a local server more closely matches production URL and asset behavior.

## Making changes

1. Create a short-lived branch from `main`.
2. Edit `index.html` and/or `styles.css`.
3. Test at desktop and mobile widths.
4. Confirm the contact and LinkedIn links work.
5. Open a pull request and inspect its Vercel preview deployment.
6. Merge the pull request into `main` to release it to production.

Because the project has no automated test suite, perform these checks before merging:

- The page loads without browser console or network errors.
- The layout remains usable at narrow and wide viewport sizes.
- Keyboard focus, link labels, contrast, and heading order remain accessible.
- `index.html` and `styles.css` return successful HTTP responses.
- No secrets, private data, or machine-specific files are committed.

## Deployment and DevOps

### Current production architecture

```text
Developer -> GitHub repository -> Vercel deployment -> Vercel CDN/TLS -> www.macfarlan.net
                                                                        ^
macfarlan.net ----------------------------------------------------------|
                         HTTP 307 redirect to www
```

As of August 11, 2026, production responses identify Vercel as the host. `https://macfarlan.net` redirects to `https://www.macfarlan.net`, which serves the static `index.html` document.

No `.github/workflows`, `vercel.json`, package manifest, or infrastructure-as-code file is committed. Deployment is therefore platform-managed rather than defined by a repository workflow. The precise Git integration, domain, deployment-protection, and retention settings must be verified in the Vercel dashboard.

### Delivery pipeline

With the Vercel Git integration configured, the expected pipeline is:

| Event | Pipeline behavior | Result |
| --- | --- | --- |
| Commit pushed to a feature branch or pull request | Vercel uploads the repository's static files and creates an isolated deployment | Preview URL for review |
| Pull request updated | Vercel creates a new immutable preview deployment | Updated review environment |
| Pull request merged or commit pushed to `main` | Vercel creates and promotes a production deployment | Updated `www.macfarlan.net` |
| Production deployment fails | Vercel keeps the last successful production deployment active | No partial release |

There is no compile or install phase. Vercel should be configured to serve the repository root as a static site:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Other` / no framework |
| Root directory | Repository root |
| Install command | None |
| Build command | None |
| Output directory | Repository root/default static output |

Treat these values as the desired baseline and compare them with the Vercel project settings before changing the production configuration.

### Domains and TLS

- Canonical production URL: `https://www.macfarlan.net`
- Apex URL: `https://macfarlan.net`
- Redirect: apex to `www`
- TLS and edge delivery: managed by Vercel
- DNS provider and DNS records: not defined in this repository; manage and verify them with the current DNS provider and Vercel dashboard

Avoid changing DNS and Vercel domain configuration in the same release as unrelated page changes. DNS changes can take time to propagate and should have a documented rollback value before they are applied.

### Release verification

After a production deployment:

1. Open `https://www.macfarlan.net` in a private browser window.
2. Verify the expected copy, layout, styles, and outbound links.
3. Confirm `https://macfarlan.net` redirects to the canonical `www` URL.
4. Check the deployment status and logs in Vercel.
5. Verify there are no unexpected browser console or network errors.

Basic command-line smoke checks:

```bash
curl --fail --silent --show-error --head https://www.macfarlan.net
curl --fail --silent --show-error --head https://macfarlan.net
```

The first request should return a successful response. The second should return a redirect whose `Location` points to the canonical `www` host.

### Rollback

Deployments are immutable in Vercel. If a release is unhealthy:

1. Use the Vercel dashboard to promote the last known-good deployment immediately.
2. Revert the problematic Git commit on `main` so source control matches production intent.
3. Confirm the new deployment and both public URLs.
4. Record the cause if the failure could recur.

Promoting an older deployment is the fastest recovery action; reverting in Git prevents a later deployment from reintroducing the problem.

### Operations and security

- Vercel deployment logs and HTTP status checks are the primary operational signals.
- The site has no runtime secrets. If integrations are added, store secrets in Vercel environment variables—never in Git.
- Keep branch protection enabled on `main` and require pull-request review where practical.
- Restrict production deployment and domain-management permissions to maintainers.
- Review external resources, currently Google Fonts, for availability and privacy implications.
- Add uptime monitoring if the site becomes business-critical.
- Add automated HTML, link, accessibility, and performance checks when the site grows beyond the current single page.

## Troubleshooting

### The page works locally but not in production

Check that filenames and paths match their exact case, the Vercel deployment used the expected commit, and the production domain points to the correct Vercel project.

### Styles are missing

Confirm `styles.css` exists at the repository root and `index.html` still references `./styles.css`. Inspect the browser network panel for the stylesheet response.

### A release did not deploy

Confirm the commit reached GitHub, the Vercel Git integration is connected to `davlucmac/macfarlan.net`, and `main` remains the configured production branch. Then review the deployment event and logs in Vercel.

### The custom domain is unavailable

Check the domain status in Vercel, then verify the DNS records with the DNS provider. Restore the last known-good records if the outage followed a DNS change.

## Ownership

Repository: [github.com/davlucmac/macfarlan.net](https://github.com/davlucmac/macfarlan.net)

Operational access to GitHub, Vercel, the domain registrar, and the DNS provider should be maintained independently of this repository and protected with multi-factor authentication.
