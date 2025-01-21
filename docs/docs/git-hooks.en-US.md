---
order: 3
group:
  title: Documents
  order: 1
toc: content
---

# Git hooks

Git hook management is provided by [husky](https://www.npmjs.com/package/husky) .

## Canonical code format

Every time you submit something, will run for the temporary file `eslint`, `stylelint`, `prettiercommand`, thereby preventing the code you submit malformed.

## Standard submission of information

The git submission information is regulated by [@commitlint/cli](https://github.com/conventional-changelog/commitlint) and [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) . When you use git to submit information that does not meet the specifications, there will be an error message.

- git submission information format

```bash
type(scope?): subject
```

- Demonstrate correctly

```bash
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
```

- **type**

| 值 | 说明 |
| --- | --- |
| build | Updates affecting the build system or external dependencies (example range: gulp, broccoli, npm) |
| ci | Changes to CI configuration files and scripts (e.g. scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore | Other changes that do not modify src or test files |
| docs | Only change the document |
| feat | new function |
| fix | bug fix |
| perf | Code changes to improve performance |
| refactor | Code changes that neither fix bugs nor add new features |
| revert | Revert previous commit |
| style | Changes that do not affect the meaning of the code (white-space, format, missing semicolon, etc.) |
| test | Add missing tests or correct existing tests |

Recommended `yarn commit` or `npx cz` through interactive command fill in the information submitted specifications.
