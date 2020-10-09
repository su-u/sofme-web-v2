import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

export const SectionTitle: React.FC<IProps> = ({ text }) => {
  return <H2>{text}</H2>;
};

const H2 = styled.h2`
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  margin: 50px 0;
`;
