import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
  const { markdownRemark: post} = data; //const post = data.markdownRemark

  return(
    <Layout>
      <SEO title= { post.frontmatter.title } />
      <h1>{ post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`