import React from "react";
import styled from "styled-components";
import Media from "styled-media-query";

const Footer = props => {
  return (
    <Container>
      <Top>
        <a href="http://ostaco.com/about-us/">About us</a>
        <a href="http://ostaco.com/contact/">Contact us</a>
        <a href="http://ostaco.com/findadealer/">Find a dealer</a>
      </Top>
      <Bottom>
        <BottomLeft>
          <a href="tel:905-660-5021">905-660-5021</a>
          <a
            href="mailto:info@ostaco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@ostaco.com
          </a>
          <a
            href="http://maps.google.com/?q=248 Bowes Rd, Concord ON, Canada, L4K 1J9"
            target="_blank"
            rel="noopener noreferrer"
          >
            248 Bowes Rd, Concord ON, Canada, L4K 1J9
          </a>
        </BottomLeft>
        <BottomRight>
          <p>Copyright © 2019 Ostaco. All rights reserved.</p>
        </BottomRight>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.gold_border};
  display: grid;
  grid-gap: 0;
  background-color: ${({ theme }) => theme.color.main};
  grid-auto-flow: row;
  text-align: center;
  p,
  a {
    color: ${({ theme }) => theme.color.white};
    font-size: 0.75em;
  }
`;

const Top = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 32px;
  justify-content: center;
  grid-gap: 24px;
  ${Media.greaterThan("medium")`
      grid-auto-flow: column;
      grid-gap: 32px;
  `}
`;

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: row;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 32px;
  justify-content: center;
  p {
    margin: 0;
  }

  ${Media.greaterThan("medium")`
      grid-auto-flow: column;
      justify-content: space-between;
  `}
`;
const BottomLeft = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  align-items: center;

  ${Media.greaterThan("medium")`
      grid-auto-flow: column;
      grid-gap: 32px;
  `}
`;
const BottomRight = styled.div`
  display: grid;
  grid-auto-flow: row;

  ${Media.greaterThan("medium")`
      grid-auto-flow: column;
      
  `}
`;

export default Footer;
