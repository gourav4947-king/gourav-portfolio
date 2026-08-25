# Gourav Gour — Portfolio

A responsive personal portfolio built with HTML, CSS, JavaScript and Firebase Firestore, ready for Vercel.

## 1. Run locally

Because this project uses ES modules, run it through a local server instead of opening `index.html` directly.

Examples:

- VS Code + Live Server
- `python -m http.server 5500`

Then open `http://localhost:5500`.

## 2. Configure Firebase

1. Open Firebase Console.
2. Create a project.
3. Add a Web App.
4. Enable Firestore Database.
5. Copy the Web App configuration.
6. Paste it into `firebase.js`.
7. Publish the rules from `firestore.rules`.

## 3. Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project.
3. Open Vercel and import the GitHub repository.
4. Framework Preset: Other / static.
5. Build Command: leave empty.
6. Output Directory: `.`
7. Deploy.

## 4. Connect a custom domain

In Vercel:
Project → Settings → Domains → Add Domain.

Buy a domain from a registrar such as Namecheap, GoDaddy, Hostinger, etc., and follow the DNS records Vercel gives you.

## 5. Google indexing

After deployment:

1. Open Google Search Console.
2. Add your Vercel/custom-domain property.
3. Verify ownership.
4. Submit `/sitemap.xml`.
5. Use URL Inspection → Request Indexing for the home page.

Update these values first:
- `index.html` canonical URL
- `index.html` Open Graph URLs
- `robots.txt`
- `sitemap.xml`

Replace `YOUR-DOMAIN.vercel.app` with your real Vercel URL.

## 6. Personal details

The portfolio uses the details from the supplied resume. Before going public, verify:
- phone number
- email
- GitHub
- LinkedIn
- experience dates
- project descriptions

For extra privacy, the public portfolio intentionally does not display date of birth.

## Important

Do not put Firebase service-account/private credentials in frontend files.
