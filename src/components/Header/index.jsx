import styled from "styled-components";
import Link from "next/link";

const HeaderMain = styled.div`
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
`;

const HeaderLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  text-decoration: none;
  justify-content: space-between;
  position: relative;
  margin-left: auto;
`;

const StyleLink = styled.a`
  padding: 10px;
`;

function Header({ header }) {
  return (
    <>
      <HeaderMain>
        <HeaderLogo>{header.fields.logo}</HeaderLogo>

        <NavItems>
          {header.fields.navItems.map((navItem) => {
            return (
              <Link href={navItem.fields.link} passHref>
                <StyleLink>{navItem.fields.label}</StyleLink>
              </Link>
            );
          })}
        </NavItems>
      </HeaderMain>
    </>
  );
}

export default Header;
