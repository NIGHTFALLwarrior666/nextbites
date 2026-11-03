# NextBites Part 1: Create the required GitHub pull request

Your Kalvium submission must be a **public repository** and an **open PR** from the `home-page` branch into `main`. A ZIP file alone is not sufficient.

## Recommended: one manual GitHub step, then let ChatGPT finish

1. Go to https://github.com/new in a browser signed in as your desired GitHub user.
2. Repository name: `nextbites`. Visibility: **Public**. Check **Add a README file**. Click **Create repository**.
3. Send the repository link back to this ChatGPT conversation. If the authorized GitHub connector is still connected, the assistant can add the minimal Next.js scaffold to `main`, create the `home-page` branch, commit the final app source, open the PR, and provide the submission URL.
4. Check the PR is open and the base branch is `main`; paste the actual PR URL into the Kalvium submission field.

The assistant cannot currently create a new repository using the connected GitHub actions; this single repo-creation action must be done on the GitHub website.

## Manual Git alternative (if needed)

If you'd rather work manually, use GitHub Desktop or Git after installing Node.js and Git. To meet the expected commit history, make the **scaffold** commit on `main` first (with a basic working `app/layout.tsx` and `app/page.tsx`), then use a feature branch for the final recipe UI.

In the project folder, after creating an **empty** public GitHub repo (no README in this alternate method):

```powershell
# Use an empty new folder for scaffold; install Next.js from the official template.
npx create-next-app@latest nextbites --ts --app --use-npm --no-tailwind --no-src-dir
cd nextbites
git init -b main
git add .
git commit -m "chore: scaffold NextBites with Next.js and TypeScript"
git remote add origin https://github.com/YOUR_USERNAME/nextbites.git
git push -u origin main

# Next, create the feature branch; copy the prepared final app files
# from the ZIP into the matching app/ paths of this folder.
git switch -c home-page
# Copy: app/layout.tsx, app/page.tsx, app/globals.css,
# app/components/NavBar.tsx, app/components/RecipeCard.tsx,
# app/data/recipes.ts, and app/icon.svg into this folder.
git add .
git commit -m "feat: build responsive recipe grid and typed RecipeCard"
git push -u origin home-page
```

Finally open `https://github.com/YOUR_USERNAME/nextbites/compare/main...home-page` and create an **open PR** with:

> Built the NextBites Part 1 responsive homepage with a shared navigation bar, typed reusable RecipeCard, and eight recipes rendered using `.map()` with stable keys. Responsive layout adjusts across screen sizes.

**Note:** `create-next-app` can create its own initial Git repository. If one already exists, do not run `git init` again; simply commit the existing scaffold on `main` and continue. Install dependencies and verify locally with `npm run dev` and `npm run build`.
