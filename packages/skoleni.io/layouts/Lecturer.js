import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
// import CourseBar from "@app/skoleni.io/components/CourseBar";
import Markdown from "@app/common/components/Markdown";

const Name = styled.h2`
  padding-top: 1em;
  border-top: 1px solid #1f1f1f;
`;

const Img = styled.img`
  width: 100%;
`;

const Header = styled.h3``;
const Bio = styled.p``;

const AboutMe = styled.p``;

const Lecturer = props => (
  <Container>
    <Name>{props.name}</Name>
    <Row>
      <Col sm={8}>
        {props.bio && <Bio>{props.bio}</Bio>}
        <Header>O mě</Header>
        {props.aboutMe && <AboutMe>{props.aboutMe}</AboutMe>}

        <Header>Co skolim</Header>
        <Markdown source={props.courses} />
      </Col>
      <Col sm={4}>
        <Img src={props.lecturerImg} />
      </Col>
    </Row>
  </Container>
);

export default Lecturer;
