import React from "react";
import { Block } from "./Block";
import styled from "styled-components";

export const BlockMenu = () => {
  return (
    <Container>
      <div className="introduction">
        <Block
          title="プログラム班"
          to="/program/"
          text={
            <>
              プログラミング言語を使用し、ゲームやアプリを開発する。
              <br />
              娯楽モノから、日常に使えるものまで様々
            </>
          }
          icon="icon-desktop"
        />
      </div>
      <div className="groups">
        <Block
          title="プログラム班"
          to="/program/"
          text={
            <>
              プログラミング言語を使用し、ゲームやアプリを開発する。
              <br />
              娯楽モノから、日常に使えるものまで様々
            </>
          }
          icon="icon-desktop"
        />
        <Block
          title="プログラム班"
          to="/program/"
          text={
            <>
              プログラミング言語を使用し、ゲームやアプリを開発する。
              <br />
              娯楽モノから、日常に使えるものまで様々
            </>
          }
          icon="icon-desktop"
        />
        <Block
          title="プログラム班"
          to="/program/"
          text={
            <>
              プログラミング言語を使用し、ゲームやアプリを開発する。
              <br />
              娯楽モノから、日常に使えるものまで様々
            </>
          }
          icon="icon-desktop"
        />
      </div>
    </Container>
  );
};

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
