<template>
  <div class="form">
    <div>
      <slot name="header"></slot>
    </div>
    <n-form :label-placement="colLayout.labelPlacement" :label-width="100">
      <n-grid v-bind="colLayout">
        <template v-for="item in formItems" :key="item.label">
          <n-gi>
            <n-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input'">
                <n-input :placeholder="item.placeholder"></n-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <n-select
                  :options="item.options"
                  :placeholder="item.placeholder"
                >
                </n-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <n-date-picker :type="item.type" v-bind="item.otherOptions">
                </n-date-picker>
              </template>
            </n-form-item>
          </n-gi>
        </template>
      </n-grid>
    </n-form>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FormItemConfig, SearchConfig } from "../index";

export default defineComponent({
  props: {
    formItems: {
      // 断言为PropType的作用：PropType接收一个泛型。数组或对象类型时可用。
      type: Array as PropType<FormItemConfig[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "100",
    },
    // 一般情况下表单项的样式是统一的，所以样式单独拎出来：
    itemStyle: {
      type: Object,
      default: () => ({ padding: "30px 30px" }),
    },
    // 响应式布局：
    colLayout: {
      type: Object,
      default: () => ({
        // xl: 6, //大于1920时；一个占6份，24/6=4，也就是一行里面占4个。
        xGap: "12",
        cols: "4",
        responsive: "screen",
        labelPlacement: "left",
      }),
    },
  },

  setup(props, context) {
    console.log("props: ", props, context);
    return {};
  },
});
</script>

<style scoped lang="less">
.form {
  padding: 20px 30px;
  background-color: aliceblue;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
