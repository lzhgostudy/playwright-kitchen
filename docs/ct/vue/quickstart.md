# Vue Quickstart

Welcome! This tutorial will walk you through creating a Vue App and using Playwright Component Testing to test it. We assume you are already familiar with Vue, but if this is your first time with Playwright, that's okay; we'll walk you though all you need to know.

## Getting Started(This tutorial for Vue3)

To start off, we are going to create a new Vue app.

We will use Vite to create the app as it's quick to get up and running. If you use any of other supported frameworks in your project, the setup is the same.

To create a Vue project with Vite, run the following from your command prompt:

::: code-group
```bash [npm]
npm create vite@latest playwright-tutorial-vue -- --template vue
```

```bash [yarn]
yarn create vite playwright-tutorial-vue --template vue
```

```bash [pnpm]
pnpm create vite playwright-tutorial-vue --template vue
```
:::

Go into the directory and run `install` command:

::: code-group
```bash [npm]
cd playwright-tutorial-vue && npm install
```

```bash [yarn]
cd playwright-tutorial-vue && yarn
```

```bash [pnpm]
cd playwright-tutorial-vue && pnpm install
```
:::


## Install Playwright

Next, let's add Playwright to the app.

::: code-group
```bash [npm]
npm init playwright@latest
```

```bash [yarn]
yarn create playwright
```

```bash [pnpm]
pnpm dlx create-playwright
```
:::

Select the following to get started:

- Choose between TypeScript or JavaScript(default is TypeScript)
- Name of your Tests folder(default tests or e2e if you already have a tests folder in your project)
- Add a Github Actions workflow to easily run tests on CI(default false)
- Install Playwright browsers(default is true)

### Install other devDependencies:

`@vue/compiler-dom`, It's necessary for Vue Components test.

::: code-group
```bash [npm]
npm install @vue/compiler-dom -D
```

```bash [yarn]
yarn add @vue/compiler-dom -D
```

```bash [pnpm]
pnpm add @vue/compiler-dom -D
```
:::

## Install Playwright Test for Components for your respective framework

::: code-group
```bash [npm]
npm init playwright@latest -- --ct
```

```bash [yarn]
yarn create playwright --ct
```

```bash [pnpm]
pnpm dlx create-playwright --ct
```
:::

This step craetes serval files in your workspace:

`playwright/index.html`

`playwright/index.ts`

You can include stylesheets, apply theme and inject code into the page where component is mounted using this script. It can be either a `.js` or `.ts` file. Now, we can add this:

::: code-group
```ts [playwright/index.ts]
import "../src/style.css"
```
:::

If using TypeScript and Vue make sure to add a `vue.d.ts` file to your project:

```ts
declare module "*.vue";
```

## Create a test file `tests/App.spec.ts`

```ts
import { test, expect } from "@playwright/experimental-ct-vue"
import App from "../src/App.vue"

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(App);
  await expect(component).toContainText("Vite + Vue")
});
```

## Run the tests

You can run tests using the [VS Code extension](https://playwright.dev/docs/getting-started-vscode) or the command line:

::: code-group
```bash [npm]
npm run test-ct
```

```bash [yarn]
yarn test-ct
```

```bash [pnpm]
pnpm test-ct
```
:::

## Further reading: configure reporting, browsers, tracing

Refer to [Playwright config](https://playwright.dev/docs/test-configuration) for configuring your project.

