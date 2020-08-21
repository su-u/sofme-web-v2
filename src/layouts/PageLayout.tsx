import React from 'react';
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<IProps> = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;