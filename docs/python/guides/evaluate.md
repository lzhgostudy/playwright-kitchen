# Evaluating JavaScript

The [page.evaluate()](https://playwright.dev/python/docs/api/class-page#page-evaluate) API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like window and document can be used in evaluate.  

## Get DOM details

### `.getBoundingClientRect()`

The result is very similar to [locator.bounding_box()](https://playwright.dev/python/docs/api/class-locator#locator-bounding-box)

::: details Click me to view the Vue code
```vue
<template>
<el-button id="get-bounding-client-rect" type="primary" size="large">
  Button
</el-button>  
</template>
```
:::

<el-button id="get-bounding-client-rect" type="primary" size="large">
  Button
</el-button>

```python
button = page.locator('#get-bounding-client-rect')
print(button.bounding_box())
# {'x': 336, 'y': 401, 'width': 84.609375, 'height': 40}
info = button.evaluate("dom => dom.getBoundingClientRect()")
print(info)
# {'x': 336, 'y': 401, 'width': 84.609375, 'height': 40, 'top': 401, 'right': 420.609375, 'bottom': 441, 'left': 336}
```

## Set DOM attrs

### `.style`

::: details Click me to view the Vue code
```vue
<template>
<el-button id="modify-style-width" type="primary" size="large">
  This button will be modified its width
</el-button>  
</template>
```
:::

<el-button id="modify-style-width" type="primary" size="large">
  The width of button will reset
</el-button>

```python
button = page.locator('#modify-style-width')
button.evaluate('node => node.style.width = "100%"')
```