import React from 'react';
import { graphql } from 'gatsby'
import { Header } from '../components/Header';
import { BlockMenu } from "../components/Index/BlockMenu";
import { PageLayout } from "../layouts/PageLayout";
import { News } from "../components/Index/News";
import { About } from "../components/Index/About";
import { PageContent } from "../components/PageContent";

const Index: React.FC<any> = ({data}) => {
  const { html } = data.introductionData.edges[0].node;
  return (
    <>
      <PageLayout>
        <PageContent html={html} />
      </PageLayout>
    </>
  )
};

export default Index;

export const pageQuery = graphql`
    query IndexQuery {
        introductionData: allMarkdownRemark(filter: {frontmatter: {title: {eq: "新入生向けページ"}}}) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fileAbsolutePath
                    html
                }
            }
        }
    }
`
