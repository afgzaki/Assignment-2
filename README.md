# Assignment-2# INFR3120 Assignment 2 - Express Portfolio Site

**Student:** Zaki Afghanzada
**Course:** INFR3120 - Web and Scripting Programming (Fall 2026)
**Live site:** https://YOUR-RENDER-LINK.onrender.com
**Repository:** https://github.com/afgzaki/Assignment-2

## How it was built
- Generated with the Express Generator: `npx express-generator --view=ejs .`
- Node.js and Express with EJS views and partials (`views/partials/header.ejs`, `main_nav.ejs`, `footer.ejs`).
- Routes for every page are in `routes/index.js` using `router.get(...)` and `res.render(...)`: `/`, `/home`, `/aboutus`, `/projects`, `/contactus`.
- Assets are in the `public` folder: `public/Content` (CSS), `public/Script` (JavaScript), `public/images` and `public/video`.
- Bootstrap 5 and Font Awesome are installed with npm and served from `node_modules`.
- The footer has links to my GitHub and LinkedIn pages.
- Deployed on Render.

## Code sources and AI disclosure
- Project structure, partials, routes and the `Script/app.js` start function follow the INFR3120 lecture `WebProject` and `CRUD Part-1` examples.
- Bootstrap (https://getbootstrap.com/) and Font Awesome (https://fontawesome.com/) are used as installed frameworks. The responsive navbar toggler follows the Bootstrap navbar documentation.
- Deployment follows Render's Node/Express documentation (https://render.com/docs/deploy-node-express-app).
- No code was copied from other websites. The page text is my own content from Assignment 1; no Assignment 1 HTML was reused.
- I had AI assist me to help write the EJS views and layout markup, based on the lecture code, and to troubleshoot setup and deployment problems. I reviewed all of the code myself.