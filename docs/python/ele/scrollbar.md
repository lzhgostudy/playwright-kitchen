# Scrollbar

<style>
#v-scroll .scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
#h-scroll .scrollbar-flex-content {
  display: flex;
}
#h-scroll .scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>

<script setup>
import { ref } from 'vue';

</script>

## Vertical scroll

::: details Click me to view the Vue code
```vue
<template>
<el-scrollbar id="v-scroll" height="400px">
  <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
</el-scrollbar>  
</template>
```
:::

<el-scrollbar id="v-scroll" height="400px">
  <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
</el-scrollbar>

::: code-group
```Python
js_handle = """
  const container = document.querySelector('#v-scroll .el-scrollbar__wrap')
  container.scrollTop = 100
"""
# 👆 The list scroll to top 100px
page.evaluate(js_handle)
```
:::


## Horizontal scroll

::: details Click me to view the Vue code
```vue
<template>
<el-scrollbar id="h-scroll">
  <div class="scrollbar-flex-content">
    <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </div>
</el-scrollbar> 
</template>
```
:::

<el-scrollbar id="h-scroll">
  <div class="scrollbar-flex-content">
    <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </div>
</el-scrollbar>

::: code-group
```Python
js_handle = """
  const container = document.querySelector('#h-scroll .el-scrollbar__wrap')
  container.scrollLeft = 200
"""
# 👈 The list scroll to left 200px
page.evaluate(js_handle)
```
:::