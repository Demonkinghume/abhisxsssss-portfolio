# SWOPNIL — Video Editor Portfolio (React + Vite + Tailwind)

A pixel-faithful, fully editable clone of the reference portfolio
(<https://swopnilprotfolio1.netlify.app/>).

Everything you can read on the website lives in **one single file**:

```
src/data/portfolio.js
```

You never need to open any other file to change your content.

---

## 1. How to install

You need [Node.js](https://nodejs.org) (version 18 or newer).

```bash
npm install
```

## 2. How to run (development)

```bash
npm run dev
```

Then open the address printed in the terminal (usually <http://localhost:5173>).

To create the production build (the deployable `dist/` folder):

```bash
npm run build
```

Deploy the `dist` folder to **Netlify** or **Vercel** (or connect the repo and
use build command `npm run build`, publish directory `dist`).

---

## 3. Where do I change things?

Open **`src/data/portfolio.js`** and look for the numbered comment blocks.

| I want to change…            | Look for the block                   | Field(s)                                   |
| ---------------------------- | ------------------------------------ | ------------------------------------------ |
| **My name / logo**           | `2. PERSONAL INFORMATION`            | `personal.name`, `personal.logo`            |
| **My email**                 | `13. CONTACT`                        | `contact.email` (also `personal.email`)     |
| **My phone**                 | `13. CONTACT`                        | `contact.phone`                             |
| **My location**              | `13. CONTACT`                        | `contact.location`                          |
| **Profile photo**            | `2. PERSONAL INFORMATION`            | `personal.profileImage`                     |
| **Hero text / big heading**  | `4. HERO`                            | `hero.headingLines`, `hero.description`     |
| **About / big number strip** | `5. ABOUT`                           | `about.stats`                               |
| **Skills**                   | `6. SKILLS`                          | `skills.items`                              |
| **Services**                 | `7. SERVICES`                        | `services.items`                            |
| **Experience**               | `8. EXPERIENCE`                      | `experience[]`                              |
| **Education**                | `9. EDUCATION`                       | `education[]`                               |
| **Projects / My Work**       | `10. PORTFOLIO / PROJECTS`           | `projects[]`                                |
| **Project videos**           | `10. PORTFOLIO / PROJECTS`           | `projects[].media` or `projects[].videoUrl` |
| **Clients ("Worked With")**  | `11. CLIENTS`                        | `clients[]`                                 |
| **Testimonials**             | `12. TESTIMONIALS`                   | `testimonials[]`                            |
| **Social links**             | `14. SOCIAL LINKS`                   | `socialLinks`                               |
| **Resume / CV**              | `2. PERSONAL INFORMATION`            | `personal.resume`                           |
| **Footer text**              | `15. FOOTER`                         | `footer`                                    |
| **Browser tab title / SEO**  | `1. SEO`                             | `seo`                                       |
| **Menu items**               | `3. NAVIGATION`                      | `nav.links`                                 |

---

## 4. Images, videos and the CV

1. Put your file inside the folder **`public/assets/`**
2. Write the path in `src/data/portfolio.js` starting with `/assets/`

```
public/assets/profile.png    ->   "/assets/profile.png"
public/assets/project-1.jpg  ->   "/assets/project-1.jpg"
public/assets/project-1.mp4  ->   "/assets/project-1.mp4"
public/assets/resume.pdf     ->   "/assets/resume.pdf"
```

You can also paste a full internet link (`https://…`) instead of a local file.

### Images **or** videos in projects

Each project has a `media` field. The website detects the file type
automatically:

| Extension                         | Result                                       |
| --------------------------------- | -------------------------------------------- |
| `.jpg .jpeg .png .webp .gif`      | shown as an image                             |
| `.mp4 .webm .ogg .mov`            | shown as a video (plays when you hover)       |

If you also fill `videoUrl` (a YouTube / Vimeo **embed** link) the project popup
plays that video, e.g. `https://www.youtube.com/embed/VIDEO_ID`.

### Adding a project

Copy one block inside `projects: [ … ]` and change the values:

```js
{
  title: "My New Edit",
  category: "Shorts",              // creates the filter button automatically
  description: "Short description of the project.",
  media: "/assets/project-8.mp4",  // image OR video
  videoUrl: "",                    // optional YouTube embed link
  technologies: ["Premiere Pro", "After Effects"],
  liveUrl: "",
  githubUrl: "",
}
```

Deleting a project = deleting its block. Reordering = moving the block.
The same works for `skills.items`, `clients`, `testimonials`, `experience`,
`education` and `services.items`.

---

## 5. Contact form

By default the form opens the visitor's own email app with the message
pre-filled — no server and **no API keys** required.

To use a real email service, paste your endpoint in
`contact.form.endpoint`, for example:

```js
endpoint: "https://formspree.io/f/xxxxxxxx",
```

Works with Formspree, Getform, Basin, or any service that accepts a `POST`
of `FormData`. Never place private API keys in this file — it is public.

---

## 6. Hidden admin mode (optional)

Add `#admin` to the address, e.g. `http://localhost:5173/#admin`.

You get a simple editor with the whole configuration. Press **Save & Preview**
to see your changes immediately (stored in your browser only), or
**Download JSON** and paste it into `src/data/portfolio.js` to make it
permanent for every visitor.

---

## 7. Project structure

```
public/
  assets/            <- your images, videos, resume.pdf, favicon
src/
  components/        <- Navbar, Hero, Stats, Skills, Portfolio, Clients,
                        Testimonials, Contact, Footer, BookNowModal, …
  data/
    portfolio.js     <- ⭐ THE ONLY FILE YOU NEED TO EDIT
    override.js      <- support for the hidden admin mode
  App.tsx
  main.tsx
  index.css          <- theme colours, fonts, glass/gradient helpers
index.html
```

### Note about the section list

The reference website shows these sections, in this order:

**Hero → Achievements (About) → Skills (“My Arsenal”) → Portfolio
(“Featured Work”) → Clients (“Worked With”) → Testimonials → Contact →
Footer**

There is no separate visual “Services / Experience / Education” block in the
reference design, so none was invented. Their data still lives in
`portfolio.js` (`services`, `experience`, `education`) so you can use it any
time. The navbar “Services” link points at the “Worked With” section — change
`nav.links` if you prefer another target.
