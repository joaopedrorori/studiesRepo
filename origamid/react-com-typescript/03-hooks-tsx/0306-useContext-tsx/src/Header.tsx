import { useUi } from "./UiContext";

const Header = () => {
  const { setDark } = useUi();
  return <button onClick={() => setDark((b) => !b)}>mode</button>;
};

export default Header;
