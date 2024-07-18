import React, { InputHTMLAttributes } from "react";

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {}

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  value,
  onBlur,
  name,
  id,
  ...props
}) => {
  return (
    <input
      id={id}
      name={name}
      type="date"
      className="datePicker"
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default DatePicker;
