import React, { Children } from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  marginB: string;
};

const Input = ({ label, marginB, children, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: marginB }}>
      <label htmlFor={label}>{children}</label>
      <input type="text" id={label} name={label} {...props} />
    </div>
  );
};

export default Input;
