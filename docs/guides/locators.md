# Locators

Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find elements on the page at any moment.

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const onSubmit = () => {
  console.log('submit!')
}
</script>

<h2 style="text-align: center">Form</h2>

<el-form :model="form" label-width="120px">
  <el-form-item label-width="0">
    <el-image style="max-width: 100%" :src="url" fit="contain" alt="bird" />
  </el-form-item>
  <el-form-item label="Activity name">
    <el-input v-model="form.name" />
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="form.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker
        v-model="form.date1"
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </el-col>
    <el-col :span="2" style="text-align: center">
      <span class="text-gray-500">-</span>
    </el-col>
    <el-col :span="11">
      <el-time-picker
        v-model="form.date2"
        placeholder="Pick a time"
        style="width: 100%"
      />
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery">
    <el-switch v-model="form.delivery" />
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="Online activities" name="type" />
      <el-checkbox label="Promotion activities" name="type" />
      <el-checkbox label="Offline activities" name="type" />
      <el-checkbox label="Simple brand exposure" name="type" />
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Sponsor" />
      <el-radio label="Venue" />
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity details">
    <el-input v-model="form.desc" placeholder="Enter details" type="textarea" />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>

## `.get_by_role()`

```python
locator = page.get_by_role(role='button', name='Create')
expect(locator).to_have_class(re.compile('primary'))
```

## `.get_by_label()`

```python
page.get_by_label('Activity name').fill('swimming')
```

## `.get_by_placeholder()`

```python
page.get_by_placeholder('Enter details').fill("Hello Textarea")
```

## `.get_by_text()`

```python
page.get_by_text('Offline activities').click()
```

## `.get_by_alt_text()`

```python
page.get_by_alt_text('bird').click()
```

## Locate by CSS

```python
page.locator('button[class*="primary"]').click()
```