type FormType = 'input' | 'select' | 'datepicker';

// 表单项中的配置：
export interface FormSchema {
  type: FormType,   // 配置表单时会根据type判断是什么表达项
  label: string,
  placeholder: string,
  rules?: any,
  defaultValue?: any,
  options?: any[],     //针对select
}