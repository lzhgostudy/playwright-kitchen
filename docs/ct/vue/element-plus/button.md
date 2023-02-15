
# Button

Create a test file `tests/Button.spec.ts`

::: code-group
```ts [tests/Button.spec.ts]
import { test, expect } from "@playwright/experimental-ct-vue";
import { ElButton } from "element-plus";

test.use({ viewport: { width: 500, height: 500 } });

test('element Button', async ({ mount }) => {
  const button = await mount(ElButton, {
    props: {
      type: "primary"
    },
    slots: {
      default: "Test Button"
    }
  });
  await expect(button).toContainText("Test Button");
});
```
:::
