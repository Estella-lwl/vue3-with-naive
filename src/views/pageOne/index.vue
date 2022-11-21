<template>
  <div>
    <BasicForm :modalConfig="modalConfig" v-model="formData">
      <n-input label="aaa" placeholder="输入..."></n-input>
    </BasicForm>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import BasicForm from "../../base-ui/BasicForm";

const props = defineProps({
  modalConfig: {
    type: Object,
    require: true,
  },
  formSearch: {
    type: Object,
    require: true,
  },
});
const formItem = props.formSearch;
const formData = ref<any>({});
console.log("formItem: ", formItem);
</script>

<style scoped></style>
