import React from 'react';
import { Block } from "./Block";
import styled from "styled-components";

export const BlockMenu = () => {
  return (
    <Container>
      <div className="introduction">
        <Block/>
      </div>
      <div className="groups">
        <Block/>
        <Block/>
        <Block/>
      </div>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 20px;
  .introduction {
    margin: 0 10px 20px 10px;
  }

  .groups {
    display: flex;
    > div {
      margin: 0 10px;
    }
  }
`;