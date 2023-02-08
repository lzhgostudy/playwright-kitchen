# Actions

Playwright can interact with `Element-plus` input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements.

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
<script setup>
import { ref } from 'vue';
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'

const act = ref({
  fill: "",
  switch: false,
  checked: false,
  select1: "",
  select2: "",
});
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];

const fileList = ref([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
]);

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}
const handlePreview = (uploadFile) => {
  console.log(uploadFile)
}
const handleExceed = (files, uploadFiles) => {

}
const beforeRemove = (uploadFile, uploadFiles) => {

}

const slider = ref(0)
</script>

## `fill()、clear()`

::: details Click me to view the Vue code
```vue
<template>
<el-form :model="act" label-width="120px">
  <el-form-item label="Text input">
    <el-input v-model="act.fill" placeholder="Please input" />
  </el-form-item>
</el-form>  
</template>
```
:::

<el-form :model="act" label-width="120px">
  <el-form-item label="Text input">
    <el-input v-model="act.fill" placeholder="Please input" />
  </el-form-item>
</el-form>

```python
page.get_by_label('Text input').fill('Hello Text input')
page.get_by_label('Text input').clear()
```


## `click()`

::: details Click me to view the Vue code
```vue
<template>
<el-form :model="act" label-width="120px">
  <el-form-item label="Switch">
    <el-switch v-model="act.switch" active-text="Open" inactive-text="Close" />
  </el-form-item>
</el-form>  
</template>
```
:::

<el-form :model="act" label-width="120px">
  <el-form-item label="Switch">
    <el-switch v-model="act.switch" active-text="Open" inactive-text="Close" />
  </el-form-item>
</el-form>

```python
page.get_by_text('Open').click()
page.get_by_text('Close').click()
```

## `check()、uncheck()` & `set_checked(bool)`

::: details Click me to view the Vue code
```vue
<template>
<el-form :model="act" label-width="120px">
  <el-form-item label="Checkbox">
    <el-checkbox v-model="act.checked" label="Check Option 1" />
  </el-form-item>
</el-form>  
</template>
```
:::

<el-form :model="act" label-width="120px">
  <el-form-item label="Checkbox">
    <el-checkbox v-model="act.checked" label="Check Option 1" />
  </el-form-item>
</el-form>

```python
# check & uncheck
page.get_by_text('Check Option 1').check()
page.get_by_text('Check Option 1').uncheck()

# set_checked
page.get_by_text('Check Option 1').set_checked(True)
page.get_by_text('Check Option 1').set_checked(False)
```

## `Element-plus Select`

::: details Click me to view the Vue code
```vue
<template>
<el-form :model="act" label-width="120px">
  <el-form-item label="Select 1">
      <el-select v-model="act.select1" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
  </el-form-item>
  <el-form-item label="Select 2">
      <el-select v-model="act.select2" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
  </el-form-item>
</el-form>  
</template>
```
:::

<el-form :model="act" label-width="120px">
  <el-form-item label="Select 1">
      <el-select v-model="act.select1" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
  </el-form-item>
  <el-form-item label="Select 2">
      <el-select v-model="act.select2" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
  </el-form-item>
</el-form>

```python
page.get_by_label('Select 1').click()
popover = page.locator('.el-popper:visible')
popover.get_by_text('Option2').click()

page.get_by_label('Select 2').click()
popover = page.locator('.el-popper:visible')
popover.get_by_text('Option4').click()
```

## Mouse click

Performs a simple human click.

::: details Click me to view the Vue code
```vue
<template>
<el-row class="block-col-2">
  <el-col :span="8">
    <span class="demonstration">hover to trigger</span>
    <el-dropdown>
      <span class="el-dropdown-link" data-pw="hover">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
  <el-col :span="8">
    <span class="demonstration">click to trigger</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link" data-pw="click">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
  <el-col :span="8">
    <span class="demonstration">right click to trigger</span>
    <el-dropdown trigger="contextmenu">
      <span class="el-dropdown-link" data-pw="right-click">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
</el-row>  
</template>
```
:::

<el-row class="block-col-2">
  <el-col :span="8">
    <span class="demonstration">hover to trigger</span>
    <el-dropdown>
      <span class="el-dropdown-link" data-pw="hover">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
  <el-col :span="8">
    <span class="demonstration">click to trigger</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link" data-pw="click">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
  <el-col :span="8">
    <span class="demonstration">right click to trigger</span>
    <el-dropdown trigger="contextmenu">
      <span class="el-dropdown-link" data-pw="right-click">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-col>
</el-row>

```python
def test_mouse(page: Page):
    page.goto("https://lzhgostudy.github.io/playwright-kitchen/guides/actions.html")
    # hover to trigger
    page.locator('[data-pw="hover"]').hover()
    # click to trigger
    page.locator('[data-pw="click"]').click()
    # right click to trigger
    page.locator('[data-pw="right-click"]').click(button="right")
```

## Upload files

<el-upload
  v-model:file-list="fileList"
  class="upload-demo"
  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
  multiple
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  :limit="3"
  :on-exceed="handleExceed"
>
  <el-button type="primary">Click to upload</el-button>
  <template #tip>
    <div class="el-upload__tip">
      jpg/png files with a size less than 500KB.
    </div>
  </template>
</el-upload>


## Drag and Drop

::: details Click me to view the Vue code
```vue
<template>
<div id="slider-demo-block">
  <span class="demonstration">Default style</span>
  <el-slider v-model="slider" />
</div>  
</template>
```
:::

<div id="slider-demo-block">
  <span class="demonstration">Default style</span>
  <el-slider v-model="slider" />
</div>

```python
container = page.locator('id=slider-demo-block')
source = container.locator('.el-slider__button')
target = container.locator('.el-slider')
target_box = target.bounding_box()
# ✓ The circle slider will arrive to 88%
source.drag_to(target, target_position={'x': target_box['width'] * 0.88, 'y': 13})
```