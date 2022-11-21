<template>
  <div>
    <slot name="header"></slot>
  </div>
  <n-form class="form">
    <template v-for="item in formItems" :key="item.label">
      <n-form-item :label="item.label" :rules="item.rules">
        <template v-if="item.type === 'input'">
          <n-input :placeholder="item.placeholder"></n-input>
        </template>
        <template v-else-if="item.type === 'select'">
          <n-select
            v-for="opt in item.options"
            :option="opt"
            :value="opt.value"
            :placeholder="item.placeholder"
            >{{ opt.title }}</n-select
          >
        </template>
        <template v-else-if="item.type === 'datepicker'">
          <n-time-picker :placeholder="item.placeholder"> </n-time-picker>
        </template>
      </n-form-item>
    </template>
  </n-form>

  <div>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FormSchema } from "../../BasicForm/index";

export default defineComponent({
  props: {
    formItems: {
      // 断言为PropType的作用：PropType接收一个泛型
      type: Array as PropType<FormSchema[]>,
      default: () => [],
    },
  },

  setup(props, context) {
    console.log("props: ", props, context);
    return {};
  },
});
</script>

<style>
.form {
  padding-top: 22px;
  background-color: aliceblue;
}
</style>
