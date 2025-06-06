import React from "react";

// type ButtonProps = {
//   tamanho?: string;
//   children: React.ReactNode;
//   onClick?: () => void;
// };//maneira mais detalhada

// type ButtonProps2 = React.PropsWithChildren<{
//   tamanho?: string;
//   onClick?: () => void;
// }>; //maneira que o tsx nos permite usar por ser algo comum

type ButtonProps = React.ComponentProps<"button"> & {
  tamanho: string;
}; //tsx nos permite falar, olha esse componente eh do tipo tal para nao ter que fazer notation de cada props

// const Button = (props: ButtonProps) => {
// const Button = ({ tamanho, children, onClick, className }: ButtonProps) => {
const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;
