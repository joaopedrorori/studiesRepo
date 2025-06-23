import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <img src={vendas} />
          </span>
          <a href="">Vendas</a>
        </li>
        <li>
          <span>
            <img src={webhooks} />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} />
          </span>
          <a>Configuracoes</a>
        </li>
        <li>
          <span>
            <img src={contato} />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
