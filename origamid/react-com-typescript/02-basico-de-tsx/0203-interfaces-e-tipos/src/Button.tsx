// import React from "react";

// const Button = ({ children }: React.PropsWithChildren) => {
//   // const handleClick = (e: React.MouseEvent) => {
//   const handleClick: React.MouseEventHandler = (e) => {
//     // handleClick: React.MouseEventHandler
//     // => Informando ao ts "para que essa funcao vai ser usada"
//     console.log(e.pageX);
//   };

//   return <button onClick={handleClick}>{children}</button>;
// };

// export default Button;

// Exercicio
// Anote o tipo das propriedades de Button.tsx
import React from "react";
type ButtonProps = React.ComponentProps<"button"> & {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ total, setTotal, ...props }: ButtonProps) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)} {...props}>
      Incrementar {total}
    </button>
  );
};

export default Button;
