import { Copyright, FooterContainer, FooterWrapper, Logo, Nav, NavLink } from './Footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Dibya Ranjan Sahu</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <Copyright>
          &copy; 2025 Dibya Ranjan Sahu. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;