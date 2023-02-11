# Locators

Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find elements on the page at any moment.

<script setup>
import { reactive, ref } from 'vue'

const byLabel = reactive({
  name: '',
});
const byPlaceholder = reactive({
  desc: '',
});
const byText = reactive({
  type: [],
});
const byTitle = reactive({
  resource: '',
});
const byRole = reactive({
  delivery: false,
});

const bird_img_url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');

const filterByTextTableData = [
  {
    date: '2022-01-22',
    name: 'Muriel E Ferrara',
    address: '294 Prospect Street, Camden, New Jersey',
  },
  {
    date: '2023-03-12',
    name: 'Catherine C Rogers',
    address: '4569 Cedar Street, Pine Bluff, Arkansas',
  },
  {
    date: '2023-09-04',
    name: 'Raymond V Newby',
    address: '25 Jessie Street, Athens, Ohio',
  },
  {
    date: '2023-12-01',
    name: 'Kevin C Okeefe',
    address: '3081 Ella Street, Brisbane, California',
  },
]
</script>


## `.getByLabel()`

::: details Click me to view the Vue code
```vue {3,4,5}
<template>
  <el-form :model="byLabel" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="byLabel.name" />
    </el-form-item>
  </el-form>
</template>
<script setup>
import { reactive } from 'vue'

const byLabel = reactive({
  name: '',
})
</script>
```
:::


<el-form :model="byLabel" label-width="120px">
  <el-form-item label="Activity name">
    <el-input v-model="byLabel.name" />
  </el-form-item>
</el-form>

::: code-group
```TypeScript
await page.getByLabel("Activity name").fill("Swimming")
```

```Python
page.get_by_label('Activity name').fill('Swimming')
```
:::

## `.getByPlaceholder()`

::: details Click me to view the Vue code
```vue {4}
<template>
  <el-form :model="byPlaceholder" label-width="120px">
    <el-form-item label="Activity details">
      <el-input v-model="byPlaceholder.desc" placeholder="Enter details" type="textarea" />
    </el-form-item>
  </el-form>
</template>
<script setup>
import { reactive } from 'vue'

const byPlaceholder = reactive({
  desc: '',
});
</script>
```
:::

<el-form :model="byPlaceholder" label-width="120px">
  <el-form-item label="Activity details">
    <el-input v-model="byPlaceholder.desc" placeholder="Enter details" type="textarea" />
  </el-form-item>
</el-form>

::: code-group
```TypeScript
await page.getByPlaceholder("Enter details").fill("Hello Textarea")
```

```Python
page.get_by_placeholder('Enter details').fill("Hello Textarea")
```
:::

## `.getByText()`

::: details Click me to view the Vue code
```vue {5,6,7,8}
<template>
  <el-form :model="byText" label-width="120px">
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="byText.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { reactive } from 'vue'

const byText = reactive({
  type: [],
  resource: '',
});
</script>
```
:::

<el-form :model="byText" label-width="120px">
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="byText.type">
      <el-checkbox label="Online activities" name="type" />
      <el-checkbox label="Promotion activities" name="type" />
      <el-checkbox label="Offline activities" name="type" />
      <el-checkbox label="Simple brand exposure" name="type" />
    </el-checkbox-group>
  </el-form-item>
</el-form>

::: code-group
```TypeScript
await page.locator("form").getByText("Offline activities").click()
```
```Python
page.locator('form').get_by_text('Offline activities').click()
```
:::

## `.getByAltText()`

::: details Click me to view the Vue code
```vue
<template>
  <el-image style="max-width: 100%" :src="bird_img_url" fit="contain" alt="bird" />
</template>
<script setup>
import { ref } from 'vue'

const bird_img_url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
</script>
```
:::

<el-image style="max-width: 100%" :src="bird_img_url" fit="contain" alt="bird" />

::: code-group
```TypeScript
await page.getByAltText("bird").click()
```

```Python
page.get_by_alt_text('bird').click()
```
:::

## `.getByTitle()`

::: details Click me to view the Vue code
```vue {5,6}
<template>
<el-form :model="byTitle" label-width="120px">
  <el-form-item label="Resources">
    <el-radio-group v-model="byTitle.resource">
      <el-radio label="Sponsor" title="Sponsor" />
      <el-radio label="Venue" title="Venue" />
    </el-radio-group>
  </el-form-item>
</el-form>
</template>
<script setup>
import { reactive } from 'vue'
const byTitle = reactive({
  resource: '',
});
</script>
```
:::

<el-form :model="byTitle" label-width="120px">
  <el-form-item label="Resources">
    <el-radio-group v-model="byTitle.resource">
      <el-radio label="Sponsor" title="Sponsor" /> 
      <el-radio label="Venue" title="Venue" />
    </el-radio-group>
  </el-form-item>
</el-form>

::: code-group
```TypeScript
await page.locator("form").getByTitle("Venue").click()
```

```Python
page.locator('form').get_by_title('Venue').click()
```
:::

## `.getByRole()`

::: details Click me to view the Vue code
```vue {4}
<template>
<el-form :model="byRole" label-width="120px">
  <el-form-item label="Instant delivery">
    <el-switch v-model="byRole.delivery" />
  </el-form-item>
</el-form>
</template>
<script setup>
import { reactive } from 'vue'
const byRole = reactive({
  delivery: false,
});
</script>
```
:::

<el-form :model="byRole" label-width="120px">
  <el-form-item label="Instant delivery">
    <el-switch v-model="byRole.delivery" />
  </el-form-item>
</el-form>

::: code-group
```TypeScript
const dom = await page.locator("form").getByRole('switch')
await expect(dom).toHaveCount(1)
```

```Python
dom = page.locator('form').get_by_role(role='switch')
expect(dom).to_have_count(1)
```
:::


## Locate by CSS


::: details Click me to view the Vue code
```vue
<template>
  <el-button type="primary">Submit</el-button>
</template>
```
:::

<el-button type="primary">Submit</el-button>

::: code-group
```TypeScript
await page.locator('button[class*="primary"]').click()
```

```Python
page.locator('button[class*="primary"]').click()
```
:::


## Lists


::: details Click me to view the Vue code
```vue
<template>
<div id="list-locator">
  <el-table :data="filterByTextTableData" style="width: 100%">
    <el-table-column type="selection" width="30" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</div>
</template>
<script setup>
const filterByTextTableData = [
  {
    date: '2022-01-22',
    name: 'Muriel E Ferrara',
    address: '294 Prospect Street, Camden, New Jersey',
  },
  {
    date: '2023-03-12',
    name: 'Catherine C Rogers',
    address: '4569 Cedar Street, Pine Bluff, Arkansas',
  },
  {
    date: '2023-09-04',
    name: 'Raymond V Newby',
    address: '25 Jessie Street, Athens, Ohio',
  },
  {
    date: '2023-12-01',
    name: 'Kevin C Okeefe',
    address: '3081 Ella Street, Brisbane, California',
  },
]
</script>
```
:::

<div id="list-locator">
  <el-table :data="filterByTextTableData" style="width: 100%">
    <el-table-column type="selection" width="30" />
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</div>

Common code below

::: code-group
```TypeScript
const rows = await page.locator("#list-locator .el-table__body tr");
```

```Python
rows = page.locator('#list-locator .el-table__body tr')
```
:::

### `.first`

::: code-group
```TypeScript
await rows.first().locator('td').first().click()
```

```Python
rows.first.locator('td').first.click()
```
:::

### `.last`

::: code-group
```TypeScript
await rows.last().locator('td').first().click()
```

```Python
rows.last.locator('td').first.click()
```
:::

### `.count()`

::: code-group
```TypeScript
import assert from "node:assert"

const count = await rows.count();
assert.equal(count, 4)
```

```Python
count = rows.count()
assert count == 4
```
:::

### `.nth(n)`

Returns locator to the n-th matching element. It's zero based, `nth(0)` selects the first element.

::: code-group
```TypeScript
await rows.nth(2).locator("td").first().click()
```

```Python
rows.nth(2).locator('td').first.click()
```
:::

### `.textContent()`

::: code-group
```TypeScript
import assert from "node:assert"

const text = await rows.first().locator('td').last().textContent()
assert.equal(text, '294 Prospect Street, Camden, New Jersey')
```

```Python
text = rows.first.locator('td').last.text_content()
assert text == '294 Prospect Street, Camden, New Jersey'
```
:::


### `.all()`

::: code-group
```TypeScript
for (const item of await rows.all()) {
  await item.locator('td').first().click()
}
```

```Python
rows = page.locator('#list-locator .el-table__body tr')
for item in rows.all():
    item.locator('td').first.click()
```
:::


### `.allInnerTexts()`

::: code-group
```TypeScript
import assert from "node:assert"

const texts = await rows.locator("td:nth-child(3)").allInnerTexts()
assert.deepEqual(texts, ['Muriel E Ferrara', 'Catherine C Rogers', 'Raymond V Newby', 'Kevin C Okeefe'])
```

```Python
texts = rows.locator('td:nth-child(3)').all_inner_texts()
assert texts == ['Muriel E Ferrara', 'Catherine C Rogers', 'Raymond V Newby', 'Kevin C Okeefe']
```
:::


### `.allTextContents()`

::: code-group
```TypeScript
import assert from "node:assert"

const texts = await rows.locator('td:nth-child(3)').allTextContents()
assert.deepEqual(texts, ['Muriel E Ferrara', 'Catherine C Rogers', 'Raymond V Newby', 'Kevin C Okeefe'])
```

```Python
texts = rows.locator('td:nth-child(3)').all_text_contents()
assert texts == ['Muriel E Ferrara', 'Catherine C Rogers', 'Raymond V Newby', 'Kevin C Okeefe']
```
:::

<br/>

## Filtering Locators


### Filter by text

::: code-group
```TypeScript
const rows = await page.locator("#list-locator .el-table__body tr")
await rows.filter({
  hasText: "Raymond V Newby"
}).locator('td').nth(0).click()

// Use a regular expression:
await rows.filter({
  hasText: /Kevin/
}).locator('td').nth(0).click()
```

```Python
page.locator('#list-locator .el-table__body tr')\
  .filter(has_text='Raymond V Newby')\
  .locator('td').nth(0).click()

# Use a regular expression:
page.locator('#list-locator .el-table__body tr')\
  .filter(has_text=re.compile('Raymond'))\
  .locator('td').nth(0).click() 

```
:::


### Filter by another locator

::: code-group
```TypeScript
const rows = await page.locator("#list-locator .el-table__body tr")
await rows.filter({
  has: page.getByText(/Catherine/)
}).locator('td').nth(0).click()
```

```Python
page.locator('#list-locator .el-table__body tr')\
  .filter(has=page.get_by_text('Kevin C Okeefe'))\
  .locator('td').nth(0).click()
```
:::
