import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderWr>
    <h1>Header</h1>
  </HeaderWr>
);

const HeaderWr = styled.header`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

export default Header;