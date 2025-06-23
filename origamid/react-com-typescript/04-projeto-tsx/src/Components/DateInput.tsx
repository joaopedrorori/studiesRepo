import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>
        {label}
        <input type="date" name={label} id={label} {...props} />
      </label>
    </div>
  );
};

export default DateInput;
