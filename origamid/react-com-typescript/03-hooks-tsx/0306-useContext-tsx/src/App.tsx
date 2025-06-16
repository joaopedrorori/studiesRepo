// import React from "react";
// import { UiContextProvider } from "./UiContext";
// import Header from "./Header";
// import Content from "./Content";
// // useContext
// // Defina a interface do contexto e passe ela no generico do createContext
// // React.createContext<IUiContext | null>(null)
// const App = () => {
//   return (
//     <UiContextProvider>
//       <Header />
//       <Content />
//     </UiContextProvider>
//   );
// };

// export default App;

// Exercicio
// Utilize a API: https://data.origamid.dev/usuarios/1
// 1 - Crie um UserContext
// 2 - Use o useFetch dentro do UserContext para esportar data, loading e error
// 3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
// 4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx
import React from "react";
import Header from "./Header";
import Content from "./Content";
import { UserContextProvider } from "./UserContext";
const App = () => {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
};

export default App;
