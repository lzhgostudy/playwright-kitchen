# Vue Examples

I will include [Element-plus](https://element-plus.org/en-US/guide/installation.html) Component Library as example to test.

::: code-group
```bash [npm]
npm install element-plus
```

```bash [yarn]
yarn add element-plus
```

```bash [pnpm]
pnpm add element-plus
```
:::

Including Stylesheets in `playwright/index.ts`

```ts
import 'element-plus/dist/index.css'
```

Create a test file `tests/example.spec.ts` 

## Using `mount` fixture

For [ElCalendar](https://element-plus.org/en-US/component/calendar.html) Docs

::: code-group
```ts [tests/example.spec.ts]
import { test, expect } from "@playwright/experimental-ct-vue";
import { ElCalendar } from "element-plus";

test.use({ viewport: { width: 800, height: 600 } });

test('ElCalendar', async ({ mount }) => {
  const calendar = await mount(ElCalendar);
});
```

```tsx [tests/example.spec.tsx]
import { test, expect } from "@playwright/experimental-ct-vue";
import { ElCalendar } from "element-plus";

test.use({ viewport: { width: 800, height: 600 } });

test('ElCalendar', async ({ mount }) => {
  const calendar = await mount(<ElCalendar />);
});
```
:::

Run test via `VS Code extension`

![](/ct/vue/example-calendar.png)

## Passing Data to a Component

You can pass props and events to a component by setting `props` in the options:

::: code-group
```ts
test('ElCalendar range', async ({ mount }) => {
  const calendar = await mount(ElCalendar, {
    props: {
      range: [new Date(2023, 1, 1), new Date(2023, 2, 1)]
    }
  });
});
```

```tsx
test('ElCalendar range', async ({ mount }) => {
  const calendar = await mount(<ElCalendar range={[new Date(2023, 1, 1), new Date(2023, 2, 1)]} />);
});

```
:::

## Using Slots


### Default Slot

For [Button](https://element-plus.org/en-US/component/button.html) Docs

::: code-group
```ts
import { test, expect } from "@playwright/experimental-ct-vue";
import { ElButton } from "element-plus";

test("ElButton default slot", async ({ mount }) => {
  const button = await mount(ElButton, {
    props: {
      type: "primary"
    },
    slots: {
      default: "Test Button"
    }
  })
});
```

```tsx
test('ElButton default slot', async ({ mount }) => {
  const button = await mount(<ElButton type="primary">Test Button</ElButton>)
})
```
:::

### Named Slot

For [Result](https://element-plus.org/en-US/component/result.html) docs

```ts
import { test, expect } from "@playwright/experimental-ct-vue";
import { ElResult } from "element-plus";

test("ElResult named slot", async ({ mount }) => {
  const result = await mount(ElResult, {
    props: {
      icon: "success",
      title: "Success Tip",
    },
    slots: {
      extra: "Welcome to next time.",
    }
  })
});
```