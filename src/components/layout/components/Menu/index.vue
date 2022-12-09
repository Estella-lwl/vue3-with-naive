<template>
  <div class="menu">
    <n-space vertical>
      <n-switch v-model:value="collapsed" />
      <n-layout has-sider>
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
            :expand-icon="expandIcon"
          />
        </n-layout-sider>
        <n-layout>
          <span>内容</span>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.menu {
  background-color: cornflowerblue;
}
</style>
