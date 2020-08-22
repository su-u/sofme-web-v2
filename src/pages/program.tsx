import React from 'react';
import { Header } from '../components/Header';
import { BlockMenu } from "../components/Index/BlockMenu";
import { PageLayout } from "../layouts/PageLayout";
import { News } from "../components/Index/News";
import { About } from "../components/Index/About";

const Index: React.FC<any> = () => {

  return (
    <>
      <Header/>
      <PageLayout>
        <BlockMenu />
        <News />
        <About />
      </PageLayout>
    </>
  )
};

export default Index;