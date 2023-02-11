# Assertions

```Python
from playwright.sync_api import expect
```

<script setup>
import { ref } from 'vue';

const act = ref({
  fill: "",
  switch: false,
  notCheck: false,
  checked: true,
  select: "",
  radio: "",
  textarea: "",
});
const tableData = [
  {
    date: '2022-01-22',
    name: 'Muriel E Ferrara',
    age: 18,
    address: '294 Prospect Street, Camden, New Jersey',
  },
  {
    date: '2023-03-12',
    name: 'Catherine C Rogers',
    age: 28,
    address: '4569 Cedar Street, Pine Bluff, Arkansas',
  },
  {
    date: '2023-09-04',
    name: 'Raymond V Newby',
    age: 12,
    address: '25 Jessie Street, Athens, Ohio',
  },
  {
    date: '2023-12-01',
    name: 'Kevin C Okeefe',
    age: 30,
    address: '3081 Ella Street, Brisbane, California',
  },
]
</script>

## `.to_be_checked() .not_to_be_checked()`

::: details Click me to view the Vue code
```vue
<template>
<el-form id="example-1" :model="act" label-width="120px">
  <el-form-item label="Checkbox">
    <el-checkbox v-model="act.notCheck" label="Not Check Option" />
    <el-checkbox v-model="act.checked" label="Checked Option" />
  </el-form-item>
</el-form>  
</template>
```
:::

<el-form id="example-1" :model="act" label-width="120px">
  <el-form-item label="Checkbox">
    <el-checkbox v-model="act.notCheck" label="Not Check Option" />
    <el-checkbox v-model="act.checked" label="Checked Option" />
  </el-form-item>
</el-form>

::: code-group
```Python
checkbox = page.get_by_text('Checked Option')
expect(checkbox).to_be_checked()
checkbox = page.get_by_text('Not Check Option')
expect(checkbox).not_to_be_checked()
```
:::


## `.to_be_disabled() .to_be_enabled()`

::: details Click me to view the Vue code
```vue
<template>
<el-form id="example-2" :model="act" label-width="120px">
  <el-form-item label="Checkbox">
    <el-checkbox disabled v-model="act.notCheck" label="Disabled Check Option" />
  </el-form-item>

  <el-form-item label="Text Input">
    <el-input v-model="act.fill" disabled placeholder="Disabled Input" />
  </el-form-item>

  <el-form-item label="Select">
    <el-select disabled v-model="act.select" placeholder="Disabled Select">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>

  <el-form-item label="Radio">
    <el-radio-group v-model="act.radio">
      <el-radio label="Sponsor" />
      <el-radio label="Venue" />
    </el-radio-group>
  </el-form-item>

  <el-form-item label="Textarea">
    <el-input v-model="act.textarea" placeholder="Please Input" type="textarea" />
  </el-form-item>

  <el-form-item>
    <el-button disabled type="primary">Disabled Button</el-button>
    <el-button>Enabled Button</el-button>
  </el-form-item>
</el-form>
</template>
```
:::

<el-form id="example-2" :model="act" label-width="120px">
  <el-form-item label="Checkbox">
    <el-checkbox disabled v-model="act.notCheck" label="Disabled Check Option" />
  </el-form-item>

  <el-form-item label="Text Input">
    <el-input v-model="act.fill" disabled placeholder="Disabled Input" />
  </el-form-item>

  <el-form-item label="Select">
    <el-select disabled v-model="act.select" placeholder="Disabled Select">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>

  <el-form-item label="Radio">
    <el-radio-group v-model="act.radio">
      <el-radio label="Sponsor" />
      <el-radio label="Venue" />
    </el-radio-group>
  </el-form-item>

  <el-form-item label="Textarea">
    <el-input v-model="act.textarea" placeholder="Please Input" type="textarea" />
  </el-form-item>

  <el-form-item>
    <el-button disabled type="primary">Disabled Button</el-button>
    <el-button>Enabled Button</el-button>
  </el-form-item>
</el-form>

::: code-group
```Python
form = page.locator('#example-2')
expect(form.get_by_text('Disabled Check Option')).to_be_disabled()
expect(form.get_by_label('Text Input')).to_be_disabled()
expect(form.get_by_label('Select')).to_be_disabled()
expect(form.get_by_label('Radio')).to_be_enabled()
expect(form.get_by_label('Textarea')).to_be_enabled()
expect(form.get_by_text('Disabled Button')).to_be_disabled()
expect(form.get_by_text('Enabled Button')).to_be_enabled()
```
:::

## `.to_be_empty()`

Ensures the Locator points to an empty editable element or to a DOM node that has no text.

::: details Click me to view the Vue code
```vue
<template>
  <el-empty id="example-empty" description=" " />
</template>
```
:::

<el-empty id="example-empty" description=" " />

::: code-group
```Python
expect(page.locator('#example-empty')).to_be_empty()
```
:::

::: details Click me to view the Vue code
```vue
<template>
  <el-empty id="example-not-empty" description="No Data" />
</template>
```
:::

<el-empty id="example-not-empty" description="No Data" />

::: code-group
```Python
expect(page.locator('#example-not-empty')).not_to_be_empty()
```
:::

<br/>

# Table List

<br/>

::: details Click me to view the Vue code
```vue
<template>
<div id="table-data-list">
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="30" />
    <el-table-column prop="date" label="Date" width="120" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" width="80" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</div>  
</template>
<script setup>
const tableData = [
  {
    date: '2022-01-22',
    name: 'Muriel E Ferrara',
    age: 18,
    address: '294 Prospect Street, Camden, New Jersey',
  },
  {
    date: '2023-03-12',
    name: 'Catherine C Rogers',
    age: 28,
    address: '4569 Cedar Street, Pine Bluff, Arkansas',
  },
  {
    date: '2023-09-04',
    name: 'Raymond V Newby',
    age: 12,
    address: '25 Jessie Street, Athens, Ohio',
  },
  {
    date: '2023-12-01',
    name: 'Kevin C Okeefe',
    age: 30,
    address: '3081 Ella Street, Brisbane, California',
  },
]
</script>
```
:::

<div id="table-data-list">
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection" width="30" />
    <el-table-column prop="date" label="Date" width="120" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" width="80" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</div>

::: code-group
```Python
# common code below
table = page.locator('#table-data-list')
rows = table.locator('.el-table:visible .el-table__row')
```
:::

## `.to_have_id()`

::: code-group
```Python
expect(table).to_have_id('table-data-list')
```
:::

## `.to_have_count()`

::: code-group
```Python
expect(rows).to_have_count(4)
```
:::

## `.to_contain_text()`

::: code-group
```Python
# ✓ Contains the text
expect(rows.first).to_contain_text('Muriel')
expect(rows.first).to_contain_text(re.compile(r'Prospect'))
# ✓ Contains the right items in the right order
expect(rows).to_contain_text(['Ferrara', 'Rogers', 'Raymond', 'Kevin'])
# ✖ Wrong order
expect(rows).to_contain_text(['Raymond', 'Rogers'])
# ✖ No item contains this text
expect(rows).to_contain_text(['Mary'])
# ✖ Locator points to the outer list element, not to the list items
expect(table).to_contain_text(['Ferrara', 'Rogers'])
```
:::

## `.to_have_text()`

::: code-group
```Python
# ✖ Wrong, not only has this text
expect(rows.first).to_have_text('Muriel E Ferrara')
# ✓ The third td DOM has the text only in this row
expect(rows.first.locator('td').nth(2)).to_have_text('Muriel E Ferrara')
# ✓
expect(rows.first.locator('td').nth(4)).to_have_text(re.compile(r".* Prospect Street"))
# ✓ First row has this text from 5 td-DOMs
expect(rows.first.locator('td')).to_have_text(['', '2022-01-22', 'Muriel E Ferrara', '18', '294 Prospect Street, Camden, New Jersey'])
# ✖ The row item does not match, wrong order
expect(rows.first.locator('td')).to_have_text(['Muriel E Ferrara', '18', '294 Prospect Street, Camden, New Jersey'])
```
:::
