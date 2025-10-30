import {
  Card,
  Image,
  Top,
  Body,
  Name,
  Degree,
  Date,
  Grade,
  Description,
  Span,
} from "./CardStyled";
import React from "react";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
