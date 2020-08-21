import React from 'react';
import styled from "styled-components";
import { ContentTitle } from '../ContentTitle';
import { SectionTitle } from "../SectionTitle";

interface IEvent {
  title: string;
  description: React.ReactElement;
}

export const About = () => {

  const events: ReadonlyArray<IEvent> = [
    {
      title: 'ソフトメディア研究会とは？',
      description:
        <>
          <p>パソコンを中心に使って創作活動を行うサークルです。
            <strong id="program-strong">プログラム班</strong>、
            <strong id="multi-strong">マルチメディア班</strong>、
            <strong id="dtm-strong">DTM班</strong>の３つがあります。
          </p>
          <ul>
            <li>プログラム班は、様々なプログラミング言語を駆使してゲーム開発やアプリケーション開発を行っています。</li>
            <li>マルチメディア班は、イラストや3DCGの制作を行っています。</li>
            <li>DTM班は、音楽作成ソフトで音楽を作ります。DJ始めました。</li>
          </ul>
        </>,
    },
    {
      title: 'M3 2020春出展  ',
      description:
        <>
          <p>平常時の主な活動日は指定しておりません。空いている時間に部室に来て作業をしたり、役職の仕事をしたり、談話したりしています。</p>
          <p><strong>毎週水曜日午後6:45</strong>から部会を開いており、会員は参加が義務付けられています。（授業等がある場合はそちらを優先します。）
            部会では文化会での行事の人員を選出したり、設備購入等の議決を取ったりなどといった、重要な事を話し合います。</p>
          <p>また、年に２回ある大きなイベント、
            <strong>文化の祭典</strong>と
            <strong>津田沼祭</strong>では、サークルとして各自が作品を出品します。
            発表する作品は、基本的に日々の活動の中で制作したものとなります。
            主なものとしてはゲーム、音楽、CG等があり、それぞれの班がコラボして一つの作品を作ります。
          </p>
        </>,
    },
  ];

  return (
    <Container>
      <SectionTitle text="About"/>
      {events.map(event => {
        return (
          <div key={event.title} className="content">
            <ContentTitle text={event.title}/>
            {event.description}
          </div>
        );
      })}
    </Container>
  )
};

const Container = styled.div`
  .content {
    margin-bottom: 20px;
  }
`;
