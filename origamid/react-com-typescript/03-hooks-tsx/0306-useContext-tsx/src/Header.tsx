// import { useUi } from "./UiContext";

import { useUser } from "./UserContext";

// const Header = () => {
//   const { setDark } = useUi();
//   return <button onClick={() => setDark((b) => !b)}>mode</button>;
// };

// export default Header;
const Header = () => {
  const { data } = useUser();
  if (!data) return null;
  return <h1>{data.nome}</h1>;
};

export default Header;
