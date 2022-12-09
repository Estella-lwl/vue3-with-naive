type FormType = 'input' | 'select' | 'datepicker';

// 表单项中的配置：
export interface FormItemConfig {
  type: FormType,   // 配置表单时会根据type判断是什么表达项
  label: string,
  field: string,
  placeholder?: string,
  rules?: any[],
  defaultValue?: any,
  options?: any[],     //针对select
  otherOptions?: any  //针对时间/日期选择器
}

interface layoutConfig {
  // col: any,
  xGap?: string,
  cols?: string,
  responsive?: string,
  inline?: boolean,
  labelPlacement?: string,
}
// 这里是整个表单部分的所有配置：
export interface SearchConfig {
  formItems: FormItemConfig[],
  // 其他样式相关属性：待补充
  // 响应式布局：
  colLayout: layoutConfig,
  labelWidth?: any,
  itemStyle?: any,
}