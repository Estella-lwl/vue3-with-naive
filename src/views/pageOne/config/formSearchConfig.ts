import { SearchConfig } from '../../../base-ui/BasicForm';

// 表单所有配置：
export const searchConfig:  SearchConfig= {
  // 表单项的配置：
  formItems: [
    {
      type: "input",
      label: "输入",
      field: "",
      // width: 100,
      placeholder: "输入...",
    },
    {
      type: "select",
      label: "选择",
      field: "",
      // width: 100,
      placeholder: "选择...",
      options: [
        {
          label: "option1",
          value: "111",
        },
        {
          label: "option2",
          value: "222",
        },
      ],
    },
    {
      type: "datepicker",
      label: "时间范围",
      field: "",
      // // 这里应该放进otherOptions中，因为不是每个item都会有：
      // startPlaceholder: "开始时间",
      // endPlaceholder: "结束时间",
      otherOptions: {
        type: "daterange", //这里的type代表选择器的类型
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
      },
    },
  ],
  // 响应式布局的配置：无特别设置时使用默认布局。
  colLayout: {
    xGap: '12',
    cols: '4',
    responsive: 'screen',
    labelPlacement: 'left'
  },
  labelWidth: '200',
  itemStyle: {
    // padding: "20px 60px"
  }
};