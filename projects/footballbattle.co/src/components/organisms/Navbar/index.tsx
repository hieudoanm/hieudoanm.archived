import React from 'react';
import styled from 'styled-components';
import Container from '../../atoms/Container';
import Sprite from '../../atoms/Sprite';

const StyledNavbar = styled.nav`
  border-image: url(https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/navbar/border.svg)
    6 stretch;
  border-style: solid !important;
  border-width: 6px !important;
  border-top: 0;
`;

const Navbar: React.FC = () => {
  return (
    <div className="bg-[#085723]">
      <StyledNavbar className="py-4 bg-yellow rounded-b-2xl">
        <Container>
          <div className="flex justify-center md:justify-start items-center">
            <Sprite
              title="Football Battle"
              image="https://raw.githubusercontent.com/hieudoanm/cdn/master/images/football-battle/svg/navbar/football-battle.svg"
              className="w-36 h-12 bg-cover bg-center"
            />
          </div>
        </Container>
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
