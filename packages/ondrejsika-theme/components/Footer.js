import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import default_colors from "@app/ondrejsika-theme/config/colors";
import LiHex from "@app/ondrejsika-theme/components/LiHex";

const CenterP = styled.p`
  color: ${default_colors.WHITE};
  text-align: center;
`;

const Footer = props => {
  const Background = styled.div`
    margin-top: 3em;
    padding: 1em 0;
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;
  return (
    <Background>
      <Container>
        <Row>
          <Col sm={4}>{props.firstColumn}</Col>
          <Col sm={4}>{props.secondColumn}</Col>
          <Col sm={4}>{props.thirdColumn}</Col>
        </Row>
        <CenterP>{props.center}</CenterP>
        <CenterP>
          Website by{" "}
          <a
            href="https://zuzjes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-11 text a-underline text-white"
          >
            Zuzana Jeschke
          </a>
        </CenterP>
      </Container>
    </Background>
  );
};

Footer.Li = LiHex;

Footer.Wrapper = styled.div`
  padding: 0.5em 0;
  color: white;
`;

Footer.A = styled.a`
  color: white;
  text-decoration: underline;
  &:hover {
    color: white;
    text-decoration: underline white;
  }
`;

Footer.H4 = styled.h4`
  color: white;
`;

export default Footer;
