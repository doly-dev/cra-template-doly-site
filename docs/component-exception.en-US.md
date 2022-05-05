---
title: Exception
order: 25
group:
  title: Built-in components
  order: 2
nav:
  title: Documents
  path: /docs
  order: 1
---

# Exception - the exception

> Common ones are `304` `404` `500`

The abnormal page is used to give feedback on the specific abnormal state of the page. Usually, it contains an explanation of the error state and provides suggestions or actions to the user to avoid the user feeling lost and confused.

## API

| parameter | illustrate                | type          | Defaults |
| --------- | ------------------------- | ------------- | -------- |
| icon      | picture                   | `ReactNode`   | -        |
| title     | title                     | `ReactNode`   | -        |
| desc      | supplementary description | `ReactNode`   | -        |
| extra     | extra information         | `ReactNode`   | -        |
| actions   | operate                   | `ReactNode[]` | -        |
