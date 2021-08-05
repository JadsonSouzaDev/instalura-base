import { MenuWrapper } from "./styles/MenuWrapper";
import Logo from "../../../theme/Logo";
import Button from "../Button";
import Text from "../../foundation/Text";

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
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text tag="a" variant="smallestException" href={link.url}>
                {link.label}
              </Text>
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
