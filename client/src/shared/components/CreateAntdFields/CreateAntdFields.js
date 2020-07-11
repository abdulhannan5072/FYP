import React from "react";
import { DatePicker,  TimePicker, Select } from "antd";
import { AntInputt, FormItemm } from "./style";

// const FormItem = Form.Item;
const { Option } = Select;

const CreateAntField = (AntComponent) => ({
  field,
  form,
  hasFeedback,
  label,
  selectOptions,
  submitCount,
  type,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  // const onInputChange = ({ target: { value } }) =>
  //   form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <div className="form-container ">
      <FormItemm
        className=""
        label={label}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          autoComplete="off"
          {...field}
          {...props}
          onBlur={onBlur}
          onChange={field.onChange(field.name)}
        >
          {/* {selectOptions &&
            selectOptions.map((name) => <Option key={name}>{name}</Option>)} */}
        </AntComponent>
      </FormItemm>
    </div>
  );
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(AntInputt);
export const AntTimePicker = CreateAntField(TimePicker);
