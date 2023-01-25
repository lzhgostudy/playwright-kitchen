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

const form = ref({
  input: '',
  datePicker: "",
  timePicker: "",
  datetimePicker: "",
  switch: false,
  checkbox: [],
  radio: "",
  select: "",
  textarea: "",
})
</script>

## Form fill

<el-form :model="form" label-width="120px">
  <el-form-item label="Text input">
    <el-input v-model="form.input" placeholder="Please input" />
  </el-form-item>
  <el-form-item label="Date picker">
    <el-date-picker v-model="form.datePicker" type="date" placeholder="Pick a day" />
  </el-form-item>
  <el-form-item label="Time picker">
    <el-time-picker v-model="form.timePicker" placeholder="Pick time" />
  </el-form-item>
  <el-form-item label="Datetime picker">
    <el-date-picker v-model="form.datetimePicker" type="datetime" placeholder="Select date and time" />
  </el-form-item>
  <el-form-item label="Switch">
    <el-switch v-model="form.switch" />
  </el-form-item>
  <el-form-item label="Checkbox">
    <el-checkbox-group v-model="form.checkbox">
      <el-checkbox label="Online activities" name="type" />
      <el-checkbox label="Promotion activities" name="type" />
      <el-checkbox label="Offline activities" name="type" />
      <el-checkbox label="Simple brand exposure" name="type" />
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Radio">
    <el-radio-group v-model="form.radio">
      <el-radio label="Sponsor" />
      <el-radio label="Venue" />
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Select">
    <el-select v-model="form.select" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>
  <el-form-item label="Textarea">
    <el-input v-model="form.textarea" type="textarea" />
  </el-form-item>
</el-form>

```python
import re
from playwright.sync_api import Page, expect


def test_actions(page: Page):
    page.goto("https://lzhgostudy.github.io/playwright-kitchen/guides/actions.html")

    # Text input
    textInput = page.get_by_label('Text input')
    textInput.fill('Hello Text input')
    expect(textInput).to_have_value('Hello Text input')

    # Date Picker
    datePicker = page.get_by_label('Date picker')
    datePicker.fill('2023-02-01')
    datePicker.blur()

    # Time Picker
    timePicker = page.get_by_placeholder('Pick time')
    timePicker.fill('10:43:20')
    timePicker.blur()

    # Datetime Picker
    datetimePicker = page.get_by_placeholder('Select date and time')
    datetimePicker.focus()
    pickerPanel = page.locator('.el-picker-panel')
    pickerPanel.get_by_placeholder('Select date').fill('2023-02-27')
    pickerPanel.get_by_placeholder('Select time').fill('12:11:10')
    datetimePicker.blur()

    # Switch
    switch = page.locator('.el-switch .el-switch__core')
    switch.click()

    # Checkbox
    page.get_by_text('Online activities').click()
    page.get_by_text('Offline activities').click()

    # Radio
    page.get_by_text('Venue').click()

    # Select
    page.get_by_label('Select').click()
    page.locator('.el-select-dropdown li').get_by_text('Zone one').click()

    # Textarea
    textarea = page.get_by_label('Textarea')
    textarea.fill('Hello Textarea')

    page.wait_for_timeout(4000)

```

Run Test

```bash
pytest --headed example/1_locators.py --slowmo 1000
```

## Mouse click

Performs a simple human click.




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