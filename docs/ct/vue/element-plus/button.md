
# Button


::: code-group
```tsx [tests/Button.spec.tsx]
import { expect, test } from '@playwright/experimental-ct-vue';
import { ElButton } from 'element-plus';

test.use({ viewport: { width: 500, height: 500 } });

test.describe("Button.vue", () => {
  test('create', async ({ mount }) => {
    const wrapper = await mount(<ElButton type="primary" />)
    await expect(wrapper).toHaveClass(/el-button--primary/)
  })

  test('nativeType', async ({ mount }) => {
    const wrapper = await mount(<ElButton nativeType="submit" />)
    await expect(wrapper).toHaveAttribute('type', 'submit')
  })

  test('loading', async ({ mount }) => {
    const wrapper = await mount(<ElButton loading />)
    await expect(wrapper).toHaveClass(/is-loading/)
  })

  test('size', async ({ mount }) => {
    const wrapper = await mount(<ElButton size="large" />)
    await expect(wrapper).toHaveClass(/el-button--large/)
  })

  test('plain', async ({ mount }) => {
    const wrapper = await mount(<ElButton plain />)
    await expect(wrapper).toHaveClass(/is-plain/)
  })

  test('render text', async ({ mount }) => {
    const TEXT = 'Nice to meet you'
    const wrapper = await mount(
      <ElButton>{TEXT}</ElButton>
    );

    await expect(wrapper).toHaveText(TEXT)

  })
})
```
:::
