import React from "react";
import default_colors from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const Text = styled.h3`
  color: ${default_colors.WHITE};
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;
const Header = styled.h1`
  font-weight: bolder;
  color: ${default_colors.WHITE};
  padding: 0.5em 0;
`;
const Container = styled(BootstrapContainer)`
  padding: 1.5em 0.8em;
`;

const MainBarHomepage = props => {
  const Background = styled.div`
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;
  return (
    <Background>
      <Container>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </Container>
    </Background>
  );
};

export default MainBarHomepage;
