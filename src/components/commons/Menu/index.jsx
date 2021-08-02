import { MenuWrapper } from "./styles/MenuWrapper";
import Logo from "../../../theme/Logo";
import Button from "../Button";

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
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary">
          Entrar
        </Button>
        <Button variant="primary">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
