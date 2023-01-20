# Actions

Playwright can interact with HTML Input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements.

<script setup>
import { ref } from 'vue'

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