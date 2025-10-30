import React from "react";
import {
  Avatar,
  Card1,
  Date1,
  Description1,
  Details,
  Image1,
  Members,
  Tag,
  Tags,
  Title,
} from "./CardStyled";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card1 onClick={() => setOpenModal({ state: true, project: project })}>
      <Image1 src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date1>{project.date}</Date1>
        <Description1>{project.description}</Description1>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
      {/* <Button>View Project</Button> */}
    </Card1>
  );
};

export default ProjectCards;
