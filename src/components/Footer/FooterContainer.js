import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;
