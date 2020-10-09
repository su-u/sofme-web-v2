import React from "react";
import styled from "styled-components";
import { ContentTitle } from "../ContentTitle";
import { SectionTitle } from "../SectionTitle";

interface IEvent {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export const News = () => {
  const events: ReadonlyArray<IEvent> = [
    {
      title: "ソフメアドベントカレンダー",
      description:
        "ソフトメディア研究会で開催されるアドベントカレンダー企画の2019年版です。12月1日から毎日記事を公開していきます。\n" +
        "部員が今までの活動や好きなことについて書きます。 ",
      buttonText: "アドベントカレンダーページへ",
      buttonUrl: "",
    },
    {
      title: "M3 2020春出展  ",
      description:
        "ソフトメディア研究会は2020年3月1日（日）開催の「M3 2020春」に受かりました！ ",
      buttonText: "M3 2020春公式ページ",
      buttonUrl: "",
    },
    {
      title: "津田沼祭",
      description:
        "ソフトメディア研究会は、2019年11月22日から24日に開催される第70回千葉工業大学津田沼祭に参加します。 本ブースの他に、VR体験ブースを出します。 ",
      buttonText: "津田沼祭公式HPへ",
      buttonUrl: "",
    },
  ];

  return (
    <Container>
      <SectionTitle text="Event" />
      {events.map((event) => {
        return (
          <div key={event.title} className="content">
            <ContentTitle text={event.title} />
            <p>{event.description}</p>
            <a>{event.buttonText}</a>
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  .content {
    margin-bottom: 20px;
  }
`;
