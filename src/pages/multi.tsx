import React from "react";
import { graphql } from "gatsby";
import { PageLayout } from "../layouts/PageLayout";
import { PageContent } from "../components/PageContent";

const Index: React.FC<any> = ({ data }) => {
  const { html } = data.introductionData.edges[0].node;
  return (
    <>
      <PageLayout>
        <PageContent html={html} />
      </PageLayout>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    introductionData: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "マルチ班紹介ページ" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
