import { MenuWrapper } from "./styles/MenuWrapper";
import Logo from "../../../theme/Logo";

const Menu = () => {
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Perguntas frequentes",
      url: "/faq",
    },
    {
      label: "Sobre",
      url: "/sobre",
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.label}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
