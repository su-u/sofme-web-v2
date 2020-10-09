import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

export const ContentTitle: React.FC<IProps> = ({ text }) => {
  return <H3>{text}</H3>;
};

const H3 = styled.h3`
  border-bottom: 1px solid #000;
  border-left: 10px solid #000;
  padding: 10px;
  margin-top: 0;
`;
