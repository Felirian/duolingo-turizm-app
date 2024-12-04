import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWr>
    <p>&copy; Landing page created by Felirian</p>
  </FooterWr>
);

const FooterWr = styled.footer`
  background: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  width: 100%;
  bottom: 0;
`;


export default Footer;