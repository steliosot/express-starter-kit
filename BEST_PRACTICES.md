# Best practices for PRs (Node.js + Express)

Short, practical guidance for students. Use this as a watchflow checklist before opening a PR.

1) Avoid hard‑coded config. Use environment variables for ports, secrets and URLs.

```js
// app.js
const PORT = process.env.PORT || 3000;
app.listen(PORT);
```

Provide a `.env.example` and never commit `.env`.

2. Useful npm scripts. Include: `start`, `dev`, `lint`, `test`. Keep scripts simple and documented in the README.
3. Keep PRs small & focused with less 400 lines of code per PR. One logical change per PR (e.g., “Add /users routes”). Small diffs lead to faster, safer reviews.

4) Use Conventional Commits

Examples:  

- `feat(api): add GET /users with pagination`  
- `fix(auth): handle missing token`  
- This improves history, changelogs, and automation.

5. Correct HTTP verbs & status codes

Use `201` for creates, `204` for deletes, `400/422` for invalid input, `404` for missing, `500` for server errors.

6. Security basics

- Do not commit secrets; use `.env`  

7. Healthy dependencies

Explain new dependencies in the PR description. Keep the lockfile committed and up to date.

8. Clear project structure

Separate routes, controllers, services, middlewares, and utils. Keep `app.js` thin.

9. Review‑ready PR description

Include: what/why, screenshots or curl examples, risks, migration steps, and a test plan. Use checklists (docs updated? tests added?).

10. Consistent naming convention

Use lowercase with hyphens for folders and filenames, and camelCase for JS variables and functions.

Examples:
- Use lowercase + hyphens for all filenames and folders → `user-controller.js`, `error-handler.js`
- Use PascalCase for classes and models → `User.js`, `Product.js`
- Use camelCase for variables and functions → `getUserData()`, `authToken`
- Use UPPER_SNAKE_CASE for constants → `MAX_RETRY_COUNT`, `API_BASE_URL`
- Match file and export names so imports stay clean → `import { User } from './models/User.js'`
