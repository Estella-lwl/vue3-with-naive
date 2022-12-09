<template>
  <div>
    <BasicForm v-bind="searchConfig">
      <template #header>
        <h2>查询</h2>
      </template>

      <template #footer>
        <div>
          <n-button>重置</n-button>
          <n-button type="primary" style="margin-left: 8px">查询</n-button>
        </div>
      </template>
    </BasicForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BasicForm from "../../base-ui/BasicForm";
import { searchConfig } from "./config/formSearchConfig";
</script>

<style scoped></style>
