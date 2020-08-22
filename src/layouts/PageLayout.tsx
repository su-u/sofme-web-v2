import React from 'react';
import styled from "styled-components";
import { Header } from "../components/Header";

interface IProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<IProps> = ({children}) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;