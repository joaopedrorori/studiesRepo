// import { useUi } from "./UiContext";

import { useUser } from "./UserContext";

// const Content = () => {
//   const { dark } = useUi();
//   return <h1>{dark ? "dark" : "light"}</h1>;
// };

// export default Content;

const Content = () => {
  const { data, loading } = useUser();
  if (loading) return <div>Loading...</div>;
  if (!data) return null;
  return (
    <div>
      <h3>Preferencias</h3>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>Playback: {data.preferencias.playback}</p>
      <p>Volume: {data.preferencias.volume}</p>
    </div>
  );
};

export default Content;
