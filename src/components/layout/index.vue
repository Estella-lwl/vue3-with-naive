<template>
  <div class="main">
    <n-layout has-sider class="main-content">
      <n-layout-sider content-style="padding: 24px;" class="page-sider">
        <Menu></Menu>
      </n-layout-sider>
      <n-layout class="page">
        <n-layout-header class="page-header">
          <h2 class="">HEADER</h2>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;" class="page-content">
          <div class="page-info">
            <RouterView></RouterView>
          </div>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import Menu from "./components/Menu/index.vue";
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  color: #333;
  text-align: center;
  background-color: #f0f2f5;

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.page-header {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;

  height: 48px !important;
}
.page-sider {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
