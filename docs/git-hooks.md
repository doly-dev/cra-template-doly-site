---
title: Git hooks
order: 3
group:
  title: 文档
  order: 1
nav:
  title: 文档
  path: /docs
  order: 1
---

# Git hooks

Git hooks 管理由 [yorkie](https://www.npmjs.com/package/yorkie) 和 [lint-staged](https://www.npmjs.com/package/lint-staged) 提供。

## 规范代码格式

在你每次提交某些内容时，都会对暂存文件运行 `eslint`、`stylelint`、`prettier` 命令，从而防止您提交格式错误的代码。

## 规范提交信息

由 [@commitlint/cli](https://github.com/conventional-changelog/commitlint) 和 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) 规范 git 提交信息。在你使用 git 提交信息不符合规范时，会有错误提示。

- git 提交信息格式

```bash
type(scope?): subject
```

- 正确示范

```bash
chore: run tests on travis ci
fix(server): send cors headers
feat(blog): add comment section
```

- **type**

| 值       | 说明                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| build    | 影响构建系统或外部依赖项的更新（示例范围：gulp, broccoli, npm）                  |
| ci       | 对 CI 配置文件和脚本的更改(例如 scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | 其他不修改 src 或测试文件的更改                                                  |
| docs     | 只改变文档                                                                       |
| feat     | 新功能                                                                           |
| fix      | bug 修复                                                                         |
| perf     | 改进性能的代码更改                                                               |
| refactor | 既不修复 bug 也不添加新功能的代码更改                                            |
| revert   | 还原以前的提交                                                                   |
| style    | 不影响代码含义的更改(white-space、格式、缺少分号等)                              |
| test     | 添加缺失的测试或纠正现有的测试                                                   |

推荐使用 `yarn commit` 或 `npx cz` ，通过交互式命令填写规范的提交信息。
