import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  text: React.ReactElement | string;
  to: string;
  icon: string;
}

export const Block: React.FC<IProps> = ({ title, text, to, icon }) => {
  return (
    <Container>
      <div className="service left-icon" id="program">
        <div className="icon">
          <a href={to} title="プログラム班のページ">
            <i className={icon}></i>
          </a>
        </div>
        <div className="text">
          <h3 className="heading">
            <a href={to} title="プログラム班のページ">
              {title}
            </a>
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background: #22eaaa;
  border-radius: 10px;

  .text {
    .heading {
      margin-top: 0;
    }
    p {
      margin: 0;
    }
  }
`;
